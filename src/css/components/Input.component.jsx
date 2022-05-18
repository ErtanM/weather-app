import React from "react";

const Input = () => {
  const getInputValue = (e) => {
    const userValue = e.target.value;
    console.log(userValue);
  };
  return (
    <div>
      <input
        type="text"
        name="city-search"
        id="city-search"
        onChange={getInputValue}
      />
    </div>
  );
};

export default Input;
