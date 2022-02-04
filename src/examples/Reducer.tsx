import React, { useState } from "react";

const ReducerComponent = () => {
  const [nameInput, setName] = useState("");
  const [ageInput, setAge] = useState("");
  const setter =
    (set: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { target } = e;
      const { value } = target;
      set(value);
    };
  return (
    <div className="row">
      <div>
        <input value={nameInput} onChange={setter(setName)} required />
      </div>
      <input value={ageInput} onChange={setter(setAge)} required />
      <div>
        {nameInput}: {ageInput} years
      </div>
    </div>
  );
};

export default ReducerComponent;
