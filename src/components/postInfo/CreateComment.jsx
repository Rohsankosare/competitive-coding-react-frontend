import axios from "axios";
import React, { useState, useEffect } from "react";
import endPoints from "../../endPoints";

const CreateComment = ({ postId }) => {
  const [comment, setComments] = useState("");
  const [postButtonDiabled, setPostButtonDiabled] = useState(true);

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        postId: postId,
        commentBody: comment,
      };

      const { data } = await axios.post(endPoints.postComment, payload, {
        withCredentials: true,
      });
      console.log(data);

      if (data.success === true) {
        setComments("");
        console.log(data);
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (comment === "") return setPostButtonDiabled(true);

    setPostButtonDiabled(false);
  }, [comment]);

  return (
    <div className="flex px-2 py-2">
      <textarea
        className="w-full h-8 border border-gray-300 p-2 my-2 text-sm  focus:outline-none rounded-sm"
        onChange={(e) => {
          setComments(e.target.value);
        }}
        value={comment}
      >
        
      </textarea>
      <button
        className={`${
          postButtonDiabled ? "bg-gray-300" : "bg-gray-600"
        } text-white p-1 w-14 h-8 mx-2 my-auto`}
        disabled={postButtonDiabled}
        onClick={handlePostSubmit}
      >
        Post
      </button>
    </div>
  );
};

export default CreateComment;
