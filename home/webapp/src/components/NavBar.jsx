import React, { useState, useEffect } from 'react';
import { NavButtonsContainer, NavBarContainer, NavButton, StatusIconsContainer, TimeContainer } from "./styles/NavBar.styled";
import { BatteryFrameIcon, ClassroomIcon, CommunityIcon, HomeIcon, SettingsIcon, WiFiIcon, NoSignalIcon } from "./Icons";

const navIcons = {
  home: HomeIcon,
  community: CommunityIcon,
  classroom: ClassroomIcon,
  settings: SettingsIcon,
};

const NavBar = ({ onPageChange, checkConnection }) => {
  const [activePage, setActivePage] = useState('home');
  const [isConnected, setIsConnected] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Function to format time to AM/PM EST format
  // Function to format time to AM/PM EST format without seconds
const formatTime = (date) => {
  return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "America/New_York"
  });
};

  // Function to update the connection status
  const updateConnectionStatus = async () => {
    const status = await checkConnection();
    setIsConnected(status);
  };

  // Function to update the current time
  const updateTime = () => {
    const now = new Date();
    setCurrentTime(formatTime(now));
  };

  // Use useEffect to set up an interval for updating connection status and time
  useEffect(() => {
    const connectionIntervalId = setInterval(updateConnectionStatus, 60000); // Check connection every minute
    const timeIntervalId = setInterval(updateTime, 1000); // Update time every second

    // Clean up intervals when the component unmounts
    return () => {
      clearInterval(connectionIntervalId);
      clearInterval(timeIntervalId);
    };
  }, []);

  // Initial time update on component mount
  useEffect(() => {
    updateTime();
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
        <BatteryFrameIcon />
        {/* Conditionally render WiFiIcon or NoSignalIcon based on isConnected */}
        {isConnected ? <WiFiIcon /> : <NoSignalIcon />}
      </StatusIconsContainer>
      {/* TimeContainer to display current time in top right */}
      <TimeContainer>
        {currentTime}
      </TimeContainer>
    </NavBarContainer>
  );
};

export default NavBar;
