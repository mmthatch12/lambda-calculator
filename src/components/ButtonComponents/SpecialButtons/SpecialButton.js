import React from "react";

const SpecialButton = ({ special }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='spButton'>{special}</button>
    </>
  );
};

export default SpecialButton
