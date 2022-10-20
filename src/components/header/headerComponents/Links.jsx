import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  const links = [
    {
      id: 1,
      name: "Problems",
      link: "/problems",
    },
    {
      id: 2,
      name: "Projects",
      link: "/projects",
    },
    {
      id: 3,
      name: "Discuss",
      link: "/discuss",
    },
    {
      id:4,
      name:"code Editor",
      link:"/codeeditor"
    }
  ];
  return (
    <div className="flex">
      {links.map((links) => (
        <p
          className="mx-7 hover:text-orange-500 transition-all duration-300  cursor-pointer"
          key={links.id}
        >
          <Link to={links.link}>{links.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default Links;
