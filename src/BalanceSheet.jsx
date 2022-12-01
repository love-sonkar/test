import React, { useState } from "react";
import Expense from "./Expense";
import SearchIcon from "@mui/icons-material/Search";

const BalanceSheet = ({ item, remove }) => {
  const [query, setquery] = useState("");
  const search = (item) => {
    return item.filter((data) =>
      data.des.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="h-[87%]">
      <div className="px-2 py-4 flex align-items-center">
        <input
          type="search"
          className="border outline-none py-1 px-2 text-base w-full"
          name="search"
          placeholder="Search Expense..."
          id=""
          onChange={(e) => setquery(e.target.value)}
        />
        <button className="border py-2 outline-none px-3 bg-airbnb-pink">
          <SearchIcon style={{ color: "white" }} />
        </button>
      </div>
      <Expense item={search(item)} remove={remove} />
    </div>
  );
};

export default BalanceSheet;
