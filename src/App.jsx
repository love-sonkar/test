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

  const setHeight = () => {
    document.getElementById("app").style.minHeight = window.innerHeight + "px";
  };

  let deviceWidth = window.matchMedia("(max-width: 1024px)");

  if (deviceWidth.matches) {
    window.addEventListener("resize", setHeight);
    setHeight();
  }

  return (
    <div
      id="app"
      className="app relative flex justify-between flex-col select-none"
    >
      <Routes>
        <Route path="/test/" element={<HomeScreen item={itemexpense} />} />
        <Route
          path="/test/addexpense"
          element={
            <>
              <Expense item={itemexpense} remove={remove} />
              <AddExpense Add={AddItem} />
            </>
          }
        />
        <Route
          path="/test/report"
          element={<BalanceSheet item={itemexpense} remove={remove} />}
        />
        <Route path="*" element={<Navigate to="/test/" />} />
      </Routes>
      <Navigation />
    </div>
  );
}

export default App;
