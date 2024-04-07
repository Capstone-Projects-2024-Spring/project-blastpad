import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./components/styles/Global";
import NavBar from "./components/NavBar.jsx";

import { ThemeProvider } from "styled-components";
import { dark } from "./components/styles/Theme.styled.jsx";
import HomePage from "./components/HomePage.jsx";
import { Layout } from './components/styles/Layout.styled.jsx'

function App() {
  const [selectedTheme, setSelectedTheme] = useState(dark);

  return (
    <ThemeProvider theme={selectedTheme}>
      <div className="App">
        <GlobalStyles />

        <Layout>
          <NavBar></NavBar>
          <HomePage></HomePage>
        </Layout>
      </div>
    </ThemeProvider>
  )
}

export default App
