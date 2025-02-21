"use client";

import { useGLTF } from "@react-three/drei";
import Model from "@/components/canvas/model";
import { useState } from "react";

const Player = () => {
  const [visible, setVisible] = useState(false);
  const player = useGLTF("/models/player/scene.gltf");

  return (
    <Model setVisible={setVisible} clickable={false} speed={0.8}>
      <primitive
        object={player.scene}
        scale={0.75}
        position-y={-2}
        rotation-y={-Math.PI / 2}
        visible={visible}
      />
    </Model>
  );
};

export default Player;
