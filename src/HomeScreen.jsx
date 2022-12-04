import React, { useEffect, useState } from "react";
import SetMonthlyBudget from "./SetMonthlyBudget";

const HomeScreen = () => {
  let budget;
  if (localStorage.getItem("budget") === null) {
    budget = [];
  } else {
    budget = JSON.parse(localStorage.getItem("budget"));
  }

  const AddBudget = (Input) => {
    console.log("budget is", Input);
    setMonthBudget([Input]);
  };

  const [MonthBudget, setMonthBudget] = useState(budget);

  useEffect(() => {
    return localStorage.setItem("budget", JSON.stringify(MonthBudget));
  }, [MonthBudget]);

  return (
    <div className="Home w-full">
      <h1 className="text-2xl px-2 pt-2 pb-4 ">
        Welcome To My <span className="text-airbnb-pink">App!</span>
      </h1>

      <p className="text-base text-center relative text-white capitalize py-3 px-2 bg-airbnb-pink">
        This app help you to track your monthly expense. you can also Create
        monthly budget here
      </p>

      <div className="addBudge px-2 mb-2">
        <SetMonthlyBudget AddBudget={AddBudget} />
      </div>
      <div className="px-2">
        <div className="budgetBox h-full border px-2 py-3">
          <div className="flex justify-between">
            <h1 className="tabular-nums">Your Monthly Budget is :</h1>
            <span className="tabular-nums"> {MonthBudget}</span>
          </div>
          <div className="flex justify-between">
            <h1 className="tabular-nums">You Spend :</h1>
            <span className="tabular-nums"> 00</span>
          </div>
        </div>
      </div>
      <div className="px-2">
        <button className="w-full py-2 text-white border-none outline-none bg-airbnb-pink mt-2">
          Reset
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
