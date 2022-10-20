import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../AuthContext";

const DropDownMenu = ({ visible, onClose }) => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    navigate("/");
    logOut();
  };
  if (!visible) return null;
  return (
    <div
      id="dropdown"
      className="fixed inset-0"
      onClick={(e) => {
        if (e.target.id === "dropdown") onClose();
      }}
    >
      <div className="fixed w-52 h-auto shadow-md flex flex-col top-16 right-14 bg-white px-2 py-2">
        <Link
          to="/myprofile"
          id="profile"
          className="w-100 hover:bg-gray-200 my-2 py-1 text-left px-1"
          onClick={(e) => {
            if (e.target.id === "profile") onClose();
          }}
        >
          Profile
        </Link>
        <button
          className="w-100 hover:bg-gray-200 my-2 py-1 text-left px-1"
          onClick={() => {
            handleLogOut();
          }}
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default DropDownMenu;
