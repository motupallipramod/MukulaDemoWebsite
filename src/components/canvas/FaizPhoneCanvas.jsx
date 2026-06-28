import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Center, Stage } from '@react-three/drei';

const Model = () => {
  const modelRef = useRef();
  // Load the GLTF phone model from public folder
  const { scene } = useGLTF('/sb-555p_faiz_phone/scene.gltf');

  useFrame((state) => {
    if (modelRef.current) {
      // Slow rotating animation
      modelRef.current.rotation.y = state.clock.elapsedTime * 0.25;
      modelRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
    }
  });

  return (
    <primitive 
      ref={modelRef} 
      object={scene} 
    />
  );
};

const FaizPhoneCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#00D4FF" />
      <directionalLight position={[-5, -10, -5]} intensity={1.0} color="#00FF88" />
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.5} contactShadow={{ opacity: 0.6, blur: 2 }}>
          <Center>
            <Model />
          </Center>
        </Stage>
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate={false} />
    </Canvas>
  );
};

export default FaizPhoneCanvas;
