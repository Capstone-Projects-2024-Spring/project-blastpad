import React, { useState, useEffect, useContext } from 'react';
import { NavButtonsContainer, NavBarContainer, NavButton, StatusIconsContainer, TimeContainer } from "./styles/NavBar.styled";
import { FullBatteryFrameIcon, MediumBatteryFrameIcon, LowBatteryFrameIcon, ClassroomIcon, CommunityIcon, HomeIcon, SettingsIcon, WiFiIcon, NoSignalIcon, DynamicBatteryIcon } from "./Icons";
import { useTheme } from 'styled-components';

const navIcons = {
  home: HomeIcon,
  community: CommunityIcon,
  classroom: ClassroomIcon,
  settings: SettingsIcon,
};

const wifiPages = ['community', 'classroom'];

const NavBar = ({ onPageChange, checkBatteryLevel }) => {
  const [activePage, setActivePage] = useState('home');
  const [isConnected, setIsConnected] = useState(navigator.onLine);
  const [currentTime, setCurrentTime] = useState("");
  const [batteryLevel, setBatteryLevel] = useState(0.8); // Default battery level
  const theme = useTheme()

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    });
  };
  
  // Function to update the battery level
  const updateBatteryLevel = async () => {
    const level = await checkBatteryLevel();
    setBatteryLevel(level);
  };

  // Function to update the current time
  const updateTime = () => {
    const now = new Date();
    setCurrentTime(formatTime(now).toLowerCase());
  };

  // Use useEffect to set up intervals for updating connection status, time, and battery level
  useEffect(() => {
    // Update connection status every minute

    window.ononline = function() {
      setIsConnected(true);
    }

    window.onoffline = function() {
      setIsConnected(false)
  }

    const timeIntervalId = setInterval(updateTime, 1000);
    // Update battery level every 5 minutes
    const batteryLevelIntervalId = setInterval(updateBatteryLevel, 300000);

    // Clean up intervals when the component unmounts
    return () => {
      clearInterval(timeIntervalId);
      clearInterval(batteryLevelIntervalId);
    };
  }, []);

  useEffect(() => {
    updateTime();
    updateBatteryLevel();
  }, []);

  const handleButtonClick = (page) => {
    setActivePage(page);
    onPageChange(page);
  };

  return (
    <NavBarContainer>
      <NavButtonsContainer>
        {Object.keys(navIcons).map((page) => {
          const Icon = navIcons[page];
          const pageSelectable = !wifiPages.includes(page) || wifiPages.includes(page) && isConnected
          return (
            <NavButton
              key={page}
              active={activePage === page}
              onClick={() => handleButtonClick(page)}
              tabIndex={pageSelectable ? 0 : -1}
              disabled={pageSelectable}
              className={pageSelectable ? "" : 'disabled_nav'}
            >
              <Icon color={activePage === page ? theme.colors.textActive : theme.colors.text}/>
            </NavButton>
          );
        })}
      </NavButtonsContainer>
      <StatusIconsContainer>
        {/* Use renderBatteryIcon to render the correct battery icon */}
        {<DynamicBatteryIcon level={batteryLevel} theme={theme}/>}
        {/* Conditionally render WiFiIcon or NoSignalIcon based on isConnected */}
        {isConnected ? <WiFiIcon color={theme.colors.text}/> : <NoSignalIcon color={theme.colors.text}/>}

        <TimeContainer>
          {currentTime}
        </TimeContainer>
      </StatusIconsContainer>
    </NavBarContainer>
  );
};

export default NavBar;
