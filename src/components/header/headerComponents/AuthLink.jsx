import React, { useState, useEffect } from "react";

import { useAuth } from "../../../AuthContext";

import ShowAuthOption from "../../auth/showAuthOption";
import {FaUser} from "react-icons/fa"
import DropDownMenu from "./DropDownMenu";

const AuthLink = () => {
  const { currentUser } = useAuth();
  // const [isLogInvisible, setIsLogInVisible] = useState(false);
  // const [isSignUpvisible, setIsSignUpInVisible] = useState(false);
  const [option, setOption] = useState(null);
  const [navbarVisible,setNavbarVisible] = useState(false);

  const { setOptionLogin, setOptionSignUp, authModelOption, optionTrigger } =
    useAuth();

  // console.log(currentUser);
 

  useEffect(() => {
    setOption(authModelOption);
  }, [authModelOption]);

  return (
    <div className="flex">
      {currentUser ? (
        <button
          className="mx-2 text-l px-3 rounded-md  font-semibold h-7"
          onClick={()=>{setNavbarVisible(true)}}
        >
         <FaUser/>
        </button>
      ) : (
        <>
          <button
            className="mx-2 text-l px-3 rounded-md w-20 font-semibold h-7
            text-gray-500
           hover:bg-gray-300
       transition-all duration-300 
       cursor-pointer"
            onClick={() => {
              setOptionLogin();
            }}
          >
            LogIn
          </button>

          <button
            className="mx-2 text-l px-3 rounded-md w-20 font-semibold h-7
            text-gray-500
            hover:bg-gray-300
       cursor-pointer"
            onClick={() => {
              setOptionSignUp();
            }}
          >
            Signup
          </button>
        </>
      )}

      {option && (
        <ShowAuthOption
          option={option}
          optionTrigger={optionTrigger}
        ></ShowAuthOption>
      )}
      <DropDownMenu visible={navbarVisible} onClose={()=>{setNavbarVisible(false)}}/>
    </div>
  );
};

export default AuthLink;
