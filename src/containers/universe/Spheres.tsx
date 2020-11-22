import React, { useEffect, useRef } from "react";
import { map } from "lodash";
import { useFrame } from "react-three-fiber";
import Sphere from "./Sphere";

export default () => {
  const group = useRef(null);

  useEffect(() => {
    group.current.rotation.x += Math.PI / 4;
  }, []);

  useFrame(() => {
    group.current.rotation.y += 0.05;
    // group.current.rotation.x += 0.05
    // group.current.rotation.z += 0.05
  });

  const nodesCubes = map(new Array(1), (el, i) => {
    return <Sphere key={i} />;
  });

  return <group ref={group}>{nodesCubes}</group>;
};
