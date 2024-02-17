import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "src/Main";
import Qdetail from "src/Qdetail";
import Login1 from "src/Login1";
import Certify from "src/Certify";
import Nickname from "src/Nickname";
import Profile from "src/Profile";
import Auth from "src/Auth";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login1 />} />
          <Route path="/detail" element={<Qdetail />} />
          <Route path="/certify" element={<Certify />} />
          <Route path="/nickname" element={<Nickname />} />
          <Route path="/setProfile" element={<Profile />} />
          <Route path="/mainpage" element={<Main />} />
          <Route path="/auth/kakao/login" element={<Auth />}/>
          {/* 정의되지 않은 경로에 접근시 해당 페이지로 이동*/}
          <Route path="*" element={<Auth />}/>
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