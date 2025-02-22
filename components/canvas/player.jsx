"use client";

import { useGLTF } from "@react-three/drei";
import Model from "@/components/canvas/model";
import { useState } from "react";

const Player = () => {
  const [visible, setVisible] = useState(false);
  const player = useGLTF("/models/tmxx/model.glb");

  return (
    <Model
      setVisible={setVisible}
      clickable={false}
      speed={0.8}
      position={[0, -2.5, 0]}
    >
      <primitive object={player.scene} scale={3.5} visible={visible} />
    </Model>
  );
};

export default Player;
