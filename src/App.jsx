import React, { useEffect, useState } from "react";
import AddExpense from "./AddExpense";
import BalanceSheet from "./BalanceSheet";
import Expense from "./Expense";
import HomeScreen from "./HomeScreen";
import Navigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  let expense;
  if (localStorage.getItem("expense") === null) {
    expense = [];
  } else {
    expense = JSON.parse(localStorage.getItem("expense"));
  }

  let dateshow = new Date();
  let t = dateshow.toLocaleString("en-US", {
    hour: "numeric",
    hour12: "true",
    minute: "numeric",
  });
  let times = `${t} ${dateshow.toLocaleDateString()}`;
  let timesTrim = times.trim();
  const AddItem = (des, amount) => {
    const addnewitem = {
      time: timesTrim,
      des: des,
      amount: amount,
    };
    setitemexpense([addnewitem, ...itemexpense]);
    console.log(addnewitem);
  };

  const remove = (items) => {
    setitemexpense(
      itemexpense.filter((e) => {
        return e != items;
      })
    );

    localStorage.setItem("expense", JSON.stringify(itemexpense));
  };
  const [itemexpense, setitemexpense] = useState(expense);
  useEffect(() => {
    return localStorage.setItem("expense", JSON.stringify(itemexpense));
  }, [itemexpense]);

  return (
    <div id="app" className="app height-full relative select-none">
      <div className="overflow-scroll scrollbar-hide pb-[86px]">
        <Routes>
          <Route path="/test/" element={<HomeScreen />} />
          <Route
            path="/test/addexpense"
            element={
              <div className="h-full relative pb-[150px]">
                <Expense item={itemexpense} remove={remove} />
                <div className="fixed w-full mb-[80px] bottom-0">
                  <AddExpense Add={AddItem} />
                </div>
              </div>
            }
          />
          <Route
            path="/test/report"
            element={<BalanceSheet item={itemexpense} remove={remove} />}
          />
          <Route path="*" element={<Navigate to="/test/" />} />
        </Routes>
      </div>
      <div className="fixed bottom-0 w-full">
        <Navigation />
      </div>
    </div>
  );
}

export default App;
