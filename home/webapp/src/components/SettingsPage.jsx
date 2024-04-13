import React, { useState } from "react";
import * as Styled from "./styles/Settings.styled";
import NetworkSettingsPage from "./Settings/NetworkSettingsPage";

const SettingsPage = () => {
  const [activeButton, setActiveButton] = useState("WiFi");

  return (
    <Styled.SettingsPageContainer>
      <Styled.SideMenu>
        <Styled.sideButton
          active={activeButton === "WiFi"}
          onClick={() => {setActiveButton("WiFi")}}
          tabIndex="2"
        >
          Wi-Fi
        </Styled.sideButton>
        <Styled.sideButton
          active={activeButton === "Sound"}
          onClick={() => setActiveButton("Sound")}
          tabIndex="2"
        >
          Sound
        </Styled.sideButton>
        <Styled.sideButton
          active={activeButton === "Profile"}
          onClick={() => setActiveButton("Profile")}
          tabIndex="2"
        >
          Profile
        </Styled.sideButton>
        <Styled.sideButton
          active={activeButton === "Class"}
          onClick={() => setActiveButton("Class")}
          tabIndex="2"
        >
          Class
        </Styled.sideButton>
      </Styled.SideMenu>
      
      {activeButton === "WiFi" && (<NetworkSettingsPage/>)}

      
    </Styled.SettingsPageContainer>
  );
};

export default SettingsPage;
