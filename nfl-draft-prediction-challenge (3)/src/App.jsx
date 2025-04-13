import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateGroup from "./pages/CreateGroup";
import GroupPage from "../pages/GroupPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-group" element={<CreateGroup />} />
      <Route path="/group/:id" element={<GroupPage />} />
      <Route path="*" element={<div className='p-8'>404 Not Found</div>} />
    </Routes>
  );
}