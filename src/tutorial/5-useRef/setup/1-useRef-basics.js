import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

//works a lot like use State
const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button className="submit">submit</button>
        </div>
      </form>
      <div ref={divContainer}>hello world</div>
    </>
  );
};

export default UseRefBasics;
