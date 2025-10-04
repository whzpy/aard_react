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
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "pt", label: "Português" },
    { code: "cn", label: "中文" },
    { code: "sa", label: "العربية" },
  ];

  return (
    <footer className="border-top p-4 d-flex justify-content-end">
      <Dropdown>
        <Dropdown.Toggle variant="light" id="language-dropdown">
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
    </footer>
  );
};

export default LanguageSelector;
