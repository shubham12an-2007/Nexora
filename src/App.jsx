import { Navigate, Route, Routes } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import ApplicationDetails from "./pages/ApplicationDetails";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Companies from "./pages/Companies";
import Interviews from "./pages/Interviews";
import Resumes from "./pages/Resumes";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

export default function App() {
  return <ThemeProvider><AuthProvider><Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route element={<AppShell/>}>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/applications" element={<Applications/>}/>
      <Route path="/applications/:id" element={<ApplicationDetails/>}/>
      <Route path="/jobs" element={<Jobs/>}/>
      <Route path="/jobs/:id" element={<JobDetails/>}/>
      <Route path="/companies" element={<Companies/>}/>
      <Route path="/interviews" element={<Interviews/>}/>
      <Route path="/resumes" element={<Resumes/>}/>
      <Route path="/analytics" element={<Analytics/>}/>
      <Route path="/settings" element={<Settings/>}/>
    </Route>
    <Route path="/404" element={<NotFound/>}/>
    <Route path="*" element={<Navigate to="/404" replace/>}/>
  </Routes></AuthProvider></ThemeProvider>;
}