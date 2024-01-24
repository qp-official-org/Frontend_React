import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "src/Main";
import Myprofile from "src/Myprofile";
import Qdetail from "src/Qdetail";
import Login1 from "src/Login1";
import Certify from "src/Certify";
import Nickname from "src/Nickname";
import Profile from "src/Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Myprofile />} />
          <Route path="/detail" element={<Qdetail />} />
          <Route path="/login1" element={<Login1 />} />
          <Route path="/certify" element={<Certify />} />
          <Route path="/nickname" element={<Nickname />} />
          <Route path="/setProfile" element={<Profile />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

export default App;
