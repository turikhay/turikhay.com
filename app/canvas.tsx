"use client";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas } from "@react-three/fiber";
import CameraOrbit from "./cameraOrbit";
import { Quaternion, Vector3 } from "three";
import CameraZoom from "./cameraZoom";

export const cameraPos = (() => {
  const v = new Vector3(30, 14, 40);
  v.applyQuaternion(
    new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), -Math.PI / 2)
  );
  return Object.freeze(v);
})();

export default function CanvasWrapper() {
  // @ts-ignore requires URL, but relative path is also OK
  const gltf = useLoader(GLTFLoader, "/maxwell/scene.gltf");

  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: cameraPos }}
      resize={{ scroll: false }}
    >
      <ambientLight color={"white"} intensity={1.4} />
      <primitive object={gltf.scene} position={new Vector3(0, -8, 0)} />
      <CameraOrbit />
      <CameraZoom />
    </Canvas>
  );
}
