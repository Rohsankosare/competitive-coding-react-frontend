import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import Comment from "./Comment";

import endPoints from "../../endPoints";
import axios from "axios";
import CreateComment from "./CreateComment";
import ReactMarkdown from "react-markdown";


const PostInfo = () => {
  const location = useLocation();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  const postId = location.state;

  
  

  useEffect(() => {
    const getPost = async () => {
      const { data } = await axios.get(endPoints.getPost, {
        params: { postId: postId },
      });
     
      setPost(data.posts);
      setComments(data.comments.comments);
    
    };
    getPost();
  }, []);

  return (
    <div className=" w-full sm:w-3/4 h-auto bg-white  flex flex-col mx-auto    mt-5 pb-10 ">
      {post && 
        <div>
          {/* post title div */}
          <div className="w-full  h-10  bg-gray-500 text-white text-bold  text-center py-2">
            {post.title}
          </div>
          {/* user info div */}
          <div className="w-full flex justify-start px-2 py-4">
            <div className="w-8 h-8 mx-4 ">
              <img src="userIcon.png" alt="" />
            </div>
            <p className=" text-xs my-auto text-gray-500 cursor-pointer hover:text-gray-700 text-end">
              {post.auther.username}
            </p>
            <p className="text-xs mx-2 my-auto text-gray-500 cursor-pointer hover:text-gray-700 text-end">created At: {post.createdAt} </p>
          </div>

          {/* post containts div */}
          <div className="w-full h-auto px-4 py-5 flex ">
            <article><ReactMarkdown>{post.postContaint}</ReactMarkdown></article>
          </div>
          <CreateComment postId={postId} />

          {/* comments div */}
          <div className="w-100 h-14 px-2 py-2 bg-gray-100 text-xs  flex flex-col sm:flex-row justify-between">
            <div className="flex py-1 my-auto mx-3">
              <IoChatboxEllipsesSharp size={20} />
              <p className="mx-2 ">Comments:{post.comments.length}</p>
            </div>
            <div className="flex justify-between my-auto">
              <p className="mx-2 font-bold">Best</p>
              <p className="mx-2">Newest to Oldest</p>
              <p className="mx-2">Oldest to Newest</p>
              <p className="mx-2">Most voted</p>
            </div>
          </div>

          {/* comments head div end */}
        </div>
      }

      <div className="px-2 py-2">{
        comments && comments.map((comment)=>(
         
          <Comment comment = {comment} key={comment._id}/>
        ))

        }</div>
    </div>
  );
};

export default PostInfo;
