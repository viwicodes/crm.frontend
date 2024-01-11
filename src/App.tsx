import Activities from './Activities';
import Employees from './Employees';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Projects from './Projects';
import Roles from './Roles';
import TimeEntry from './Time Entry';
import Dashboard from './Dashboard';
import LoginPage from './Auth';
import Protected, { ProtectedLogin } from './Auth/protectedRoute';
import useToken from './Auth/useToken';
import { RolesAuthRoute } from './Auth/RolesAuthRoute';

export default function App() {
  const { isLoggedIn, setToken } = useToken();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace={true} />}></Route>
        <Route path="employees" element={<Protected children={<Employees />}></Protected>} />
        <Route path="/dashboard" element={<Protected children={<Dashboard />}></Protected>} />
        <Route path="activities" element={<Protected children={<Activities />}></Protected>} />
        <Route path="projects" element={<Protected children={<Projects />}></Protected>} />
        <Route path="time" element={<Protected children={<RolesAuthRoute roles={['GROUP_SUPER_ADMIN']}><TimeEntry /></RolesAuthRoute>}></Protected>} />
        <Route path="roles" element={<Protected children={<Roles />}></Protected>} />
        <Route path="login" element={<ProtectedLogin children={<LoginPage setToken={setToken} />}></ProtectedLogin>} />
      </Routes>
    </BrowserRouter>
  )
}