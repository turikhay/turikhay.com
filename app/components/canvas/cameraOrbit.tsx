import { extend, useFrame, useThree } from "@react-three/fiber";
import { type ThreeElement } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

declare module "@react-three/fiber" {
  interface ThreeElements {
    orbitControls: ThreeElement<typeof OrbitControls>;
  }
}

export default function CameraOrbit({ position }: { position: Vector3 }) {
  const { camera, gl } = useThree();
  const ref = useRef<OrbitControls>(null);

  useFrame((_state, delta) => {
    if (delta >= 0.01) {
      // don't keep up when focus is gained after it was lost
      delta = 0;
    }s
    ref.current?.update(delta);
  });

  const polarAngle = position.angleTo(new Vector3(0, 1, 0));

  return (
    <orbitControls
      ref={ref}
      attach={"orbitControls"}
      args={[camera, gl.domElement]}
      autoRotate={true}
      enableDamping={true}
      enableZoom={false}
      enablePan={false}
      minPolarAngle={polarAngle}
      maxPolarAngle={polarAngle}
      autoRotateSpeed={-3}
    />
  );
}
