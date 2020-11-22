import React, { useRef } from "react";
import { useFrame, extend, useThree, ReactThreeFiber } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Node<OrbitControls, typeof OrbitControls>;
    }
  }
}

/**
 * @see https://threejs.org/docs/#examples/en/controls/OrbitControls
 */
export const ControlsOrbit = () => {
  const { camera, gl } = useThree();

  const cRef = useRef(null);

  useFrame(() => {
    cRef.current.update();
  });

  return (
    <orbitControls
      args={[camera, gl.domElement]}
      ref={cRef}
      minDistance={1}
      maxDistance={100}
    />
  );
};
