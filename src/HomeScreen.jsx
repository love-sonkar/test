import React, { useEffect, useState } from "react";
import SetMonthlyBudget from "./SetMonthlyBudget";

const HomeScreen = () => {
  let budget;
  if (localStorage.getItem("budget") === null) {
    budget = ["00"];
  } else {
    budget = JSON.parse(localStorage.getItem("budget"));
  }

  const AddBudget = (Input) => {
    console.log("budget is", Input);
    setMonthBudget([Input]);
  };

  const Reset = (bud) => {
    setMonthBudget(
      MonthBudget.filter((budget) => {
        return budget != bud;
      })
    );
    localStorage.setItem("budget", JSON.stringify(MonthBudget));
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
      <div className="px-2 my-4 text-center flex items-center flex-col relative">
        <span className="rounded-full p-4 bg-airbnb-pink absolute left-10 animate-bounce"></span>
        <span className="rounded-full p-2 bg-airbnb-pink absolute left-6 bottom-4 animate-ping"></span>
        <span className="rounded-full p-1 bg-airbnb-pink absolute right-16"></span>
        <span className="rounded-full p-2 bg-airbnb-pink absolute top-10 right-4 animate-pulse"></span>

        <h1 className="bg-airbnb-pink text-center text-white text-2xl h-min w-min p-5  rounded-full">
          {MonthBudget}
        </h1>
        <p className="m-1 ">This is your Monthly goal </p>
      </div>
      <div className="px-2">
        <button
          className="w-full py-2 text-white border-none outline-none bg-airbnb-pink "
          onClick={() => Reset(MonthBudget)}
        >
          Reset
        </button>
      </div>
      <h1 className="text-2xl text-center ">Thanks For Using My App</h1>
    </div>
  );
};

export default HomeScreen;
