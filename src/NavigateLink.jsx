import React from "react";

const NavigateLink = ({ icon, title }) => {
  return (
    <div className="cursor-pointer text-white grid place-items-center	">
      <p>{icon}</p>
      <h1 className="text-xs text-white">{title}</h1>
    </div>
  );
};

export default NavigateLink;
