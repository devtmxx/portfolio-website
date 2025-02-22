"use client";

import { useGLTF } from "@react-three/drei";
import Model from "@/components/canvas/model";
import { useState } from "react";

const Sand = () => {
  const [visible, setVisible] = useState(false);
  const sand = useGLTF("/models/sand/model.glb");

  return (
    <Model
      setVisible={setVisible}
      clickable={true}
      speed={1.6}
      position={[3, -1.5, -2]}
    >
      <primitive object={sand.scene} scale={2} visible={visible} />
    </Model>
  );
};

export default Sand;
