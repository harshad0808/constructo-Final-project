
import './App.css';
import LoginFlat from './loginFlat';
import SignupCons from './signupCons';
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add_Flat from './add_flat';

import { SignUpFlat } from './signup_flat';
import Logincons from './logincons';


function App() {
  return (
   <>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginFlat />} />
          <Route path="signupcons" element={<SignupCons />} />
          <Route path="addflat" element={<Add_Flat />} />
          <Route path="logincons" element={<Logincons />} />
          <Route path="validate" element={<SignUpFlat/>} />
          
        </Routes>
      </BrowserRouter>
 
   </>
  );
}

export default App;
