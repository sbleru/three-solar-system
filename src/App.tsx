import React, { Suspense } from "react";
import "./styles.css";
import { Canvas } from "react-three-fiber";
import Lights from "./containers/universe/Light";
import Environment from "./containers/universe/Environment";
import Spheres from "./containers/universe/Spheres";
import "react-three-fiber"; // これがないと下の階層のコンポーネントでtypeエラーがでる
import { ControlsOrbit } from "./containers/camera/Control";

/*!
 * based on https://codesandbox.io/s/alligatordemoreact-three-fiber-0zlu6
 */

export default function App() {
  return (
    <Canvas>
      {/* Suspenseを入れないとエラー */}
      <Suspense fallback={null}>
        <Spheres />
        <Lights />
        <Environment />
        <ControlsOrbit />
      </Suspense>
    </Canvas>
  );
}
