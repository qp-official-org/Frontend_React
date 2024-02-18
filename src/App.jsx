// @ts-nocheck

import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchContentProvider } from './Context';
import Main from 'src/Main';
import Qdetail from 'src/Qdetail';
import Login1 from 'src/Login1';
import Certify from 'src/Certify';
import Nickname from 'src/Nickname';
import Profile from 'src/Profile';
import Qregister from './Qregister';
import Myprofile from './Myprofile';
import MainPage from './MainPage';
import Header from './Header';
import SearchPage from './SearchPage';
import SearchQues from './searchQues';
import Auth from "src/Auth";
function App() {
  return (
    <>
      <SearchContentProvider>
        <div>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path="/" element={<Login1 />} />
              <Route path="/detail/:questionId" element={<Qdetail />} />
              <Route path="/certify" element={<Certify />} />
              <Route path="/nickname" element={<Nickname />} />
              <Route path="/setProfile" element={<Profile />} />
              <Route path="/mainpage" element={<MainPage />} />
              {/*<Route path="/mainpage2" element={<MainPage2 />} />*/}
              <Route path="/register" element={<Qregister />} />
              <Route path="/myprofile" element={<Myprofile />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/searchq" element={<SearchQues />} />
              <Route path="/auth/kakao/login" element={<Auth />} />
              {/* 정의되지 않은 경로에 접근시 해당 페이지로 이동*/}
              <Route path="*" element={<Nickname />} />
            </Routes>
          </BrowserRouter>
        </div>
      </SearchContentProvider>
    </>
  );
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js', { type: 'text/javascript' })
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

export default App;