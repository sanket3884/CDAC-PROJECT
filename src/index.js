import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AdminHome from './Admin/AdminHome';
import AddDoctor from './Admin/AddDoctor';
import AdminNavbar from './Admin/AdminNavbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UpdateProfile from './Admin/UpdateProfile';
import ViewDoctor from './Admin/ViewDoctor';
import ViewAppointment from './Admin/ViewAppointment';
import DoctorHome from './Doctor/DoctorHome';
import DoctorNavbar from './Doctor/DoctorNavbar';
import SetSchedule from './Doctor/SetSchedule';
import UpdatePro from './Doctor/UpdatePro';
import Report from './Doctor/Report';
import ViewAppoint from './Doctor/ViewAppoint';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <AdminNavbar />
    <Routes>
      <Route exact path="/" element={<AdminNavbar />} />
      <Route path="home" element={<AdminHome />} />
    </Routes>

      <Routes>
        <Route exact path="/" element={<AdminNavbar />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
      </Routes>

      <Routes>
        <Route exact path="/" element={<AdminNavbar />} />
        <Route path="/update-doctor" element={<UpdateProfile />} />
      </Routes>

      <Routes>
        <Route exact path="/" element={<AdminNavbar />} />
        <Route path="view-doctor" element={<ViewDoctor />} />
      </Routes>

      <Routes>
        <Route exact path="/" element={<AdminNavbar />} />
        <Route path="view-appointment" element={<ViewAppointment />} />
      </Routes>



      
      {/* <DoctorNavbar />
      <Routes>
        <Route path="home" element={<DoctorHome />} />
      </Routes>

      <Routes>
        <Route path="set-sch" element={<SetSchedule />} />
      </Routes>

      <Routes>
        <Route path="update-profile" element={<UpdatePro />} />
      </Routes>

      <Routes>
        <Route path="report" element={<Report />} />
      </Routes>

      <Routes>
        <Route path="view-appointment" element={<ViewAppoint />} />
      </Routes> */}
      
    </Router>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
