import React, { useState } from 'react';
import { NavButtonsContainer, NavBarContainer, NavButton, StatusIconsContainer } from "./styles/NavBar.styled";
import { BatteryFrameIcon, ClassroomIcon, CommunityIcon, HomeIcon, SettingsIcon, WiFiIcon,   } from "./Icons";

const navIcons = {
  home: HomeIcon,
  community: CommunityIcon,
  classroom: ClassroomIcon,
  settings: SettingsIcon,

};

const NavBar = ({ onPageChange }) => {
  const [activePage, setActivePage] = useState('home');

  const handleButtonClick = (page) => {
    setActivePage(page);
    onPageChange(page);
  };

  return (
    <NavBarContainer>
      <NavButtonsContainer>
        {Object.keys(navIcons).map((page) => {
          const Icon = navIcons[page];
          return (
            <NavButton
              key={page}
              active={activePage === page}
              onClick={() => handleButtonClick(page)}
              tabIndex={0}
            >
              <Icon />
            </NavButton>
          );
        })}
      </NavButtonsContainer>
      {/* StatusIconsContainer can be added here */}
      <StatusIconsContainer>
        <BatteryFrameIcon>
        </BatteryFrameIcon>
        <WiFiIcon>
        </WiFiIcon>
      </StatusIconsContainer>
    </NavBarContainer>
  );
};

export default NavBar;
