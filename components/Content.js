import React from "react";
import SideBar from "./SideBar";

const Content = () => {
  return (
    <div className="contentRoot text-sm text-slate-600">
      <div className="container mx-auto p-4">
        <SideBar />
      </div>
    </div>
  );
};

export default Content;
