import React, { useState } from "react";
import * as Styled from "./styles/Settings.styled";
import NetworkSettingsPage from "./Settings/NetworkSettingsPage";
import ClassroomSettingsPage from "./Settings/ClassroomSettingsPage";
import ProfileSettingsPage from './Settings/ProfileSettingsPage'

const SettingsPage = () => {
  const [currentSettingsPage, setCurrentSettingsPage] = useState("WiFi");

  return (
    <Styled.SettingsPageLayout>
      <Styled.SideMenu>
        <Styled.sideButton
          active={currentSettingsPage === "Wi-Fi"}
          onClick={() => {setCurrentSettingsPage("Wi-Fi")}}
          tabIndex="0"
        >
          Wi-Fi
        </Styled.sideButton>
        <Styled.sideButton
          active={currentSettingsPage === "My Class"}
          onClick={() => setCurrentSettingsPage("My Class")}
          tabIndex="0"
        >
          My Class
        </Styled.sideButton>
        <Styled.sideButton
          active={currentSettingsPage === "Profile"}
          onClick={() => setCurrentSettingsPage("Profile")}
          tabIndex="0"
        >
          Profile
        </Styled.sideButton>
        <Styled.sideButton
          active={currentSettingsPage === "Sensors"}
          onClick={() => setCurrentSettingsPage("Sensors")}
          tabIndex="0"
        >
          Sensors
        </Styled.sideButton>
      </Styled.SideMenu>
      
      {currentSettingsPage === 'Wi-Fi' && <NetworkSettingsPage/>}
      {currentSettingsPage === 'My Class' && <ClassroomSettingsPage/>}
      {currentSettingsPage === 'Profile' && <ProfileSettingsPage/>}
      {/* {currentSettingsPage === 'Sensors' && <SettingsPage />} */}

    </Styled.SettingsPageLayout>
  );
};

export default SettingsPage;
