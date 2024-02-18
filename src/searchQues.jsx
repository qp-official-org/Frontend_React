import React from 'react';
import Header from './Header';

const SearchQues = () => {
  return (
    <>
      <Header />
      <h3 style={{ marginLeft: '20vw', marginTop: '8vh' }}>최근검색어</h3>
      <hr style={{ margin: '2vh 20vw 0 20vw' }} />
      <div className="searchwrap">
        <button className="s1" style={{ display: 'flex' }}>
          <p className="history">aa</p>
          <button className="delete">X</button>
        </button>
      </div>
    </>
  );
};
export default SearchQues;
