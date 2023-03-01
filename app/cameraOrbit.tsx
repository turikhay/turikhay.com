import { extend, Object3DNode, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

declare module "@react-three/fiber" {
  interface ThreeElements {
    orbitControls: Object3DNode<OrbitControls, typeof OrbitControls>;
  }
}

export default function CameraOrbit() {
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

  return (
    <orbitControls
      ref={ref}
      attach={"orbitControls"}
      args={[camera, gl.domElement]}
      autoRotate={true}
      enableDamping={true}
      minDistance={20}
      maxDistance={80}
      autoRotateSpeed={-3}
    />
  );
}
