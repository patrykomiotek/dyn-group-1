import { useState, useEffect } from "react";

function getSize() {
  return {
    x: window.innerWidth,
    y: window.innerHeight,
  };
}

export function useViewPort() {
  const [size, setSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => {
      setSize(getSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}
