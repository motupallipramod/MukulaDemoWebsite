import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, OrbitControls } from '@react-three/drei';
import { useThemeStore } from '../../store/themeStore';

const FloatingChip = () => {
  const chipRef = useRef();
  const { isDarkMode } = useThemeStore();

  useFrame((state) => {
    if (chipRef.current) {
      // Slow spin around Y axis — looks great from top-down camera
      chipRef.current.rotation.y = state.clock.elapsedTime * 0.35;
    }
  });

  // Dynamic theme colors
  const wireColor = isDarkMode ? "#00FF88" : "#0d9488";
  const coreColor = isDarkMode ? "#00D4FF" : "#007f7f";
  const pinColor = isDarkMode ? "#ffffff" : "#0d1b2a";

  return (
    <group ref={chipRef}>
      {/* Outer Wireframe Box */}
      <Box args={[2.2, 2.2, 2.2]}>
        <meshBasicMaterial color={wireColor} wireframe opacity={isDarkMode ? 0.35 : 0.45} transparent />
      </Box>

      {/* Core Silicon Chip */}
      <Box args={[1.5, 1.5, 0.4]}>
        <meshStandardMaterial color={coreColor} metalness={0.9} roughness={0.1} />
      </Box>

      {/* Connection pins surrounding the chip */}
      <Box args={[1.7, 1.7, 0.1]}>
        <meshStandardMaterial color={pinColor} metalness={0.8} roughness={0.2} />
      </Box>
    </group>
  );
};

const FloatingChipCanvas = () => {
  const { isDarkMode } = useThemeStore();
  const lightColor1 = isDarkMode ? "#00FF88" : "#0d9488";
  const lightColor2 = isDarkMode ? "#00D4FF" : "#007f7f";

  return (
    <Canvas camera={{ position: [0, 6, 0.001], fov: 50 }}>
      <ambientLight intensity={isDarkMode ? 0.4 : 0.6} />
      <directionalLight position={[2, 2, 2]} intensity={1.8} color={lightColor1} />
      <directionalLight position={[-2, -2, 2]} intensity={1.2} color={lightColor2} />
      <pointLight position={[0, 0, 3]} intensity={0.8} color={isDarkMode ? "#ffffff" : "#007f7f"} />
      <Float speed={2.5} floatIntensity={0.6}>
        <FloatingChip />
      </Float>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default FloatingChipCanvas;

