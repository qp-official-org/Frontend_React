import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "src/MainPage";
import MainPage2 from "src/MainPage2";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mainpage" element={<MainPage2 />} />
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
