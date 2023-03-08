import { extend, Object3DNode, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

declare module "@react-three/fiber" {
  interface ThreeElements {
    orbitControls: Object3DNode<OrbitControls, typeof OrbitControls>;
  }
}

export default function CameraOrbit({ position }: { position: Vector3 }) {
  const { camera, gl } = useThree();
  const ref = useRef<OrbitControls>(null);

  useEffect(() => {
    const o = ref.current;
    if (!o) {
      return;
    }
    const l = (e: Event) => {
      o.reset();
      e.preventDefault();
    };
    gl.domElement.addEventListener("dblclick", l);
    return () => gl.domElement.removeEventListener("dblclick", l);
  }, [ref, gl.domElement]);

  useFrame(() => {
    ref.current?.update();
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
