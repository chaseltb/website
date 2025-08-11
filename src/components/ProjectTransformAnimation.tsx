import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { CaretRight } from 'phosphor-react';

const ProjectTransformAnimation: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, 800 / 400, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(800, 400);
    renderer.setClearColor(0x0a0a0a, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xa855f7, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create torus knot (messy state)
    const torusKnotGeometry = new THREE.TorusKnotGeometry(1.2, 0.4, 100, 16);
    const torusKnotMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xff6b6b,
      transparent: true,
      opacity: 0.8
    });
    const torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);
    torusKnot.position.x = -3;
    scene.add(torusKnot);

    // Create sphere (organized state)
    const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xa855f7,
      transparent: true,
      opacity: 0.8
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 3;
    scene.add(sphere);

    // Create emoji sprites for torus knot
    const emojiTextures = ['😵', '🤔', '😤', '😩', '🤯'].map(emoji => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const context = canvas.getContext('2d')!;
      context.font = '48px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(emoji, 32, 32);
      return new THREE.CanvasTexture(canvas);
    });

    const emojiSprites: THREE.Sprite[] = [];
    emojiTextures.forEach((texture, index) => {
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(0.5, 0.5, 1);
      
      // Position around torus knot
      const angle = (index / emojiTextures.length) * Math.PI * 2;
      sprite.position.set(
        -3 + Math.cos(angle) * 2,
        Math.sin(angle) * 2,
        Math.sin(angle * 2) * 0.5
      );
      
      scene.add(sprite);
      emojiSprites.push(sprite);
    });

    // Create icon sprites for sphere (using simple geometric shapes as placeholders)
    const iconGeometries = [
      new THREE.BoxGeometry(0.2, 0.2, 0.2),
      new THREE.ConeGeometry(0.1, 0.3, 8),
      new THREE.CylinderGeometry(0.1, 0.1, 0.3, 8),
      new THREE.OctahedronGeometry(0.15),
      new THREE.TetrahedronGeometry(0.15)
    ];

    const iconMaterial = new THREE.MeshPhongMaterial({ color: 0x22c55e });
    const iconMeshes: THREE.Mesh[] = [];

    iconGeometries.forEach((geometry, index) => {
      const mesh = new THREE.Mesh(geometry, iconMaterial);
      
      // Position around sphere in organized pattern
      const phi = Math.acos(-1 + (2 * index) / iconGeometries.length);
      const theta = Math.sqrt(iconGeometries.length * Math.PI) * phi;
      
      mesh.position.set(
        3 + Math.cos(theta) * Math.sin(phi) * 2.5,
        Math.sin(theta) * Math.sin(phi) * 2.5,
        Math.cos(phi) * 2.5
      );
      
      scene.add(mesh);
      iconMeshes.push(mesh);
    });

    // Animation loop
    const animate = () => {
      if (!isVisible) {
        animationIdRef.current = requestAnimationFrame(animate);
        return;
      }

      // Rotate torus knot chaotically
      torusKnot.rotation.x += 0.02;
      torusKnot.rotation.y += 0.03;
      torusKnot.rotation.z += 0.01;

      // Animate emoji sprites chaotically
      emojiSprites.forEach((sprite, index) => {
        const time = Date.now() * 0.001;
        const angle = (index / emojiSprites.length) * Math.PI * 2 + time;
        sprite.position.set(
          -3 + Math.cos(angle) * (2 + Math.sin(time * 2) * 0.5),
          Math.sin(angle) * (2 + Math.cos(time * 1.5) * 0.5),
          Math.sin(angle * 2 + time) * 0.8
        );
        sprite.rotation.z += 0.05;
      });

      // Rotate sphere smoothly
      sphere.rotation.y += 0.01;

      // Animate icon meshes in organized orbits
      iconMeshes.forEach((mesh, index) => {
        const time = Date.now() * 0.001;
        const baseAngle = (index / iconMeshes.length) * Math.PI * 2;
        const phi = Math.acos(-1 + (2 * index) / iconMeshes.length);
        const theta = baseAngle + time * 0.5;
        
        mesh.position.set(
          3 + Math.cos(theta) * Math.sin(phi) * 2.5,
          Math.sin(theta) * Math.sin(phi) * 2.5,
          Math.cos(phi) * 2.5
        );
        
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Intersection Observer for scroll-based animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (mountRef.current) {
      observer.observe(mountRef.current);
    }

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      observer.disconnect();
      renderer.dispose();
    };
  }, [isVisible]);

  return (
    <div className="section section-light">
      <div className="container">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-100">
            Go from a mess to a fully working project
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Watch how I transform chaotic, half-finished projects into polished, professional websites
          </p>
        </div>
        
        <div className="flex items-center justify-center mb-16">
          <div className="card p-8 bg-neutral-900/40 border border-neutral-800/50 shadow-[0_0_35px_rgba(168,85,247,0.3)]">
            <div className="flex items-center justify-center gap-8">
              {/* Messy State Label */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-red-400 mb-2">Your Project Now</h3>
                <p className="text-sm text-neutral-500">Chaotic & Stuck</p>
              </div>
              
              {/* Three.js Animation */}
              <div 
                ref={mountRef} 
                className="rounded-xl overflow-hidden border border-neutral-700/50"
                style={{ width: '800px', height: '400px' }}
              />
              
              {/* Arrow */}
              <div className="flex flex-col items-center">
                <CaretRight className="h-12 w-12 text-brand-500 mb-2" weight="bold" />
                <p className="text-sm text-brand-400 font-medium">Transform</p>
              </div>
              
              {/* Organized State Label */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-green-400 mb-2">After I'm Done</h3>
                <p className="text-sm text-neutral-500">Organized & Ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTransformAnimation;