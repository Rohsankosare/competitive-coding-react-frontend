import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
const MyProfilePage = ({ userid }) => {
  return (
    <div className="w-full sm:w-2/3 mx-auto flelx h-96  bg-white my-10 sm:px-10 py-6">
      <div className="flex w-full   flex-col sm:flex-row sm:px-12 sm:py-8 p-2">
        {/* profiel avatar div */}
        <div className="">
          <img src="defaultAvatar.webp" alt="" className="w-40 h-40" />
        </div>
        {/* profile info div */}
        <div className="flex flex-col sm:mx-10 justify-between ">
          <p className="text-black text-2xl font-bold ">Roshan kosare</p>
          <p className="text-gray-400 my-2">roshankosare</p>
          <p className="text-gray-400 my-2">roshankosare@gmail.com</p>
          <p className="text-gray-400 my-2">22 yrs</p>
          <p className="text-gray-400 my-2">About</p>
         
        
        </div>
        <div className="flex  sm:mx-10 justify-between ">
          <BsGithub className="mx-2 w-5 h-5" color="black" />
          <BsLinkedin className="mx-2 w-5 h-5" color="#0072b1" />
          <BsTwitter className="mx-2 w-5 h-5" color="1DA1F2" />
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
