import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { FloatingOrb } from './FloatingOrb';

export function Background3D() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-70">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#f5f3ff" />
        <pointLight position={[-6, 4, 2]} intensity={1.5} color="#c4b5fd" />
        <pointLight position={[6, -4, 2]} intensity={1.5} color="#e9d5ff" />

        <Suspense fallback={null}>
          <FloatingOrb position={[-4, 2.5, -2]} scale={2.8} color="#ddd6fe" speed={1.2} />
          <FloatingOrb position={[4.5, -2.5, -1.5]} scale={3.2} color="#e9d5ff" speed={0.9} />
          <FloatingOrb position={[0, -3.5, -3]} scale={1.8} color="#c4b5fd" speed={1.6} />
        </Suspense>
      </Canvas>
    </div>
  );
}

