import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./AuthContext";

import CodeEditor from "./components/codeeditor/CodeEditor";
import Discuss from "./components/discuss/Discuss";
import Header from "./components/header/Header";
import Problems from "./components/problems/Problems";
import Projects from "./components/projects/Projects";
import PostInfo from "./components/postInfo/PostInfo";
import MyProfilePage from "./components/profileP/MyProfilePage";
import CreateProblem from "./components/createProblem/CreateProblem";
import ProblemInfo from "./components/problems/ProblemInfo"

function App() {
  return (
    <AuthProvider>
      <div className=" bg-slate-200 min-h-screen pb-10">
        <Header />

        <Routes>
          <Route path="/" element={<h1>Welcome</h1>}></Route>

          <Route path="/problems" element={<Problems />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/discuss" element={<Discuss />}></Route>
          <Route path="/postinfo" element={<PostInfo />}></Route>
          <Route path="/codeeditor" element={<CodeEditor />}></Route>
          <Route path="/myprofile" element={<MyProfilePage/>}></Route>
          <Route path="/createproblem" element={<CreateProblem/>}></Route>
          <Route path="/problem" element={<ProblemInfo/>}></Route>

        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
