import Activities from './Activities';
import Employees from './Employees';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './Projects';
import Roles from './Roles';
import TimeEntry from './Time Entry';
import Dashboard from './Dashboard';
import LoginPage from './Auth';

// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index />
          <Route path="employees" element={<Employees />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="activities" element={<Activities />} />
          <Route path="projects" element={<Projects />} />
          <Route path="time" element={<TimeEntry />} />
          <Route path="roles" element={<Roles />} />
          <Route path="login" element={<LoginPage />} />
          {/* <Route path="*" /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}