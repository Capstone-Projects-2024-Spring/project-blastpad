import React, { useState } from "react";
import * as Styled from "./styles/Settings.styled";

const SettingsPage = () => {
  let currentNetwork = "Applebaum's Network";
  let networksList = ["tusecurewireless", "eduroam", "Stacy's iPhone", "xfinitywifi"]
  const [activeButton, setActiveButton] = useState("WiFi");
  const [connectedNetwork, setConnectedNetwork] = useState("✔ "+currentNetwork);
  const [wifiNetworks, setWifiNetworks] = useState(networksList);

  const handleWifiButtonClick = () => {
    setActiveButton("WiFi");
    // Fetch or update the list of WiFi networks here
  };

  const handleDisconnectButtonClick = () => {
    // Implement connect/disconnect logic here
  };

  const handleRefreshButtonClick = () => {
    // Implement refresh logic here
  };

  const renderWifiContent = () => {
    return (
      <div>
        <Styled.NetworksList>
          {wifiNetworks.map((network, index) => (
              <Styled.NetworkButton>{network}</Styled.NetworkButton>
          ))}
        </Styled.NetworksList>
      </div>
    );
  };

  return (
    <Styled.SettingsPageContainer>
      <Styled.SideMenu>
        <Styled.Button
          active={activeButton === "WiFi"}
          onClick={handleWifiButtonClick}
          tabIndex="2"
        >
          Wi-Fi
        </Styled.Button>
        {/* Add more buttons as needed */}
        <Styled.Button
          active={activeButton === "Sound"}
          onClick={() => setActiveButton("Sound")}
          tabIndex="2"
        >
          Sound
        </Styled.Button>
        <Styled.Button
          active={activeButton === "Profile"}
          onClick={() => setActiveButton("Profile")}
          tabIndex="2"
        >
          Profile
        </Styled.Button>
        <Styled.Button
          active={activeButton === "Class"}
          onClick={() => setActiveButton("Class")}
          tabIndex="2"
        >
          Class
        </Styled.Button>
      </Styled.SideMenu>
      
      {activeButton === "WiFi" && (
        <Styled.NetworksListContainer>
          <Styled.ConnectedNetworkContainer>
            <Styled.ConnectedNetwork>{connectedNetwork}</Styled.ConnectedNetwork>
            <Styled.DisconnectButton onClick={handleDisconnectButtonClick}>
              Disconnect
            </Styled.DisconnectButton>
            <Styled.RefreshButton onClick={handleRefreshButtonClick}>
              ↻
            </Styled.RefreshButton>
          </Styled.ConnectedNetworkContainer>
          {renderWifiContent()}
        </Styled.NetworksListContainer>
      )}

      
    </Styled.SettingsPageContainer>
  );
};

export default SettingsPage;
