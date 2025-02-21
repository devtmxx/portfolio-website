"use client";

import { useGLTF } from "@react-three/drei";
import Model from "@/components/canvas/model";
import { useState } from "react";

const Pig = () => {
  const [visible, setVisible] = useState(false);
  const pig = useGLTF("/models/pig/model.gltf");

  return (
    <Model
      setVisible={setVisible}
      clickable={true}
      speed={1.6}
      position={[2.5, -1.5, -2]}
    >
      <primitive object={pig.scene} scale={2} visible={visible} />
    </Model>
  );
};

export default Pig;
