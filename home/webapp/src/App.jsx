import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./components/styles/Global";
import NavBar from "./components/NavBar.jsx";
import { ThemeProvider } from "styled-components";
import { dark } from "./components/styles/Theme.styled.jsx";

import HomePage from "./components/HomePage.jsx";
import CommunityPage from "./components/CommunityPage.jsx";
import ClassroomPage from "./components/ClassroomPage.jsx";
import SettingsPage from "./components/SettingsPage.jsx"; // Import SettingsPage component

import { Layout } from './components/styles/Layout.styled.jsx'
import CursorProvider from "./components/CursorProvider.jsx";

import { AuthProvider } from "./AuthContext.jsx";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(dark);
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <AuthProvider>
      <CursorProvider>
        <ThemeProvider theme={selectedTheme}>
          <div className="App">
            <GlobalStyles />

            <Layout>
              <NavBar onPageChange={handleNavButtonClick} />
              {currentPage === 'home' && <HomePage />}
              {currentPage === 'community' && <CommunityPage />}
              {currentPage === 'classroom' && <ClassroomPage />}
              {currentPage === 'settings' && <SettingsPage />}
            </Layout>
          </div>
        </ThemeProvider>
      </CursorProvider>
    </AuthProvider>
  );
}

export default App;
