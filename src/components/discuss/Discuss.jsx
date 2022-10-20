import React, { useState, useEffect } from "react";
import CreatePost from "../createpost/CreatePost";
import axios from "axios";
import Post from "../../post/Post";
import { Link } from "react-router-dom";
import endPoints from "../../endPoints";
import { useAuth } from "../../AuthContext";
// import ShowAuthOption from "../auth/ShowAuthOption";

const Discuss = () => {
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const {currentUser,setOptionLogin} = useAuth();
  const tags = [
    {tag:"DSA",id:0},
    {tag:"Interview",id:1},
    {tag:"carrier",id:2},
    {tag:"Programing Languages",id:3},
    {tag:"Placements",id:4},
    {tag:"System Design",id:5}
  ];

  // use Effect for fetching post from server
  useEffect(() => {
    const getPost = async () => {
      const { data } = await axios(endPoints.getPosts);
      setPosts(data.posts);
    };

    getPost();
  }, []);

  return (
    <div>
      {/* tags starts here */}

      <div className="flex flex-wrap  w-full h-auto px-2 py-1 md:w-3/4  md:mx-auto my-2 sm:justify-between  ">
        {tags.map((tags) => (
          <div
            className=" w-auto  h-auto px-2 py-1 my-2  mx-1 flex md:w-36 md:h-20 rounded-sm bg-white text-center text-gray-500 shadow-md shadow-gray
          hover:bg-gray-500 hover:text-white transition-all duration-300 pt-2   justify-center
          "
            key={tags.id}
          >
            <h1 className="  text-xs font-bold md:text-xl md:font-extrabold ">{tags.tag}</h1>
          </div>
        ))}
      </div>

      {/* tags end here */}

      {/* posts and tags column div starts here */}

      <div className="  w-full px-2 flex mx-auto justify-between sm:px-4  ">
        {/* posts div starts here */}
        <div className="flex flex-col w-full sm:w-3/4 mx-auto mt-2  bg-white shadow-lg shadow-gray p-1 h-screen">
          <div className="w-full h-auto flex flex-col bg-gray-500 text-white p-2 justify-between  sm:flex-row ">
            <div className="flex justify-between py-2 ">
              <p className="mx-2 text-xs">
                <b>Hot</b>
              </p>
              <p className="mx-2 text-xs">Newest to oldest</p>
              <p className="mx-2 text-xs">Most voted</p>
            </div>

            <div className="flex justify-between py-2 ">
              <input
                className="p-1 mx-1 border w-48 border-gray-300 rounded-sm focus:outline-none text-xs "
                type="text"
              />
              <button className=" bg-white w-20 text-gray-800 p-0 mx-2 text-xs rounded-sm">
                {" "}
                Search
              </button>
              <button
                className=" bg-white w-20 text-gray-800 p-0 mx-2 text-xs rounded-sm"
                onClick={() => {
                 currentUser?setOpen(true):setOptionLogin();
                }}
              >
                New
              </button>
            </div>
          </div>

          {posts.map((post) => (
            <Link to={"/postinfo"} state={post._id}  key={post._id}>
              <div className="w-full border-b border-gray-200">
                <Post post={post} />
              </div>
            </Link>
          ))}
          <CreatePost
            open={open}
            onClose={() => {
              setOpen(false);
            }}
          />
        </div>

       
      </div>

      {/* comments and tags div end here */}
      {/* <ShowAuthOption/> */}
    </div>
  );
};

export default Discuss;
