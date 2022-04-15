import React from "react";
import SideBar from "./SideBar";

const Content = ({ children }) => {
  return (
    <div className="contentRoot text-sm text-slate-600">
      <div className="container mx-auto px-4 flex">
        <SideBar />
        <div className="grow">{children}</div>
      </div>
    </div>
  );
};

export default Content;
