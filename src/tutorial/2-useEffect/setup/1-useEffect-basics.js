import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  //use effect gets called each time the component gets rendered
  const [value, setValue] = useState(0);
  //HOOKS CANNOT BE A PART OF CONDITIONALS!!!
  // Must make conditionals inside of a hook
  // empty array of second argument will tell it to only run the useEffect on the initial render
  //second argument is the dependencies of the useEffect
  // adding value in the array will run it every time value changes
  useEffect(() => {
    //this is called the side effect
    console.log("called use effect");
    if (value > 3) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("hello world");
  }, []);
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
