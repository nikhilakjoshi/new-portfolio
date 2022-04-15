import React, { useContext } from "react";
import Projects from "./../svgs/projects.svg";
import Panels from "./../svgs/panels.svg";
import Security from "./../svgs/security.svg";
import Thunder from "./../svgs/thunder.svg";
import Whatshot from "./../svgs/whatshot.svg";
import Idea from "./../svgs/idea.svg";
import Star from "./../svgs/introstar.svg";
import { RootContext } from "../layouts/Main";
import Link from "next/link";
import { useRouter } from "next/router";

const Data = [
  {
    id: 0,
    title: "Introduction",
    Icon: Star,
    href: "/introduction",
  },
  {
    id: 1,
    title: "Projects",
    Icon: Projects,
    href: "/projects",
  },
  {
    id: 2,
    title: "Panels",
    Icon: Panels,
    href: "/panels",
  },
  {
    id: 3,
    title: "Security",
    Icon: Security,
    href: "/security",
  },
  {
    id: 4,
    title: "Ideas",
    Icon: Thunder,
    href: "/ideas",
  },
  {
    id: 6,
    title: "Brainstorm",
    Icon: Idea,
    href: "/brainstorm",
  },
  {
    id: 5,
    title: "About us",
    Icon: Whatshot,
    href: "/about",
  },
];

const SideBar = () => {
  return (
    <aside className="sidebarContainer basis-20">
      <div className="flex flex-col">
        {Data.map((dataItem) => (
          <ItemComponent key={dataItem.id} {...dataItem} />
        ))}
      </div>
    </aside>
  );
};

export const ItemComponent = ({ title, Icon, href }) => {
  const { dispatch } = useContext(RootContext);

  const { asPath } = useRouter();

  return (
    <Link
      href={href ? href : "/"}
      onClick={() =>
        dispatch({
          type: "setSelectedTab",
          payload: title,
        })
      }
    >
      <div
        className={`itemContainer group hover:bg-slate-100 cursor-pointer text-slate-800 hover:text-slate-800 px-1 py-4 border-l-2 border-transparent transition-all ${
          asPath == href ? "opacity-100 border-l-teal-300 bg-slate-100" : "opacity-60 hover:opacity-100"
        }`}
      >
        <div className="flex flex-col items-center gap-1">
          <Icon />
          <span className="text-xxs font-medium">{title}</span>
        </div>
      </div>
    </Link>
  );
};

export default SideBar;
