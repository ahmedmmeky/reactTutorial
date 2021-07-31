import React, { useState } from "react";
// short-circuit evaluation -> one value from a conditional
// ternary operator -> two values from a conditional

const ShortCircuit = () => {
  const [text, setText] = useState("");

  const [isError, setIsError] = useState(false);
  //const firstValue = text || "hello world";
  //const secondValue = text && "hello world";

  //why we use short circuit
  return (
    <>
      {/*<h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1>*/}
      {/*if(){console.log('hello')}*/}
      <h1>{text || "john doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {/*text && <h1>hello world</h1>*/}
      {isError && <h1>error...</h1>}
      {isError ? (
        <p>there is an error</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
