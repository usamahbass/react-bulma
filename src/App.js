import React, { useEffect } from "react";
import { GlobalStyles } from "./context/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Backtop } from "./components/backtop";
import { lightTheme, darkTheme } from "./context/theme";
import { useDarkMode } from "./context/useDarkMode";
import SwitchTheme from "./components/switch";
import Layout from "./components/layout";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import WOW from "wow.js";
import "bulma/css/bulma.min.css";
import "animate.css";
import "./styles/index.css";

const App = () => {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
      scrollContainer: null,
      resetAnimation: true
    });
    wow.init();
    
//     remove big data load
    
     const elem = document.getElementById("starting");
    window.onload = () => {
      elem.remove();
    };
  });

  const [theme, switchTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Layout>
          <Header />
          <Main />
          <Backtop />
          <Footer>
            <SwitchTheme theme={theme} toggleTheme={switchTheme} />
          </Footer>
        </Layout>
      </>
    </ThemeProvider>
  );
};

export default App;
