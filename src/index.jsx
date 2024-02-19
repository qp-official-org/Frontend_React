import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'src/App';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
      <App />
  </RecoilRoot>
);
