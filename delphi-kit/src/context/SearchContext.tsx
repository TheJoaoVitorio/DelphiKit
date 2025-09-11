"use client";

import React, { createContext, useContext, useState } from "react";

type SearchContextType = {
  onSearch: () => void;
  setOnSearch: (fn: () => void) => void;
};

const SearchContext = createContext<SearchContextType>({
  onSearch: () => {},
  setOnSearch: () => {},
});

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [onSearch, setOnSearch] = useState<() => void>(() => () => {});

  return (
    <SearchContext.Provider value={{ onSearch, setOnSearch }}>
      {children}
    </SearchContext.Provider>
  );
};