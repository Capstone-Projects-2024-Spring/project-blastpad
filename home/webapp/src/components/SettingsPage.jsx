import React, { useState } from "react";
import { SettingsPageLayout, SideMenu, SideButton, SideButtonIconContainer } from "./styles/Settings.styled";
import NetworkSettingsPage from "./Settings/NetworkSettingsPage";
import ClassroomSettingsPage from "./Settings/ClassroomSettingsPage";
import ProfileSettingsPage from './Settings/ProfileSettingsPage'
import { ClassroomIcon, ProfileIcon, SensorsIcon } from './Icons'

const SettingsPage = () => {
  const [currentSettingsPage, setCurrentSettingsPage] = useState("WiFi");

  return (
    <Styled.SettingsPageContainer>
      <SideMenu>
        <SideButton
          active={activeButton === "WiFi"}
          onClick={() => {setActiveButton("WiFi")}}
          tabIndex="0"
        >
          Wi-Fi
        </SideButton>
        <SideButton
          active={currentSettingsPage === "Class"}
          onClick={() => setCurrentSettingsPage("Class")}
          tabIndex="0"
        >
          <SideButtonIconContainer>
            <ClassroomIcon />
          </SideButtonIconContainer>
          Class
        </SideButton>
        <SideButton
          active={currentSettingsPage === "Profile"}
          onClick={() => setCurrentSettingsPage("Profile")}
          tabIndex="0"
        >
          <SideButtonIconContainer>
            <ProfileIcon />
          </SideButtonIconContainer>
          Profile
        </SideButton>
        <SideButton
          active={currentSettingsPage === "Sensors"}
          onClick={() => setCurrentSettingsPage("Sensors")}
          tabIndex="0"
        >
        <SideButtonIconContainer>
          <SensorsIcon />
        </SideButtonIconContainer>
          Sensors
        </SideButton>
      </SideMenu>
      
      {activeButton === "WiFi" && (<NetworkSettingsPage/>)}
      {activeButton === "Profile" && (<ProfileSettingsPage/>)}

    </Styled.SettingsPageContainer>
  );
};

export default SettingsPage;
