import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Center, Stage } from '@react-three/drei';

const Model = () => {
  const modelRef = useRef();
  // Load the GLTF chipset model from public folder
  const { scene } = useGLTF('/chipset_007/scene.gltf');

  // Offset: rotate Math.PI so the circuit side faces forward,
  // then continue the slow continuous spin from there.
  const rotationOffset = Math.PI;

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = rotationOffset + state.clock.elapsedTime * 0.25;
      modelRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.15;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
    />
  );
};

const SiliconWaferCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00D4FF" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#00FF88" />
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6} contactShadow={{ opacity: 0.7, blur: 2 }}>
          <Center>
            <Model />
          </Center>
        </Stage>
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate={false} />
    </Canvas>
  );
};

export default SiliconWaferCanvas;
