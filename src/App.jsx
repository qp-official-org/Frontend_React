// @ts-nocheck

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'src/Main';
import Myprofile from './Myprofile';
import Qdetail from 'src/Qdetail';
import SearchPage from './SearchPage';
import Qregister from "./Qregister";

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Myprofile />} />
          <Route path="/detail" element={<Qdetail />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/register" element={<Qregister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js', { type: 'text/javascript' })
//       .then((registration) => {
//         console.log('SW registered: ', registration);
//       })
//       .catch((registrationError) => {
//         console.log('SW registration failed: ', registrationError);
//       });
//   });
// }

export default App;
