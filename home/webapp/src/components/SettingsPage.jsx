import React, { useState } from "react";
import * as Styled from "./styles/Settings.styled";
import NetworkSettingsPage from "./Settings/NetworkSettingsPage";
import ClassroomSettingsPage from "./Settings/ClassroomSettingsPage";

const SettingsPage = () => {
  const [activeButton, setActiveButton] = useState("WiFi");

  return (
    <Styled.SettingsPageLayout>
      <Styled.SideMenu>
        <Styled.sideButton
          active={activeButton === "WiFi"}
          onClick={() => {setActiveButton("WiFi")}}
          tabIndex="0"
        >
          Wi-Fi
        </Styled.sideButton>
        <Styled.sideButton
          active={activeButton === "Sound"}
          onClick={() => setActiveButton("Sound")}
          tabIndex="0"
        >
          Sound
        </Styled.sideButton>
        <Styled.sideButton
          active={activeButton === "Profile"}
          onClick={() => setActiveButton("Profile")}
          tabIndex="0"
        >
          Profile
        </Styled.sideButton>
        <Styled.sideButton
          active={activeButton === "Class"}
          onClick={() => setActiveButton("Class")}
          tabIndex="0"
        >
          Class
        </Styled.sideButton>
      </Styled.SideMenu>
      
      {(activeButton === "WiFi" && (<NetworkSettingsPage/>))
      || (activeButton === "Class" && (<ClassroomSettingsPage/>))}

    </Styled.SettingsPageLayout>
  );
};

export default SettingsPage;
