import React from "react";
import moment from "moment/moment";

const Post = ({ post }) => {
  
  return (
    <div className="w-full h-auto px-2 py-2 mx-1 flex">
      {/* avatar */}
      <div className="w-10 h-10 my-auto">
        <img src="userIcon.png" alt="" />
      </div>
      <div className="flex flex-col w-full px-4 py-2">
        <div className="flex justify-between  py-1">
          <p className="text-md ">{post.title}</p>
          <p className="bg-gray-100 rounded-sm text-xs px-2 py-1">
            {post.tags}
          </p>
        </div>

        <div className=" flex flex-start ">
          <p className="text-xs  text-gray-500 hover:text-blue-600 ">
            {post.auther.username}
          </p>
          <p className="text-xs  text-gray-500 mx-2">
            Created At :{" "}
            {moment(post.createdAt).format("dddd MMM YYYY HH:mm:ss")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
