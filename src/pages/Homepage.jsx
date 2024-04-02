import { Fragment, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../style/theme/Themes";
import NavBar from "../components/Navbar";
import { GlobalStyles } from "../style/theme/GlobalStyles";
import LightLogo from "../components/Logo/LightLogo";
import DarkLogo from "../components/Logo/DarkLogo";
function Homepage() {
  const [language, setLanguage] = useState("english");
  const [theme, setTheme] = useState("dark");
  const [data, setData] = useState(null);
  const [logo, setLogo] = useState(<LightLogo />);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("websiteInfo.json")
      .then((response) => response.json())
      .then((parsedData) => {
        setData(parsedData);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const themeButton = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      setLogo(newTheme === "light" ? <DarkLogo /> : <LightLogo />);
      return newTheme;
    });
  };

  const languageButton = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "english" ? "portuguese" : "english"
    );
  };

  return (
    <>
      <GlobalStyles theme={theme} />
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <NavBar
          home={data[language][0].navbar[0].text}
          about={data[language][0].navbar[1].text}
          projects={data[language][0].navbar[2].text}
          portfolio={data[language][0].navbar[3].text}
          services={data[language][0].navbar[4].text}
          contact={data[language][0].navbar[5].text}
          changeThemeText={data[language][0].navbar[6].text}
          changeLanguageText={data[language][0].navbar[7].text}
          changeThemeFunc={themeButton}
          changeLanguageFunc={languageButton}
          logo={logo}
        />
      </ThemeProvider>
    </>
  );
}

export default Homepage;
