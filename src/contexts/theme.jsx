import React, { createContext, useState } from "react";

export const ThemeContext = createContext([]);

// eslint-disable-next-line react/prop-types
export function RecordsProvider({ children }) {
  const [records, setRecords] = useState([]);

  return (
    <ThemeContext.Provider value={[records, setRecords]}>
      {children}
    </ThemeContext.Provider>
  );
}
