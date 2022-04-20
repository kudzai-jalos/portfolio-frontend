import { Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import Index from "./pages/Index";
import Message from "./pages/Message";
import EditProject from "./pages/EditProject";
import AddSkill from "./pages/AddSkill";
import { useEffect } from "react";
import AdminProjects from "./pages/AdminProjects";
import AdminSkills from "./pages/AdminSkills";
import NotFound from "./pages/NotFound";
import ProjectDetails from "./pages/ProjectDetails";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import VerifyAccount from "./pages/VerifyAccount";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./store/authSlice";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    let timeout;
    if (auth.isAuth) {
      timeout = setTimeout(() => {
        dispatch(logout);
      }, auth.tokenExpires - new Date().getTime());
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [auth.isAuth, auth.tokenExpires, dispatch]);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        element.scrollIntoView();
      }
    }
  }, [location.hash]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/projects/:projectId" element={<ProjectDetails />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/accounts/verify/:token" element={<VerifyAccount />} />
      <Route path="/admin/add-project" element={<EditProject />} />
      <Route path="/admin/projects" element={<AdminProjects />} />
      <Route
        path="/admin/edit-project/:projectId"
        element={<EditProject isEditing />}
      />
      <Route path="/admin/skills" element={<AdminSkills />} />
      <Route path="/admin/add-skill" element={<AddSkill />} />
      <Route path="/action/:status" element={<Message />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
