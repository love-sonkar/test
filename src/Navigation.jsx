import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PostAddIcon from "@mui/icons-material/PostAdd";
import TopicIcon from "@mui/icons-material/Topic";

const Navigation = () => {
  const navigate = [
    {
      id: 1,
      title: "Report",
      component: <TopicIcon style={{ fontSize: "2rem" }} />,
      path: "/expenset/report",
    },
    {
      id: 2,
      title: "Add Expense",
      component: <PostAddIcon style={{ fontSize: "2rem" }} />,
      path: "/expenset/addexpense",
    },
    {
      id: 3,
      title: "Home",
      component: <HomeIcon style={{ fontSize: "2rem" }} />,
      path: "/expenset/",
    },
  ];

  return (
    <div className="bg-airbnb-pink w-full flex items-center justify-between px-4 py-1 ">
      {navigate.map((item) => {
        return (
          <Link
            key={item.id}
            className="cursor-pointer text-white grid place-items-center"
            to={item.path}
          >
            <h1>{item.component}</h1>
            <p className="text-base">{item.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
