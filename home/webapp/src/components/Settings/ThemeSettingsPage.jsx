import React, { useState, useEffect, useContext } from "react";
import { SettingsPageContainer } from "../styles/Settings.styled";
import styled, { ThemeContext } from "styled-components";
import { ThemeConfigContext } from "../../App";

import { Themes } from '../styles/Theme.styled'

export default function ThemeSettingsPage() {
  const { theme } = useContext(ThemeContext)
  
  return (<SettingsPageContainer>
    <div style={{height: "100%", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", width: "100%", gap: "3px"}}>
      {Object.keys(Themes).map(name => 
        <ThemeSelector name={name} theme={Themes[name]}></ThemeSelector>
      )}
    </div>
  </SettingsPageContainer>)
}


function ThemeSelector({name, theme}) {
  const { setSelectedTheme } = useContext(ThemeConfigContext)

  return (<div
    style={
      {
        width: "100%",
        height: "100%",
        borderRadius: "5px",
        backgroundColor: theme.colors.background,
        userSelect: "none",
        cursor: "pointer",
        padding: "10px",
        border: "2px solid white"
      }
    }
    onClick={() => {setSelectedTheme(theme)}}
    >
  </div>)
}