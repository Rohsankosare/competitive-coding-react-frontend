import React, { useState, useEffect } from "react";
import axios from "axios";
import endPoints from "../../endPoints";
import MarkDownEditor from "../util/MarkDownEditor";

const CreatePost = ({ open, onClose }) => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [postBody, setPostBody] = useState("");
  const [postButtonDisabled, setpostButtonDiabled] = useState(true);

  //// handle post sumbit  function
  const handlePost = async (e) => {
    e.preventDefault();
    
    setpostButtonDiabled(true);
    const payload = {
      postTitle: title,
      tags: tags,
      postContaint: postBody,
    };
    const { data } = await axios.post(endPoints.createPost, payload, {
      withCredentials: true,
    });

    if (data.success === true) onClose();

    setpostButtonDiabled(false);
  };

  //function to add markdown to textarea
 

  useEffect(() => {
    if (title === "" || tags === "" || postBody === "")
      return setpostButtonDiabled(true);

    setpostButtonDiabled(false);
  }, [title, tags, postBody]);

  //set markdown text using markdown renderer
  

  return (
    <div
      className={`w-full h-96 shadow-custom fixed  left-0 bg-white px-4 py-4 flex flex-col ${
        open ? "bottom-0 " : "-bottom-96"
      }  transition-all duration-500 `}
    >
      <div className="flex justify-between">
        <textarea
          className="w-2/4 h-10 border rounded-sm border-gray-300 px-1 py-1  my-2 focus:outline-none resize-none"
          placeholder="enter title for Post..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></textarea>
        <div className="flex">
          <button
            className="bg-gray-600 text-white p-1 w-14 h-8 mx-2 "
            onClick={() => {
              onClose();
            }}
          >
            Close
          </button>
          <button
            className={`${
              !postButtonDisabled
                ? " cursor-pointer bg-gray-600"
                : "bg-gray-300 cursor-not-allowed"
            } text-white p-1 w-14 h-8 mx-2`}
            onClick={(e) => handlePost(e)}
            disabled={postButtonDisabled}
          >
            Post
          </button>
        </div>
      </div>
      <textarea
        className="w-full h-10 border border-gray-300 px-1 py-1 my-2  focus:outline-none rounded-sm resize-none "
        placeholder="tags for post..."
        value={tags}
        onChange={(e) => {
          setTags(e.target.value);
        }}
      ></textarea>
      
       <MarkDownEditor value={postBody} updateEditorContent = {(value)=>setPostBody(value)}/>
    
    </div>
  );
};

export default CreatePost;
