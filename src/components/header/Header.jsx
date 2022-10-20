import React from "react";

import AuthLink from "./headerComponents/AuthLink";
import Links from "./headerComponents/Links";
import Logo from "./headerComponents/Logo";


const Header = () => {
  return (
    <div className="flex justify-around text-center p-2 w-screen h-14 pt-3 bg-white ">
      <Logo />
      <Links />
      {<AuthLink />}
    </div>
  );
};

export default Header;
