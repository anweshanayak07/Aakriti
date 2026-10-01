import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';

interface ModelProps {
  url: string;
}

const Model = ({ url }: ModelProps) => {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
};

interface ModelViewerProps {
  url: string;
}

export const ModelViewer: React.FC<ModelViewerProps> = ({ url }) => {
  return (
    <Canvas
      className="viewer-canvas"
      shadows
      camera={{ position: [0, 0, 4], fov: 45 }}
    >
      <color attach="background" args={['#1f2833']} />
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.5}>
          <Model url={url} />
        </Stage>
      </Suspense>
      <OrbitControls makeDefault autoRotate autoRotateSpeed={1.5} enablePan={true} enableZoom={true} />
    </Canvas>
  );
};
