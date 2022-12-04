import React, { useEffect, useState } from "react";

const HomeScreen = () => {
  let item = JSON.parse(localStorage.getItem("expense"));
  // let data = item.map((i) => i.amount);
  // console.log(data);
  // console.log(TotalExpense.map((i) => i.amount));
  const [TotalExpense, setTotalExpense] = useState("");
  // console.log("total ", TotalExpense);

  useEffect(() => {
    document.title = "Expense Tracker | Home";
    return localStorage.setItem("expense", JSON.stringify(item));
  }, [item]);

  // const summ = (it) => {
  //   const data = it
  //     .map((items) => items.amount)
  //     .reduce((prev, curr) => prev + curr, 0);
  //   return data;
  // };

  const data = item.map((i) => i.amount).reduce((prev, curr) => prev + curr, 0);

  return (
    <div className="">
      home
      <h1>{data}</h1>
    </div>
  );
};

export default HomeScreen;
