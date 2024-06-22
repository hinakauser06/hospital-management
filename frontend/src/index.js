import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// for doctor
import DoctorList from './pages/doctor/List';
import DoctorCreate from './pages/doctor/Create';
// for patient
import PatientList from './pages/patient/List';
import PatientCreate from './pages/patient/Create';
// for admin
import AdminCreate from './pages/admin/Create';
import AdminList from './pages/admin/List';
// for bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

import 'bootstrap-icons/font/bootstrap-icons.css';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/doctor/list",
    element: <DoctorList />,
  },
  {
    path: "/doctor/create",
    element: <DoctorCreate />,
  },
  {
    path: "/patient/list",
    element: <PatientList />,
  },
  {
    path: "/patient/create",
    element: <PatientCreate />,
  },
  {
    path: "/admin/list",
    element: <AdminList />,
  },
  {
    path: "/admin/create",
    element: <AdminCreate />,
  },
  {
    path: "/login",
    element: <Login/>,
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
