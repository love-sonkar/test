import React, { useState } from "react";

const AddExpense = ({ Add }) => {
  const [des, setdes] = useState("");
  const [amount, setamount] = useState("");

  const submit = () => {
    if (des === "" || amount === "") {
      alert("Please fill all the details :)");
    } else {
      Add(des, amount);
    }
    setamount("");
    setdes("");
  };

  return (
    <>
      <div className="px-2">
        <div className="flex flex-col gap-2 my-2 border">
          <textarea
            className=" px-2 py-3 scrollbar-hide resize-none text-base outline-none border-b"
            rows="1"
            type="text"
            placeholder="Expense Details"
            value={des}
            onChange={(e) => setdes(e.target.value)}
          />
          <input
            className="border-none outline-none text-base px-2 py-1"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
            type="number"
            name=""
            placeholder="Amount"
            id=""
          />
          <button
            onClick={submit}
            className="px-2 py-2 border-none outline-none text-base text-white bg-blue-400 rounded-sm"
          >
            Add Expense
          </button>
        </div>
      </div>
    </>
  );
};

export default AddExpense;
