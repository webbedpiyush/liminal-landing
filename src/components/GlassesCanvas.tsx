import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Generate points that form the shape of glasses
function generateGlassesPoints(count: number): Float32Array {
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const section = Math.random();
    
    if (section < 0.35) {
      // Left lens (circle)
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.8 + Math.random() * 0.3;
      const filled = Math.random() < 0.3;
      const r = filled ? Math.random() * radius : radius;
      positions[i3] = -1.3 + Math.cos(angle) * r;
      positions[i3 + 1] = Math.sin(angle) * r;
      positions[i3 + 2] = (Math.random() - 0.5) * 0.1;
    } else if (section < 0.7) {
      // Right lens (circle)
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.8 + Math.random() * 0.3;
      const filled = Math.random() < 0.3;
      const r = filled ? Math.random() * radius : radius;
      positions[i3] = 1.3 + Math.cos(angle) * r;
      positions[i3 + 1] = Math.sin(angle) * r;
      positions[i3 + 2] = (Math.random() - 0.5) * 0.1;
    } else if (section < 0.8) {
      // Bridge
      positions[i3] = (Math.random() - 0.5) * 0.8;
      positions[i3 + 1] = 0.2 + (Math.random() - 0.5) * 0.2;
      positions[i3 + 2] = (Math.random() - 0.5) * 0.1;
    } else if (section < 0.9) {
      // Left temple
      positions[i3] = -2.1 - Math.random() * 1.5;
      positions[i3 + 1] = 0.3 + (Math.random() - 0.5) * 0.15;
      positions[i3 + 2] = -0.5 - Math.random() * 0.8;
    } else {
      // Right temple
      positions[i3] = 2.1 + Math.random() * 1.5;
      positions[i3 + 1] = 0.3 + (Math.random() - 0.5) * 0.15;
      positions[i3 + 2] = -0.5 - Math.random() * 0.8;
    }
  }
  
  return positions;
}

interface ParticleGlassesProps {
  scrollProgress: number;
}

function ParticleGlasses({ scrollProgress }: ParticleGlassesProps) {
  const ref = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => generateGlassesPoints(3000), []);
  
  useFrame((state) => {
    if (!ref.current) return;
    
    const time = state.clock.elapsedTime;
    
    // Gentle rotation based on time and scroll
    ref.current.rotation.y = Math.sin(time * 0.3) * 0.15 + scrollProgress * Math.PI * 0.5;
    ref.current.rotation.x = Math.sin(time * 0.2) * 0.05;
    
    // Subtle floating motion
    ref.current.position.y = Math.sin(time * 0.5) * 0.1;
  });
  
  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#d4b896"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  );
}

interface GlassesCanvasProps {
  scrollProgress?: number;
}

const GlassesCanvas = ({ scrollProgress = 0 }: GlassesCanvasProps) => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <ParticleGlasses scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
};

export default GlassesCanvas;
