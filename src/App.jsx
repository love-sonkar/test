import React, { useEffect, useState } from "react";
import AddExpense from "./AddExpense";
import BalanceSheet from "./BalanceSheet";
import Expense from "./Expense";
import HomeScreen from "./HomeScreen";
import Navigation from "./Navigation";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  // localStorage.clear();
  const [searchInput, setSearchInput] = useState("");

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
    setFilteredResults([addnewitem, ...filteredResults]);
  };

  const remove = (items) => {
    setFilteredResults(
      filteredResults.filter((e) => {
        return e != items;
      })
    );
    setitemexpense(
      itemexpense.filter((e) => {
        return e != items;
      })
    );

    localStorage.setItem("expense", JSON.stringify(filteredResults));
  };

  const search = (searchValue) => {
    setSearchInput(searchValue.trim());
    if (searchInput === "") {
      setFilteredResults(itemexpense);
    } else {
      const filteredData = itemexpense.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      console.log(filteredData);
      setFilteredResults(filteredData);
    }
  };

  const [filteredResults, setFilteredResults] = useState(expense);
  const [itemexpense, setitemexpense] = useState(filteredResults);

  useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(filteredResults));
  }, [filteredResults]);

  return (
    <div
      id="app"
      className="app relative flex justify-between flex-col select-none"
    >
      <Routes>
        <Route path="/expenset/" element={<HomeScreen />} />
        <Route
          path="/expenset/addexpense"
          element={
            <>
              <Expense item={filteredResults} remove={remove} />
              <AddExpense Add={AddItem} />
            </>
          }
        />
        <Route
          path="/expenset/report"
          element={
            <BalanceSheet
              item={filteredResults}
              remove={remove}
              search={search}
            />
          }
        />
      </Routes>
      <Navigation />
    </div>
  );
}

export default App;
