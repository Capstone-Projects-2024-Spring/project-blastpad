import React, { useState } from 'react';
import { NavButtonsContainer, NavBarContainer, NavButton } from "./styles/NavBar.styled";
import { ClassroomIcon, CommunityIcon, HomeIcon, SettingsIcon } from "./Icons";

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
    </NavBarContainer>
  );
};

export default NavBar;
