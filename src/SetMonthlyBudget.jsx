import React, { useState } from "react";

const SetMonthlyBudget = ({ AddBudget }) => {
  const [Input, setInput] = useState("");
  const sub = () => {
    if (Input === "") {
      alert("cannot set your budget");
    } else {
      AddBudget(Input);
    }
    setInput("");
  };

  return (
    <div className="">
      <h1 className="text-center text-xl capitalize py-3">
        Set your Monthly budget
      </h1>
      <div className="box flex">
        <input
          className="border text-base py-1 px-2 outline-none w-full "
          type="number"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          className="border text-white cursor-pointer py-1 px-4 bg-airbnb-pink"
          type="button"
          value="Set"
          onClick={sub}
        />
      </div>
    </div>
  );
};

export default SetMonthlyBudget;
