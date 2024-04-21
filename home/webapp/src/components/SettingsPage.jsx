import React, { useState } from "react";
import { SettingsPageLayout, SideMenu, SideButton, SideButtonIconContainer } from "./styles/Settings.styled";
import NetworkSettingsPage from "./Settings/NetworkSettingsPage";
import ClassroomSettingsPage from "./Settings/ClassroomSettingsPage";
import ProfileSettingsPage from './Settings/ProfileSettingsPage'
import { ClassroomIcon, ProfileIcon, SensorsIcon } from './Icons'

const SettingsPage = () => {
  const [currentSettingsPage, setCurrentSettingsPage] = useState("Wi-Fi");

  return (
    <SettingsPageLayout>
      <SideMenu>
        <SideButton
          active={currentSettingsPage === "Wi-Fi"}
          onClick={() => {setCurrentSettingsPage("Wi-Fi")}}
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
      
      {currentSettingsPage === 'Wi-Fi' && <NetworkSettingsPage/>}
      {currentSettingsPage === 'Class' && <ClassroomSettingsPage/>}
      {currentSettingsPage === 'Profile' && <ProfileSettingsPage/>}
      {/* {currentSettingsPage === 'Sensors' && <SettingsPage />} */}

    </SettingsPageLayout>
  );
};

export default SettingsPage;
