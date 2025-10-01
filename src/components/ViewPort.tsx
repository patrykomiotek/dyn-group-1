import { useViewPort } from "../hooks/useViewPort";

export function ViewPort() {
  const size = useViewPort();

  return (
    <div>
      X: {size.x} Y: {size.y}
    </div>
  );
}
