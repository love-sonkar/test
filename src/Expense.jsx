import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expense = ({ item, remove, Reports }) => {
  return (
    <div className="overflow-scroll scrollbar-hide px-2 pt-2">
      {item.length === 0 ? (
        <h1 className="px-2 py2 text-base">Please Add Expense...</h1>
      ) : (
        item.map((items, index) => {
          return (
            <ExpenseItem
              key={index}
              items={items}
              remove={remove}
              reports={Reports}
            />
          );
        })
      )}
    </div>
  );
};

export default Expense;
