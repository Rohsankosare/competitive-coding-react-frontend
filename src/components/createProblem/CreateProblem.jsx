import React from "react";
import MarkDownEditor from "../util/MarkDownEditor";
import { useState } from "react";
import axios from "axios";
import endPoints from "../../endPoints";

const CreateProblem = () => {
  const [value, setValue] = useState("");
  const [testCaseArray, setTestCaseArray] = useState([]);
  const [testCaseArrayValue, setTestCaseArrayValue] = useState([]);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [sampleInput, setSampleInput] = useState("");
  const [sampleOutput, setSampleOutput] = useState("");
  const [submitButtonDiabled, setSubmitButtonDiabled] = useState(false);

  const handleProblemSubmit = async (e) => {
    e.preventDefault();
    setSubmitButtonDiabled(true);

    const payload = {
      problemTitle: title,
      problemDes: des,
      problemSampleInput: sampleInput,
      problemSampleOutput: sampleOutput,
      problemTestCases: testCaseArrayValue,
    };
    const { data } = await axios.post(endPoints.createProblem, payload, {
      withCredentials: true,
    });

    console.log(data);

    setSubmitButtonDiabled(false);
  };
  return (
    <div className=" bg-white w-3/4 my-10 mx-auto px-5 py-5 shadow-md h-auto">
      {/* problem title input */}
      <textarea
        className="w-full h-10 resize-none border rounded-sm my-2 px-1"
        placeholder="Enter Problem Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></textarea>

      <MarkDownEditor
        value={value}
        updateEditorContent={(value) => {
          setValue(value);
          setDes(value);
        }}
      />

      {/* sample input test case  */}
      <textarea
        className="w-full h-10 resize-none border rounded-sm my-2 px-1"
        placeholder="Enter Sample test Input"
        onChange={(e) => {
          setSampleInput(e.target.value);
        }}
      ></textarea>

      {/* sample output test case  */}
      <textarea
        className="w-full h-10 resize-none border rounded-sm my-2 px-1"
        placeholder="Enter Sample test Output"
        onChange={(e) => {
          setSampleOutput(e.target.value);
        }}
      ></textarea>

      <div className=" flex  justify-start">
        <p className="mx-2">Test cases</p>
        <button
          className="mx-2 bg-gray-600 text-white rounded-sm px-2 text-sm "
          onClick={() => {
            setTestCaseArray([...testCaseArray, { id: Math.random() }]);
          }}
        >
          Create
        </button>
      </div>
      <div>
        {testCaseArray &&
          testCaseArray.map((testCase, id) => (
            <CreateTestCaseForm
              key={id}
              setTestCaseValue={(value) => {
                setTestCaseArrayValue([...testCaseArrayValue, value]);
              }}
              removeTestCaseValue={(id) => {
                setTestCaseArrayValue(
                  testCaseArrayValue.filter((t) => t.id !== id)
                );
              }}
              onClose={() => {
                const index = id;
                setTestCaseArray([
                  ...testCaseArray.slice(0, index),
                  ...testCaseArray.slice(index + 1, testCaseArray.length),
                ]);
              }}
            />
          ))}
      </div>

      <button
        className="mx-2 bg-gray-600 text-white rounded-sm px-2 py-1  text-md  my-10"
        onClick={handleProblemSubmit}
        disabled={submitButtonDiabled}
      >
        Submit
      </button>
    </div>
  );
};
const CreateTestCaseForm = ({
  onClose,
  setTestCaseValue,
  removeTestCaseValue,
}) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [id, setId] = useState(Math.random());
  const [submited, setSubmited] = useState(false);
  return (
    <div className="w-full flex flex-col border rounded-sm my-4 px-2 py-2 ">
      <div className="flex justify-end">
        <button
          className="px-2 border rounded-sm bg-slate-500 text-white"
          onClick={() => {
            onClose();
            if (submited) removeTestCaseValue(id);
          }}
        >
          X
        </button>
      </div>
      <textarea
        className="w-full h-10 resize-none border rounded-sm my-2 px-1 py-1"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="input for test case"
      ></textarea>
      <textarea
        className="w-full h-10 resize-none border rounded-sm my-2 px-1"
        onChange={(e) => {
          setOutput(e.target.value);
        }}
        placeholder="output for test case"
      ></textarea>
      <button
        className={`px-2 w-20 border rounded-sm ${submited?"bg-green-600":" bg-slate-500"} text-white`}
        disabled={submited}
        onClick={() => {
          setTestCaseValue({ input, output, id });
          setSubmited(true);
        }}
      >
        {submited?"saved":"submit"}
      </button>
    </div>
  );
};

export default CreateProblem;
