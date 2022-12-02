import React, { useEffect, useState } from "react";

const HomeScreen = ({ item }) => {
  let arry = item.map((items) => items.amount);
  const [data, setdata] = useState([]);
  console.log(arry);

  const sum = (expense) => {
    return expense.reduce((acc, number) => {
      return number + acc;
    }, 0);
  };

  useEffect(() => {
    setdata(sum(arry));
    document.title = "Expense Tracker | Home";
  }, [data]);
  console.log(data);
  console.log(sum(arry));

  return (
    <div className="">
      home
      <h1>hi{data}</h1>
    </div>
  );
};

export default HomeScreen;
