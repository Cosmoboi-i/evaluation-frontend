import React, { useContext, useEffect } from "react";
import "./footer.css";
import { ThemeContext } from "../../contexts/theme";
import { v4 as uuid } from "uuid";
import makeRequest from "../../utils/makeRequest";
import { GET_THEME, UPDATE_THEME } from "../../constants/apiEndPoints";

export default function Footer() {
  const [themes, setThemes] = useContext(ThemeContext);

  const fetchTheme = async () => {
    const data = await makeRequest(GET_THEME);
    setThemes(data);
    console.log("themeees", data);
  };

  const handleTheme = async (id) => {
    const res = await makeRequest(UPDATE_THEME, {
      data: { preferredThemeId: id },
    });
    setThemes({ preferredThemeId: id });
  };

  useEffect(() => {
    fetchTheme();
  }, []);

  useEffect(() => {
    console.log("THEMES", themes);
  }, [themes]);

  return (
    <div className="footer">
      <div className="content">
        <div className="theme">
          <div className="theme-text">THEME</div>
          {themes.themes?.map((theme, index) => (
            <div
              key={uuid()}
              className="blob"
              style={{ background: theme?.colorHexCode }}
              onClick={() => {
                handleTheme(index + 1);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
