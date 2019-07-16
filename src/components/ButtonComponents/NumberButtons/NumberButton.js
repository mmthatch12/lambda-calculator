import React from "react";

const NumberButton = ({ number }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='nubButton'>{number}</button>
    </>
  );
};

export default NumberButton
