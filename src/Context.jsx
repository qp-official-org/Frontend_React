// SearchContentContext.js
import React, { createContext, useContext, useState } from 'react';

const SearchContentContext = createContext();

export const useSearchContent = () => useContext(SearchContentContext);

export const SearchContentProvider = ({ children }) => {
  const [searchContent, setSearchContent] = useState('');
  const [AsearchContent, setAsearchContent] = useState(''); // AsearchContent 추가

  return (
    <SearchContentContext.Provider
      value={{
        searchContent,
        setSearchContent,
        AsearchContent,
        setAsearchContent,
      }} // AsearchContent 추가
    >
      {children}
    </SearchContentContext.Provider>
  );
};
