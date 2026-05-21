"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";

function DroneModel() {
  const { scene } = useGLTF("/assets/animated_drone.glb");
  return <primitive object={scene} />;
}

export default function DroneViewer() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5} shadows="contact" adjustCamera={true}>
            <DroneModel />
          </Stage>
        </Suspense>
        <OrbitControls 
          enableZoom={true} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/assets/animated_drone.glb");
