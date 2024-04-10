import React, { useState, useEffect } from "react";
import * as Styled from "../styles/Settings.styled";

export default function NetworkSettingsPage() {
  const [connectedNetwork, setConnectedNetwork] = useState(null);
  const [wifiNetworks, setWifiNetworks] = useState([]);

  const fetchNetworks = async () => {
    try {
      const response = await fetch("http://localhost:5000/get_wifi_networks");
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

  const handleDisconnectButtonClick = async () => {
    try {
      const response = await fetch("http://localhost:5000/disconnect_wifi", {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Disconnect request failed");
      }
      await fetchNetworks(); // Refresh networks after successful disconnection
    } catch (error) {
      console.error("Error disconnecting from network:", error);
    }
  };

  const handleRefreshButtonClick = async () => {
    fetchNetworks();
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
          {connectedNetwork ? 
            (<span style={{ color: '#39FF14' }}>✔ {connectedNetwork}</span>) : 
            (<span style={{ color: '#E44a4a' }}>❌ Not Connected</span>)}
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
