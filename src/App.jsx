import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Myprofile from "./Myprofile";
import Qdetail from "./Qdetail";

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
