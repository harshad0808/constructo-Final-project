
import './App.css';
import LoginFlat from './loginFlat';
import SignupCons from './signupCons';
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add_Flat from './add_flat';

import { SignUpFlat } from './signup_flat';
import Logincons from './logincons';
import ConstructionDashboard from './consDashboard';
import FlatDashboard from './flatDashboard';
import Addvisit from './AddVisit';
import ForgotPassword from './forgetpassword';
import Admin from './admin';
import AdminNav from './adminNav';
import AddUpdates from './AddUpdates';


function App() {
  return (
   <>
  

<BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginFlat />} />
          <Route path="signupcons" element={<SignupCons />} />
          <Route path="addflat" element={<Add_Flat />} />
          <Route path="logincons" element={<Logincons />} />
          <Route path="validate" element={<SignUpFlat/>} />
          <Route path="consDashboard" element={<ConstructionDashboard/>} />
          <Route path="signupFlat" element={<SignUpFlat/>} />
          <Route path="flatDashboard" element={<FlatDashboard/>} />
          <Route path="addvisit" element={<Addvisit/>} />
          <Route path="forgotpassword" element={<ForgotPassword/>} />
          <Route path="admin" element={<Admin></Admin>} />
          <Route path="adminNav" element={<AdminNav></AdminNav>} />
          <Route path="addupdates" element={<AddUpdates></AddUpdates>} />
          
          
        </Routes>
  </BrowserRouter>
 
   </>
  );
}

export default App;
