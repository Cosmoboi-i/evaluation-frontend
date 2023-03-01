import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext([]);

// eslint-disable-next-line react/prop-types
export function ThemeProvider({ children }) {
  const [themes, setThemes] = useState([]);
  const [hex, setHex] = useState();

  useEffect(() => {
    if (themes) {
      const id = themes.preferredThemeId;
      setHex(themes.themes);
    }
  }, [themes]);

  return (
    <ThemeContext.Provider value={[themes, setThemes, hex]}>
      {children}
    </ThemeContext.Provider>
  );
}
