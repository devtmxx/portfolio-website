import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ContactShadows, Environment, Preload } from "@react-three/drei";
import Player from "@/components/canvas/player";
import Pig from "@/components/canvas/pig";
import CoalOre from "@/components/canvas/coal-ore";
import DiamondPickaxe from "@/components/canvas/diamond-pickaxe";
import GoldenApple from "@/components/canvas/golden-apple";

const Canvas3D = () => {
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <Player />
          <Pig />
          <CoalOre />
          <DiamondPickaxe />
          <GoldenApple />

          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment preset="studio" />

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Canvas3D;
