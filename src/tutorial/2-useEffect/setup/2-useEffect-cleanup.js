import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      //this cleans up the memory and removes the event listener
      // use clean up to prevent memory leaks
      // can use a dependency of an empty array as an alternative in some cases
      window.removeEventListener("resize", checkSize);
    };
  });
  return (
    <>
      <h2>window</h2>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
