import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import endPoints from "./endPoints";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [option, setOption] = useState(null);
  const [authModelOption, setAuthModelOption] = useState(null);
  const [optionTrigger, setOptionTrigger] = useState(Math.random());

  const isLogedIn = async () => {
    const { data } = await axios.get(endPoints.auth, {
      withCredentials: true,
      credentials: "include",
    });

    if (data === true) {
      setCurrentUser(true);
      return;
    }

    setCurrentUser(false);
    return;
  };

  const logIn = async (email, password) => {
    const payload = {
      email: email,
      password: password,
    };

    const { data } = await axios.post(endPoints.login, payload, {
      withCredentials: true,
      credentials: "include",
    });
    await isLogedIn();

    return data;
  };

  const signUp = async (username, email, password) => {
    const payload = {
      username: username,
      email: email,
      password: password,
    };

    const { data } = await axios.post(endPoints.createUser, payload, {
      withCredentials: true,
      credentials: "include",
    });

    await isLogedIn();
    return data;
  };

  const logOut = async () => {
    await axios.get(endPoints.logOut, {
      withCredentials: true,
      credentials: "include",
    });

    await isLogedIn();
  };

  useEffect(() => {
    async function checkAuthStatus() {
      setLoading(true);
      await isLogedIn();

      setLoading(false);
    }
    checkAuthStatus();
  }, [currentUser]);

  const setOptionLogin = () => {
    setOptionTrigger(Math.random());
    setOption("login");
  };
  const setOptionSignUp = () => {
    setOptionTrigger(Math.random());
    setOption("signup");
  };
  const setOptionNull = () => {
    setOptionTrigger(Math.random());
    setOption(null);
  };
  useEffect(() => {
    setAuthModelOption(option);
  }, [option]);

  const value = {
    currentUser,
    isLogedIn,
    logIn,
    signUp,
    logOut,
    setOptionLogin,
    setOptionSignUp,
    authModelOption,
    optionTrigger,
    setOptionNull
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
