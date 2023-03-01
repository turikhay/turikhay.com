import { extend, Object3DNode, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

declare module "@react-three/fiber" {
  interface ThreeElements {
    orbitControls: Object3DNode<OrbitControls, typeof OrbitControls>;
  }
}

export default function Controls() {
  const { camera, gl } = useThree();
  return (
    <orbitControls attach={"orbitControls"} args={[camera, gl.domElement]} />
  );
}
