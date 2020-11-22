import React from "react";
import { useLoader } from "react-three-fiber";
import { BackSide, TextureLoader } from "three";
import starTexture from "resources/textures/2k_stars_milky_way.jpg";

export default () => {
  const texture = useLoader(TextureLoader, starTexture);
  return (
    <mesh>
      <sphereBufferGeometry args={[100, 10, 10]} />
      <meshStandardMaterial
        // color={0x193d5d}
        // metalness={0.9}
        side={BackSide} // BackSideにすることで球形の内部を見せられる
        map={texture}
      />
    </mesh>
  );
};
