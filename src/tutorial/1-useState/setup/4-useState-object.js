import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  //alternative if you don't want to work with an obj is to use multiple useStates
  /*const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("random message");*/
  const changeMessage = () => {
    //must use spread operator for objects to make sure that we keep the old data of the object
    setPerson({ ...person, message: "hello world" });
    //setMessage("hello world");
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
