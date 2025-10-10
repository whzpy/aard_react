import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const LanguageSelector = () => {
  // Keep track of selected language
  const [language, setLanguage] = useState({
    code: "us",
    label: "English",
  });

  // All languages with flags
  const languages = [
    { code: "us", label: "English" },
    { code: "cn", label: "中文" },
    { code: "jp", label: "日本語" },
    { code: "kr", label: "한국어" },
    { code: "es", label: "Español" }
  ];

  return (
    <div className="d-flex justify-content-end">
      <Dropdown>
        <Dropdown.Toggle 
          variant="light" 
          size="sm" 
          id="language-dropdown"
          style={{ padding: "0.025rem 0.5rem", height: "auto",  backgroundColor: "#b7b7bcff", }}
        >
          <img
            src={`https://flagcdn.com/w20/${language.code}.png`}
            alt={language.label}
            className="me-2"
          />
          {language.label}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {languages.map((lang) => (
            <Dropdown.Item
              key={lang.code}
              onClick={() => setLanguage(lang)}
            >
              <img
                src={`https://flagcdn.com/w20/${lang.code}.png`}
                alt={lang.label}
                className="me-2"
              />
              {lang.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default LanguageSelector;
