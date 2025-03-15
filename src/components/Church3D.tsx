import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

export function Church3D() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Box
      ref={meshRef}
      args={[3, 4, 2]}
      position={[0, 0, 0]}
    >
      <meshStandardMaterial color="#f1f5f9" />
    </Box>
  );
}