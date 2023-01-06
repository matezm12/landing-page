import { Vector2 } from "three";
import { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";

function useLerpedMouse() {
  const mouse = useThree((state) => state.mouse);
  const lerped = useRef(mouse.clone());
  const previous = new Vector2();
  useFrame((state) => {
    previous.copy(lerped.current);
    console.log(mouse);
    lerped.current.lerp(mouse, 0.005);
  });
  return lerped;
}

const initPosition = [1.771423577047188, 1.2, -3.4364543723730123];

const CameraRig = () => {
  const { camera } = useThree();
  const mouse = useLerpedMouse();
  useFrame(() => {
    camera.position.fromArray(initPosition);
    camera.position.x += (mouse.current.x * Math.PI) / 20;
    camera.position.y += (mouse.current.y * Math.PI) / 20;
    camera.lookAt(0, 1.3, 0);
  });
};

export default CameraRig;
