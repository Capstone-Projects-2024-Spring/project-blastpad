import React, { useState } from "react";
import { SettingsPageLayout, SideMenu, SideButton, SideButtonIconContainer } from "./styles/Settings.styled";
import NetworkSettingsPage from "./Settings/NetworkSettingsPage";
import ClassroomSettingsPage from "./Settings/ClassroomSettingsPage";
import ProfileSettingsPage from './Settings/ProfileSettingsPage'
import { ClassroomIcon, ProfileIcon, ThemeIcon, WiFiIcon } from './Icons'
import ThemeSettingsPage from "./Settings/ThemeSettingsPage";
import { useTheme } from "styled-components";

const settingsNavIcons = {
  "Wi-Fi": WiFiIcon,
  "Class": ClassroomIcon,
  "Profile": ProfileIcon,
  "Themes": ThemeIcon
}

const SettingsPage = () => {
  const [currentSettingsPage, setCurrentSettingsPage] = useState("Wi-Fi");
  const theme = useTheme();

  return (
    <SettingsPageLayout>
      <SideMenu>
        {Object.keys(settingsNavIcons).map((page) => {
          const Icon = settingsNavIcons[page];
          
          return (<SideButton
          active={currentSettingsPage === page}
          onClick={() => {setCurrentSettingsPage(page)}}
          tabIndex="0">
            <SideButtonIconContainer>
              <Icon color={currentSettingsPage === page ? theme.colors.textActive : theme.colors.text}/>
            </SideButtonIconContainer>
            {page}
          </SideButton>)
        })}
      </SideMenu>
      
      {currentSettingsPage === 'Wi-Fi' && <NetworkSettingsPage/>}
      {currentSettingsPage === 'Class' && <ClassroomSettingsPage/>}
      {currentSettingsPage === 'Profile' && <ProfileSettingsPage/>}
      {currentSettingsPage === 'Themes' && <ThemeSettingsPage />}

    </SettingsPageLayout>
  );
};

export default SettingsPage;
