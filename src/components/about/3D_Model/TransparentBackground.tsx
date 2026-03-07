import { useThree } from "@react-three/fiber";
import { useEffect } from "react";


export default function TransparentBackground() {
  const { scene } = useThree();
  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    scene.background = null; 
  }, [scene]);
  return null;
}