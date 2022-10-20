import React, { useEffect, useState } from "react";
import axios from "axios";
import CodeEditor from "@uiw/react-textarea-code-editor";
import endPoints from "../../endPoints";
import codeSnippits from "./codeSnippits";

const Editor = () => {
  const [code, setCode] = React.useState("");
  const [output, setOutput] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [runButtonDisable, setRunButtonDisable] = React.useState(false);
  const [inputButton, setInputButton] = React.useState(false);
  const [outputButton, setOutputButton] = React.useState(true);
  const [input,setInput] = useState("");

  const handelSubmit = async (e) => {
    setRunButtonDisable(true);

    e.preventDefault();
    setStatus("pending");
    const payload = {
      code,
      language,
      input:input,
    };

    const { data } = await axios.post(endPoints.runcode, payload);

    let intervalId;
    if (data.jobId === undefined) {
      setStatus("error");
      setRunButtonDisable(false);
      return;
    }
    intervalId = setInterval(async () => {
      const { data: jobdata } = await axios.get(endPoints.jobStatus, {
        params: { id: data.jobId },
      });

      if (jobdata.job.status === "success" || jobdata.job.status === "error") {
        clearInterval(intervalId);
        setOutput(jobdata.job.output);
        setStatus(jobdata.job.status);
        setRunButtonDisable(false);
      }
    }, 300);

    // setOutput(job.jobId);
  };

  const [language, setLanguage] = React.useState("js");

  //useEffect

  useEffect(() => {
    setCode(codeSnippits[language]);
  }, [language]);

  return (
    <div className="flex flex-col w-100  shadow-md  rounded-md bg-white">
      {/* editor navbar */}
      <div className="w-100 h-12 text-xs rounded-t-md flex pt-2">
        <p className="p-1 mx-2">Languages</p>

        <select
          className="border border-gray px-1 mx-2 h-6 focus:outline-none"
          id="language"
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
        >
          <option value="js">node js</option>
          <option value="cpp">cpp</option>
          <option value="c">c</option>

          <option value="py">pythone</option>
        </select>
      </div>
      {/* end */}

      {/* editor  screen code starts here */}

      <CodeEditor
        value={code}
        language={language}
        placeholder="Please enter code"
        onChange={(e) => setCode(e.target.value)}
        padding={15}
        style={{
          fontSize: 16,
          backgroundColor: "#f5f5f5",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          width: "100%",
          height: 420,
          overflowY: "scroll",
          overflowX: "scroll",
        }}
      />

      <div className="w-100 h-12 text-xs rounded-t-md flex p-2">
        <button
          className="w-20 p-1  mx-2 bg-green-500 text-white"
          onClick={handelSubmit}
          disabled={runButtonDisable}
        >
          Run
        </button>
        <button className="w-20 p-1 mx-2 bg-green-500 text-white">
          submit
        </button>
        <h3
          className={`text-center p-1 mx-4 text-md font-bold
         ${
           status === "pending"
             ? "text-orange-500"
             : status === "success"
             ? "text-green-500"
             : "text-red-600"
         }`}
        >
          {status}
        </h3>
      </div>
      {/* end */}

      {/* output and input windows */}

      <div className=" w-full h-auto py-2 bg-white">
        <div className="flex flex-col">
          <div className="w-full h-10 flex">
            <button
              className={`px-4 ${
                inputButton ? "bg-gray-700 text-white" : "bg-white text-black"
              } h-8 mx-3 w-20  border rounded-sm`}
              onClick={() => {
                setInputButton(true);
                setOutputButton(false);
              }}
            >
              Input
            </button>
            <button
              className={`px-4${
                outputButton ? " text-white bg-gray-700" : "bg-white text-black"
              } h-8 mx-3 w-20  border rounded-sm`}
              onClick={() => {
                setInputButton(false);
                setOutputButton(true);
              }}
            >
              Output
            </button>
          </div>
          <div className="w-full h-96 bg-gray-700 text-white flex">
            {outputButton ? output : <textarea className="w-full h-96  bg-gray-700 text-white"  onChange={(e)=>setInput(e.target.value)} ></textarea>}
          </div>
        </div>
      </div>

      {/* output and input windows */}

      <div className="flex w-100 h-auto py-2 bg-white"></div>

      {/* end */}
    </div>
  );
};

export default Editor;
