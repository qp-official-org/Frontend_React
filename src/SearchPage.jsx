import React from 'react';

const SearchPage = () => {
  return (
    <>
      <div style={{ marginTop: '10vh' }}>searchpage</div>
      <h3 style={{ marginLeft: '20vw' }}>최근검색어</h3>
      <hr style={{ margin: '2vh 20vw 0 20vw' }} />
      <div className="searchwrap">
        <button className="s1" style={{ display: 'flex' }}>
          <p className="history">첫번째</p>
          <button className="delete">X</button>
        </button>
        <p>qqwejkdjskdjskjskdjks</p>
      </div>
    </>
  );
};
export default SearchPage;
