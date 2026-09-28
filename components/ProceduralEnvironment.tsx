"use client";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

export default function ProceduralEnvironment() {
  return (
    <Environment resolution={256}>
      <mesh scale={50}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#d9d9dc" side={THREE.BackSide} />
      </mesh>
      <mesh position={[0, 8, 4]} scale={[14, 1, 6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh position={[-10, 2, 2]} scale={[1, 8, 8]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#f4f0ff" />
      </mesh>
      <mesh position={[10, 0, -2]} scale={[1, 6, 10]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </Environment>
  );
}
