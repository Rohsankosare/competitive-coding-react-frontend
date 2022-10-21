import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";



import endPoints from "../../endPoints";
import axios from "axios";

import ReactMarkdown from "react-markdown";
import Editor from "../editor/Editor";

const PostInfo = () => {
  const location = useLocation();

  const problemId = location.state;

  const [problem, setProblem] = useState();

  useEffect(() => {
    const getProblem = async () => {
      const { data } = await axios.get(endPoints.getProblem, {
        params: { problemId: problemId },
      });

      setProblem(data);
     
    };
    getProblem();
  }, []);

 

  return (
    <div className="w-full h-auto px-2 py-2 my-10 bg-white flex">

        {/* problem section div */}
      <div className="w-2/4 px-2  ">{problem &&
      <div className=" flex flex-col">

        {/* problem title div */}
       <div className= " flex flex-col px-2 py-2 my-2 rounded-sm shadow sm ">
       <p>Problem Statement:</p>
        <p className="text-md font-bold my-2">{problem.title}</p>
       </div>

        {/* problem des div */}
       <div className=" flex flex-col px-2 py-2 my-2 rounded-sm  shadow sm ">
        <p>Problem Description:</p>
        <ReactMarkdown>{problem.problemDes}</ReactMarkdown>
        </div>

        <div className=" flex flex-col px-2 py-2 my-2 rounded-sm   shadow sm">
            <p>sample Test Cases</p>

            <div className="flex flex-col my-2 px-1 py-1  bg-gray-100">
                <p className="font-bold">Input:</p>
                <p className=" ">{problem.sampleInput}</p>
                <p className="font-bold">Output:</p>
                <p className=" ">{problem.sampleOutput}</p>
            </div>
            </div>
            

      </div>
      }</div>

        {/* editor secrtion div */}
      <div className="w-2/4 px-2">
      <Editor/>
      </div>
    </div>
  );
};

export default PostInfo;
