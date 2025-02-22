"use client";

import { useGLTF } from "@react-three/drei";
import Model from "@/components/canvas/model";
import { useState } from "react";

const DiamondPickaxe = () => {
  const [visible, setVisible] = useState(false);
  const diamondPickaxe = useGLTF("/models/diamond_pickaxe/model.glb");

  return (
    <Model
      setVisible={setVisible}
      clickable={true}
      speed={1.5}
      position={[-2.5, 4, -1.5]}
    >
      <primitive object={diamondPickaxe.scene} scale={2} visible={visible} />
    </Model>
  );
};

export default DiamondPickaxe;
