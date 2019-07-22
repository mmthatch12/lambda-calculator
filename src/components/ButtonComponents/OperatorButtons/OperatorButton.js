import React from "react";

const OperatorButton = ({ char, value }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='opButton'>{char}</button> 
    </>
  );
};

export default OperatorButton;
