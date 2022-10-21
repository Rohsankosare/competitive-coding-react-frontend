import React ,{useState,useEffect}from "react";
import axios from "axios";
import endPoints from "../../endPoints";
import { Link } from "react-router-dom";

const Problems = () => {


  const [problems,setProblems]  = useState();

  useEffect(() => {
    const getProblems = async () => {
      const { data } = await axios(endPoints.getProblems);
      setProblems(data.problems);
      
    };

    getProblems();
  }, []);

 
  return (
    <div className="flex flex-col w-full sm:w-3/4 mx-auto mt-2  bg-white shadow-lg shadow-gray px-2 py-2 h-screen  ">
      {problems && problems.map((problem) => (
            <Link to={"/problem"}  state= {problem._id} key={problem._id}>
              <div className=" h-24 border-b border-gray-200 shadow-md bg-white px-2 py-2">
               <p>{problem.title}</p>
              </div>
            </Link>
            ))}
    </div>
      
  );
};

export default Problems;
