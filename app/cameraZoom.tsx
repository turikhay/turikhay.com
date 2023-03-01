import { useFrame, useThree } from "@react-three/fiber";
import { Quaternion, Vector3 } from "three";
import { clamp, smoothstep } from "three/src/math/MathUtils";

const initial = new Vector3(30, 14, 40);
initial.applyQuaternion(
  new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), -Math.PI / 2)
);

export function initialVector() {
  return initial.clone();
}

const rot = new Quaternion();
rot.setFromAxisAngle(new Vector3(0, 1, 0), Math.PI / 384);

export default function CameraZoom() {
  const { camera, clock } = useThree();
  useFrame(() => {
    camera.zoom = smoothstep(clamp(clock.elapsedTime, 0, 3) / 3, 0, 1) + 1.3;
    camera.updateProjectionMatrix();
  });

  return null;
}
