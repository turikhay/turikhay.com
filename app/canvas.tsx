"use client";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { Canvas } from "@react-three/fiber";
import CameraOrbit from "./cameraOrbit";
import { Vector3 } from "three";
import CameraZoom, { initialVector } from "./cameraZoom";

export default function CanvasWrapper() {
  // @ts-ignore requires URL, but relative path is also OK
  const gltf = useLoader(GLTFLoader, "/maxwell/scene.gltf");

  return (
    <Canvas camera={{ position: initialVector() }}>
      <ambientLight color={"white"} intensity={2.4} />
      <primitive object={gltf.scene} position={new Vector3(0, -8, 0)} />
      <CameraOrbit />
      <CameraZoom />
    </Canvas>
  );
}
