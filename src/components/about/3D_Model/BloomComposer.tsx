import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useRef } from "react";
import * as THREE from "three";

export default function BloomComposer({ selection }: { selection?: THREE.Object3D }) {
  const ref = useRef<THREE.Mesh>(null!);

  return (
    <EffectComposer>
      <SelectiveBloom
        // eslint-disable-next-line react-hooks/refs
        selection={selection || ref.current}
        intensity={1.5}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        blendFunction={BlendFunction.ADD}
      />
    </EffectComposer>
  );
}