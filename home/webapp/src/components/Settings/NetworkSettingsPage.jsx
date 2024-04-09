import React, { useState, useEffect } from "react";
import * as Styled from "../styles/Settings.styled";

export default function NetworkSettingsPage() {
  const [connectedNetwork, setConnectedNetwork] = useState(null);
  const [wifiNetworks, setWifiNetworks] = useState([]);

  const fetchNetworks = async () => {
    try {
      const response = await fetch("/get_networks");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Received data from server:", data); // Add this line
      setConnectedNetwork(data.connected_network);
      setWifiNetworks(data.available_networks);
    } catch (error) {
      console.error("Error fetching networks:", error);
    }
  };
  

  useEffect(() => {
    fetchNetworks();
  }, []); // Fetch networks on component mount

  const handleDisconnectButtonClick = () => {
    // Implement connect/disconnect logic here
  };

  const handleRefreshButtonClick = async () => {
    try {
      const response = await fetch("/get_networks");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.text();
      console.log("Response from server:", responseData);
    } catch (error) {
      console.error("Error fetching networks:", error);
    }
  };
  

  const renderWifiContent = () => {
    return (
      <Styled.NetworksList>
        {wifiNetworks.map((network, index) => (
          <Styled.NetworkButton key={index}>{network}</Styled.NetworkButton>
        ))}
      </Styled.NetworksList>
    );
  };

  return (
    <Styled.NetworkSettingsPageContainer>
      <Styled.NetworkActionBar>
        <Styled.ConnectedNetwork>
          {connectedNetwork ? `✔ ${connectedNetwork}` : "Not connected"}
        </Styled.ConnectedNetwork>
        <Styled.DisconnectButton onClick={handleDisconnectButtonClick}>
          Disconnect
        </Styled.DisconnectButton>
        <Styled.RefreshButton onClick={handleRefreshButtonClick}>
          ↻
        </Styled.RefreshButton>
      </Styled.NetworkActionBar>
      {renderWifiContent()}
    </Styled.NetworkSettingsPageContainer>
  );
}