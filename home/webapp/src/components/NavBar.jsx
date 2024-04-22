import React, { useState, useEffect } from 'react';
import { NavButtonsContainer, NavBarContainer, NavButton, StatusIconsContainer, TimeContainer } from "./styles/NavBar.styled";
import { FullBatteryFrameIcon, MediumBatteryFrameIcon, LowBatteryFrameIcon, ClassroomIcon, CommunityIcon, HomeIcon, SettingsIcon, WiFiIcon, NoSignalIcon, DynamicBatteryIcon } from "./Icons";

const navIcons = {
  home: HomeIcon,
  community: CommunityIcon,
  classroom: ClassroomIcon,
  settings: SettingsIcon,
};

const NavBar = ({ onPageChange, checkConnection, checkBatteryLevel }) => {
  const [activePage, setActivePage] = useState('home');
  const [isConnected, setIsConnected] = useState(true);
  const [currentTime, setCurrentTime] = useState("");
  const [batteryLevel, setBatteryLevel] = useState(0.8); // Default battery level

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    });
  };
  
  // Function to update the connection status
  const updateConnectionStatus = async () => {
    const status = await checkConnection();
    setIsConnected(status);
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
    const connectionIntervalId = setInterval(updateConnectionStatus, 60000);
    // Update time every second
    const timeIntervalId = setInterval(updateTime, 1000);
    // Update battery level every 5 minutes
    const batteryLevelIntervalId = setInterval(updateBatteryLevel, 300000);

    // Clean up intervals when the component unmounts
    return () => {
      clearInterval(connectionIntervalId);
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
      <StatusIconsContainer>
        {/* Use renderBatteryIcon to render the correct battery icon */}
        {<DynamicBatteryIcon level={batteryLevel}/>}
        {/* Conditionally render WiFiIcon or NoSignalIcon based on isConnected */}
        {isConnected ? <WiFiIcon /> : <NoSignalIcon />}
        <TimeContainer>
          {currentTime}
        </TimeContainer>
      </StatusIconsContainer>
    </NavBarContainer>
  );
};

export default NavBar;
