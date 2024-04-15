import React, { useState } from "react";
import * as Styled from "./styles/Settings.styled";
import NetworkSettingsPage from "./Settings/NetworkSettingsPage";
import ClassroomSettingsPage from "./Settings/ClassroomSettingsPage";

const SettingsPage = () => {
  const [activeButton, setActiveButton] = useState("WiFi");

  return (
    <Styled.SettingsPageContainer>
      <Styled.SideMenu>
        <Styled.Button
          active={activeButton === "WiFi"}
          onClick={() => {setActiveButton("WiFi")}}
          tabIndex="0"
        >
          Wi-Fi
        </Styled.Button>
        {/* Add more buttons as needed */}
        <Styled.Button
          active={activeButton === "Sound"}
          onClick={() => setActiveButton("Sound")}
          tabIndex="0"
        >
          Sound
        </Styled.Button>
        <Styled.Button
          active={activeButton === "Profile"}
          onClick={() => setActiveButton("Profile")}
          tabIndex="0"
        >
          Profile
        </Styled.Button>
        <Styled.Button
          active={activeButton === "Class"}
          onClick={() => setActiveButton("Class")}
          tabIndex="0"
        >
          Class
        </Styled.Button>
      </Styled.SideMenu>
      
      {activeButton === "WiFi" && (<NetworkSettingsPage/>)}

      
    </Styled.SettingsPageContainer>
  );
};

export default SettingsPage;
