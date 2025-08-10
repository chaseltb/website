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

    const camera = new THREE.PerspectiveCamera(75, 1200 / 400, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(1200, 400);
    renderer.setClearColor(0x0a0a0a, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xa855f7, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Additional lighting for the gold rook
    const goldLight = new THREE.DirectionalLight(0xffd700, 0.8);
    goldLight.position.set(-5, 5, 5);
    scene.add(goldLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.3);
    rimLight.position.set(0, -5, -5);
    scene.add(rimLight);

    // Create torus knot (messy state)
    const torusKnotGeometry = new THREE.TorusKnotGeometry(1.2, 0.4, 100, 16);
    const torusKnotMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xff6b6b,
      transparent: true,
      opacity: 0.8
    });
    const torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);
    torusKnot.position.x = -5;
    scene.add(torusKnot);

    // Create glowing purple dodecahedron (organized state)
    const dodecahedronGeometry = new THREE.DodecahedronGeometry(1.5);
    const dodecahedronMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xa855f7,
      metalness: 0.3,
      roughness: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      emissive: 0xa855f7,
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0.9
    });
    const dodecahedron = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial);
    dodecahedron.position.x = 5;
    scene.add(dodecahedron);

    const iconMaterial = new THREE.MeshPhongMaterial({ color: 0x22c55e });
    const iconMeshes: THREE.Mesh[] = [];

    // Create emoji sprites for torus knot
    const chaosEmojiTextures = ['😵', '🤔', '😤', '😩', '🤯'].map(emoji => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const context = canvas.getContext('2d')!;
      context.font = '96px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(emoji, 64, 64);
      return new THREE.CanvasTexture(canvas);
    });

    const chaosEmojiSprites: THREE.Sprite[] = [];
    chaosEmojiTextures.forEach((texture, index) => {
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(1, 1, 1);
      
      // Position around torus knot
      const angle = (index / chaosEmojiTextures.length) * Math.PI * 2;
      sprite.position.set(
        -5 + Math.cos(angle) * 2,
        Math.sin(angle) * 2,
        Math.sin(angle * 2) * 0.5
      );
      
      scene.add(sprite);
      chaosEmojiSprites.push(sprite);
    });

    // Create business/software emoji sprites for dodecahedron
    const businessEmojiTextures = ['💰', '📈', '🎯', '✨', '📊', '🏆'].map(emoji => {
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

    const businessEmojiSprites: THREE.Sprite[] = [];
    businessEmojiTextures.forEach((texture, index) => {
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(0.6, 0.6, 1);
      
      // Position around dodecahedron in organized pattern
      const phi = Math.acos(-1 + (2 * index) / businessEmojiTextures.length);
      const theta = Math.sqrt(businessEmojiTextures.length * Math.PI) * phi;
      
      sprite.position.set(
        5 + Math.cos(theta) * Math.sin(phi) * 2.5,
        Math.sin(theta) * Math.sin(phi) * 2.5,
        Math.cos(phi) * 2.5
      );
      
      scene.add(sprite);
      businessEmojiSprites.push(sprite);
    });

    // Create point lights for each face of the dodecahedron
    const dodecahedronFaces = 12;
    const facePointLights: THREE.PointLight[] = [];
    
    for (let i = 0; i < dodecahedronFaces; i++) {
      const pointLight = new THREE.PointLight(0xa855f7, 0.2, 3);
      
      // Position lights at dodecahedron face centers
      const phi = Math.acos(-1 + (2 * i) / dodecahedronFaces);
      const theta = Math.sqrt(dodecahedronFaces * Math.PI) * phi;
      
      pointLight.position.set(
        5 + Math.cos(theta) * Math.sin(phi) * 1.8,
        Math.sin(theta) * Math.sin(phi) * 1.8,
        Math.cos(phi) * 1.8
      );
      
      scene.add(pointLight);
      facePointLights.push(pointLight);
    }

    // Mouse interaction for hover effect
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      // Check if hovering over dodecahedron area (rough approximation)
      const dodecahedronScreenX = 0.5; // Right side of screen
      const hoverDistance = Math.abs(mouseX - dodecahedronScreenX);
      isHovering = hoverDistance < 0.3 && Math.abs(mouseY) < 0.5;
    };

    renderer.domElement.addEventListener('mousemove', handleMouseMove);

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
      chaosEmojiSprites.forEach((sprite, index) => {
        const time = Date.now() * 0.001;
        const angle = (index / chaosEmojiSprites.length) * Math.PI * 2 + time;
        sprite.position.set(
          -5 + Math.cos(angle) * (2 + Math.sin(time * 2) * 0.5),
          Math.sin(angle) * (2 + Math.cos(time * 1.5) * 0.5),
          Math.sin(angle * 2 + time) * 0.8
        );
        sprite.rotation.z += 0.05;
      });

      // Rotate dodecahedron smoothly and handle hover effect
      dodecahedron.rotation.x += 0.005;
      dodecahedron.rotation.y += 0.01;
      dodecahedron.rotation.z += 0.003;
      
      // Enhance glow on hover
      const targetIntensity = isHovering ? 0.6 : 0.3;
      dodecahedronMaterial.emissiveIntensity += (targetIntensity - dodecahedronMaterial.emissiveIntensity) * 0.1;
      
      // Animate face point lights intensity on hover
      const targetLightIntensity = isHovering ? 0.5 : 0.2;
      facePointLights.forEach(light => {
        light.intensity += (targetLightIntensity - light.intensity) * 0.1;
      });

      // Animate business emoji sprites in organized orbits
      businessEmojiSprites.forEach((sprite, index) => {
        const time = Date.now() * 0.001;
        const baseAngle = (index / businessEmojiSprites.length) * Math.PI * 2;
        const phi = Math.acos(-1 + (2 * index) / businessEmojiSprites.length);
        const theta = baseAngle + time * 0.5;
        
        sprite.position.set(
          5 + Math.cos(theta) * Math.sin(phi) * 2.5,
          Math.sin(theta) * Math.sin(phi) * 2.5,
          Math.cos(phi) * 2.5
        );
      });

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Intersection Observer for scroll-based animation (center of screen)
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    if (mountRef.current) {
      observer.observe(mountRef.current);
    }

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (renderer.domElement) {
        renderer.domElement.removeEventListener('mousemove', handleMouseMove);
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
        
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="card p-8 bg-neutral-900/40 border border-neutral-800/50 shadow-[0_0_35px_rgba(168,85,247,0.3)]">
            <div className="flex items-center justify-center gap-12">
              {/* Three.js Animation */}
              <div 
                ref={mountRef} 
                className="rounded-xl overflow-hidden border border-neutral-700/50"
                style={{ width: '1200px', height: '400px' }}
              />
            </div>
            
            {/* Labels below animation */}
            <div className="flex justify-between items-center mt-8 px-8">
              <div className="text-center flex-1">
                <h3 className="text-lg font-semibold text-red-400 mb-2">Your Project Now</h3>
                <p className="text-sm text-neutral-500">Chaotic & Stuck</p>
              </div>
              
              <div className="flex-1 flex justify-center">
                <CaretRight className="h-12 w-12 text-brand-500" weight="bold" />
              </div>
              
              <div className="text-center flex-1">
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