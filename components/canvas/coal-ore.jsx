"use client";

import { useGLTF } from "@react-three/drei";
import Model from "@/components/canvas/model";
import { useState } from "react";

const CoalOre = () => {
  const [visible, setVisible] = useState(false);
  const coalOre = useGLTF("/models/coal_ore/model.gltf");

  return (
    <Model
      setVisible={setVisible}
      clickable={true}
      speed={1.3}
      position={[-3, -0.5, 2]}
    >
      <primitive object={coalOre.scene} scale={2} visible={visible} />
    </Model>
  );
};

export default CoalOre;
