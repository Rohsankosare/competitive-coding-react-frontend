import React, { useState, useEffect } from "react";
import LogIn from "./LogIn";
import NewUser from "./NewUser";

const ShowAuthOption = ({ option, optionTrigger }) => {
  const [isLogInvisible, setIsLogInVisible] = useState(false);
  const [isSignUpvisible, setIsSignUpVisible] = useState(false);
  const [optionIsSetted, setOptionIsSetted] = useState(false);

  useEffect(() => {
    if (option === "login") {
      setIsLogInVisible(true);
      setIsSignUpVisible(false);
      setOptionIsSetted(true);

      return;
    }

    if (option === "signup") {
      setIsLogInVisible(false);
      setIsSignUpVisible(true);
      setOptionIsSetted(true);

      return;
    }
  }, [option, optionTrigger]);

  return (
    <>
      {optionIsSetted && (
        <>
          <LogIn
            setSignup={() => {
              setIsLogInVisible(false);
              setIsSignUpVisible(true);
            }}
            onClose={() => {
              setIsLogInVisible(false);
            }}
            visible={isLogInvisible}
          />
          <NewUser
            setLogin={() => {
              setIsSignUpVisible(false);
              setIsLogInVisible(true);
            }}
            onClose={() => {
              setIsSignUpVisible(false);
            }}
            visible={isSignUpvisible}
          />
        </>
      )}
    </>
  );
};

export default ShowAuthOption;
