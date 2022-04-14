import React, { useContext } from "react";
import Projects from "./../svgs/projects.svg";
import Panels from "./../svgs/panels.svg";
import Security from "./../svgs/security.svg";
import Thunder from "./../svgs/thunder.svg";
import Whatshot from "./../svgs/whatshot.svg";
import Idea from "./../svgs/idea.svg";
import { RootContext } from "../pages";

const Data = [
  {
    id: 1,
    title: "Projects",
    Icon: Projects,
  },
  {
    id: 2,
    title: "Panels",
    Icon: Panels,
  },
  {
    id: 3,
    title: "Security",
    Icon: Security,
  },
  {
    id: 4,
    title: "Ideas",
    Icon: Thunder,
  },
  {
    id: 5,
    title: "Trending",
    Icon: Whatshot,
  },
  {
    id: 6,
    title: "Brainstorm",
    Icon: Idea,
  },
];

const SideBar = () => {
  return (
    <aside className="sidebarContainer w-20">
      <div className="flex flex-col">
        {Data.map((dataItem) => (
          <ItemComponent key={dataItem.id} {...dataItem} />
        ))}
      </div>
    </aside>
  );
};

export const ItemComponent = ({ title, Icon }) => {
  const { state, dispatch } = useContext(RootContext);

  return (
    <div
      className={`itemContainer group hover:bg-slate-100 cursor-pointer text-slate-400 hover:text-slate-800 px-1 py-4 border-l-2 border-transparent transition-all ${
        title == state.selectedTab ? "opacity-100 border-l-teal-300 text-slate-800" : "opacity-50 hover:opacity-100"
      }`}
      onClick={() =>
        dispatch({
          type: "setSelectedTab",
          payload: title,
        })
      }
    >
      <div className="flex flex-col items-center gap-1">
        <Icon />
        <span className="text-xxs font-medium">{title}</span>
      </div>
    </div>
  );
};

export default SideBar;
