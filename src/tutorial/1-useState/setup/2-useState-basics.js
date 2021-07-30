import React, { useState } from "react";
//Hooks:
// will always start with use
//compomnent name must be uppercase where we use these hooks
// hook must be in the function/component's body
//cannot call hooks conditionally you can call the function of the hook conditionally though

//useState is a function that returns an array which includes the state value and the function to control the state value

const UseStateBasics = () => {
  /*console.log(useState("hello world"));
  const value = useState(1)[0];
  const handler = useState(1)[1];
  console.log(value, handler);*/
  //convention is to put the name of the value and then the function to set the value
  const [text, setText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
