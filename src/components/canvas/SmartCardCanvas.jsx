import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, OrbitControls, Environment } from '@react-three/drei';

const SmartCard = () => {
  const cardRef = useRef();

  useFrame((state) => {
    if (cardRef.current) {
      cardRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      cardRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={cardRef}>
      {/* Base Smart Card */}
      <RoundedBox args={[3.3, 2.1, 0.05]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color="#0A0E1A" roughness={0.2} metalness={0.8} />
      </RoundedBox>

      {/* Embedded chip */}
      <RoundedBox args={[0.7, 0.6, 0.06]} radius={0.02} smoothness={4} position={[-0.8, 0, 0]}>
        <meshStandardMaterial color="#FFD700" roughness={0.1} metalness={0.9} />
      </RoundedBox>

      {/* Decorative circuitry lines */}
      <mesh position={[-0.8, 0, 0.032]}>
        <planeGeometry args={[1, 0.9]} />
        <meshBasicMaterial color="#00D4FF" wireframe />
      </mesh>
    </group>
  );
};

const SmartCardCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00D4FF" />
      <Suspense fallback={null}>
        <Float speed={1.5} floatIntensity={0.3}>
          <SmartCard />
        </Float>
        <Environment preset="night" />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default SmartCardCanvas;
