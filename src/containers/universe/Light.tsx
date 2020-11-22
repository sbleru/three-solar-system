import React, { useRef } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import { TextureLoader } from "three";
import sunTexture from "resources/textures/2k_sun.jpg";

export default () => {
  const FakeSphere = () => {
    const mesh = useRef(null);
    const texture = useLoader(TextureLoader, sunTexture);
    useFrame(() => {
      mesh.current.rotation.y += 0.005;
    });
    return (
      <mesh ref={mesh}>
        <sphereBufferGeometry args={[0.7, 30, 30]} />
        <meshStandardMaterial color={0xf0c844} map={texture} />
      </mesh>
    );
  };

  return (
    <group>
      <FakeSphere />
      <ambientLight intensity={0.8} />
      <pointLight intensity={1.12} position={[0, 0, 0]} />
    </group>
  );
};
