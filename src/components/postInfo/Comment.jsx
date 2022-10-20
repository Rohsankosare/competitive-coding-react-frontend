import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="flex w-full h-20">
      <div className="w-8 h-8 my-auto mx-4">
        <img src="userIcon.png" alt="" />
      </div>
      <div className="w-full flex flex-col px-2 mx-auto py-2 my-auto">
        <p className="text-xs text-gray-500">{comment.auther.username}</p>
        <p className="">{comment.commentContaint}</p>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default Comment;
