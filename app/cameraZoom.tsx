import { useFrame, useThree } from "@react-three/fiber";
import { Quaternion, Vector3 } from "three";
import { clamp, smoothstep } from "three/src/math/MathUtils";

const rot = new Quaternion();
rot.setFromAxisAngle(new Vector3(0, 1, 0), Math.PI / 384);

export default function CameraZoom() {
  const { camera, clock } = useThree();
  useFrame(() => {
    camera.zoom = smoothstep(clamp(clock.elapsedTime, 0, 3) / 3, 0, 1) + 1.1;
    camera.updateProjectionMatrix();
  });

  return null;
}
