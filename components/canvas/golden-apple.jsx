"use client";

import { useGLTF } from "@react-three/drei";
import Model from "@/components/canvas/model";
import { useState } from "react";

const GoldenApple = () => {
  const [visible, setVisible] = useState(false);
  const goldenApple = useGLTF("/models/golden_apple/model.gltf");

  return (
    <Model
      setVisible={setVisible}
      clickable={true}
      speed={1.9}
      position={[3, 3.5, 1]}
    >
      <primitive object={goldenApple.scene} scale={2} visible={visible} />
    </Model>
  );
};

export default GoldenApple;
