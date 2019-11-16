import React, { useState, useEffect } from "react";

export default function Hooks() {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function handleWindowResize() {
    setSize({ width: window.innerWidth, height: window.innerHeight });
  }

  return (
    <div>
      <p>Window size {`${size.width}x${size.height}`}</p>
    </div>
  );
}
