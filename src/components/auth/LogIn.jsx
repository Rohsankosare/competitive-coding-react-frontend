import React, { useState, useEffect } from "react";
import Logo from "../header/headerComponents/Logo";
import { Link } from "react-router-dom";
import Errors from "./Errors";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

const LogIn = ({ visible, onClose, setSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logInButtonDisabled, setLogInButtonDisabled] = useState(true);
  const [errors, setErrors] = useState(null);
  const { logIn ,setOptionNull} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (email === "" || password === "") return setLogInButtonDisabled(true);

    setLogInButtonDisabled(false);
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(null);

    const response = await logIn(email, password);

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
      <div className="  w-96 h-auto   bg-white rounded-md mx-auto shadow-lg mt-20 shadow-gray  px-5 py-3 flex flex-col  ">
        {/* logo div */}
        <div className="mx-auto my-5">
          <Logo />
        </div>

        {/* error div starts here */}
        {errors && <Errors error={errors} />}

        {/* end */}

        {/* input fields start */}
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
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        {/* input fields ends */}

        {/* button field start */}

        <button
          className={`mx-auto ${
            logInButtonDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : " bg-gray-600  hover:bg-gray-500 transition-all duration-300"
          } text-white w-full py-2 my-5 rounded-sm
       cursor-pointer `}
          onClick={handleSubmit}
          disabled={logInButtonDisabled}
        >
          Log In
        </button>

        {/* button field end */}

        {/* link field start */}
        <div className="flex justify-between my-5">
          <p className="cursor-pointer hover:text-orange-600 transition-all duration-300 ">
            Forget Password ?
          </p>
          <p className="cursor-pointer  hover:text-orange-600 transition-all duration-300">
            <button onClick={setSignup}> Sign Up</button>
          </p>
        </div>
        {/* link fileds end */}
      </div>
    </div>
  );
};

export default LogIn;
