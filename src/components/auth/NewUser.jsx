import React, { useState, useEffect } from "react";
import Logo from "../header/headerComponents/Logo";

import Errors from "./Errors";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

const NewUser = ({ visible, onClose, setLogin }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [signUpButtonDisabled, setSignUpButtonDisabled] = useState(true);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const { signUp,setOptionNull} = useAuth();

 
  useEffect(() => {
    if (
      email === "" ||
      password === "" ||
      conPassword === "" ||
      userName === ""
    )
      return setSignUpButtonDisabled(true);

    setSignUpButtonDisabled(false);
  }, [email, password, conPassword, userName]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(null);
    const response = await signUp(userName, email, password);

    const error =
      response.errors &&
      (response.errors.email || response.errors.password || null);
    if (error) return setErrors(error);

    setOptionNull();
   
  };
  const inputStyle =
    "p-2 my-5 border border-gray-400 rounded-sm hover:border-gray-800 transition-all duration-300 focus:outline-none";
  if (!visible) return null;
  return (
    <div
      id="form"
      className=" fixed inset-0 bg-black bg-opacity-20  "
      onClick={(e) => {
        if (e.target.id === "form") onClose();
      }}
    >
      <div className="w-96 h-auto inset-1  bg-white rounded-md mx-auto shadow-lg mt-20 shadow-gray  px-5 py-3 flex flex-col z-50">
        {/* logo start */}
        <div className="mx-auto my-5">
          <Logo />
        </div>

        {/* error div starts here */}
        {errors && <Errors error={errors} />}

        {/* end */}

        {/* logo end */}

        {/* input fields start */}
        <input
          className={inputStyle}
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          className={inputStyle}
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className={inputStyle}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          className={inputStyle}
          type="password"
          placeholder="Confirm Password"
          value={conPassword}
          onChange={(e) => {
            setConPassword(e.target.value);
          }}
        />

        {/* input fields end */}

        {/* button fields start */}
        <button
          className={`mx-auto ${
            signUpButtonDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : " bg-gray-600  hover:bg-gray-500 transition-all duration-300"
          } text-white w-full py-2 my-5 rounded-sm
     cursor-pointer `}
          onClick={handleSubmit}
          disabled={signUpButtonDisabled}
        >
          SignUp
        </button>

        {/* button fields end */}

        {/* links field start */}
        <div className="flex justify-center my-5">
          <p className="text-gray-500">Have an account? </p>
          <p className="cursor-pointer  hover:text-orange-600 transition-all duration-300 mx-2">
            {" "}
            <button onClick={setLogin}>LogIn</button>
          </p>
        </div>

        {/* links fields end */}
      </div>
    </div>
  );
};

export default NewUser;
