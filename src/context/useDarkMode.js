import { useEffect, useState } from "react";
export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = mode => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const switchTheme = () => {
    if (theme === "light") {
      setMode("dark");
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    } else {
      setMode("light");
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode("light");
    }
    setComponentMounted(true);
  }, []);

  return [theme, switchTheme, componentMounted];
};
