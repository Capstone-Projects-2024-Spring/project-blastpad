import React, { useState, useEffect, createContext } from "react";
import { GlobalStyles } from "./components/styles/Global";
import NavBar from "./components/NavBar.jsx";
import { ThemeProvider } from "styled-components";
import { dark, Themes } from "./components/styles/Theme.styled.jsx";

import HomePage from "./components/HomePage.jsx";
import CommunityPage from "./components/CommunityPage.jsx";
import ClassroomPage from "./components/ClassroomPage.jsx";
import SettingsPage from "./components/SettingsPage.jsx"; // Import SettingsPage component

import { Layout } from './components/styles/Layout.styled.jsx'
import CursorProvider from "./components/CursorProvider.jsx";

import { AuthProvider } from "./AuthContext.jsx";

const ThemeConfigContext = createContext(null);

function App() {
  const [selectedTheme, setSelectedTheme] = useState(dark);
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavButtonClick = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("current-theme");
    if (currentTheme && Themes[currentTheme]) {
      setSelectedTheme(Themes[currentTheme]);
    }
  }, []);

  // function to handle user theme selection on click and save it to local storage
  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem("current-theme", theme.name);
  };

  return (
    <AuthProvider>
      <CursorProvider>
        <ThemeConfigContext.Provider value={{setSelectedTheme: handleThemeChange}}>
          <ThemeProvider theme={selectedTheme}>
            <div className="App">
              <GlobalStyles />
              <title>{import.meta.env.VITE_APP_TITLE}</title>

              <Layout>
                <NavBar onPageChange={handleNavButtonClick} />
                {currentPage === 'home' && <HomePage />}
                {currentPage === 'community' && <CommunityPage />}
                {currentPage === 'classroom' && <ClassroomPage />}
                {currentPage === 'settings' && <SettingsPage />}
              </Layout>
            </div>
          </ThemeProvider>
        </ThemeConfigContext.Provider>
      </CursorProvider>
    </AuthProvider>
  );
}

export default App;

export { ThemeConfigContext };