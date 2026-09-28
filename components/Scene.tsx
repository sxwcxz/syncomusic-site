"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import PhoneModel from "./PhoneModel";
import ProceduralEnvironment from "./ProceduralEnvironment";

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={35} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          <ProceduralEnvironment />
          <PhoneModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
