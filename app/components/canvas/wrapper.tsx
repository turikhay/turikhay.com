"use client";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas } from "@react-three/fiber";
import CameraOrbit from "./cameraOrbit";
import { Quaternion, Vector3 } from "three";
import CameraZoom from "./cameraZoom";
import { useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function CanvasWrapper() {
  const position = useMemo(() => {
    const v = new Vector3(30, 14, 40);
    v.applyQuaternion(
      new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), -Math.PI / 2)
    );
    return Object.freeze(v);
  }, []);

  // @ts-ignore requires URL, but relative path is also OK
  const gltf = useLoader(GLTFLoader, "/maxwell/scene.gltf");

  return (
    <ErrorBoundary
      fallback={
        <img
          src="/maxwell.gif"
          style={{ width: "100%", height: "100%", objectFit: "scale-down" }}
        />
      }
    >
      <Canvas
        style={{ width: "100%", height: "100%" }}
        camera={{ position }}
        resize={{ scroll: false }}
      >
        <ambientLight color={"white"} intensity={1.4} />
        <primitive object={gltf.scene} position={new Vector3(0, -8, 0)} />
        <CameraOrbit position={position} />
        <CameraZoom />
      </Canvas>
    </ErrorBoundary>
  );
}
