import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "src/Main";
import Myprofile from "src/Myprofile";
import Qdetail from "src/Qdetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Myprofile />} />
          <Route path="/detail" element={<Qdetail />} />
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
