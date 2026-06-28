import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ParticleField = () => {
  const pointsRef = useRef();
  const count = 800;

  // Generate particles arranged in a square layout with grid-like lines, resembling a CPU die
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Create a grid of points with some randomness
      const row = Math.floor(i / 20);
      const col = i % 20;
      
      const x = (col - 10) * 0.25 + (Math.random() - 0.5) * 0.05;
      const y = (row - 20) * 0.25 + (Math.random() - 0.5) * 0.05;
      const z = (Math.random() - 0.5) * 0.2;

      arr[i * 3] = x;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = z;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00FF88"
        size={0.06}
        sizeAttenuation={true}
        transparent
        opacity={0.8}
      />
    </points>
  );
};

const ParticleFieldCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <ParticleField />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ParticleFieldCanvas;
