import React, { useState, useEffect } from "react";
import * as Styled from "../styles/Settings.styled";

export default function NetworkSettingsPage() {
  const [connectedNetwork, setConnectedNetwork] = useState(null);
  const [wifiNetworks, setWifiNetworks] = useState([]);

  const fetchNetworks = async () => {
    try {
      const response = await fetch("/get_wifi_networks");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

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
      const response = await fetch("/disconnect_wifi", {
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

  const connectNetwork = async (ssid, password) => {
    try {
      const response = await fetch('/connect_to_wifi', {
        method: 'POST',
        body: JSON.stringify({ ssid, password }),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include'
      });

      if (response.ok) {
        console.error("Successfully connected to WiFi")
        return true;
      } else {
        const errorData = await response.json();
        console.error(errorData.error || 'Failed to connect');
        return false;
      }
    } catch (error) {
      console.error('Failed to connect', error);
      return false;
    }
  };

  const handleNetworkConnection = async (ssid) => {
    let success = await connectNetwork(ssid, null);

    while (!success) {
      const password = prompt(`Please enter the password for ${ssid}:`);
      // If the user cancels the prompt or doesn't enter a password, break the loop
      if (password === null || password === '') {
        break;
      }

      // Attempt to connect with the entered password
      success = await connectNetwork(ssid, password);
    }

    fetchNetworks();
  };
  

  const renderWifiContent = () => {
    return (
      <Styled.NetworksList>
        {wifiNetworks.map((network, index) => (
          <Styled.NetworkButton key={index} onDoubleClick={() => handleNetworkConnection(network)} tabIndex="0">{network}</Styled.NetworkButton>
        ))}
      </Styled.NetworksList>
    );
  };

  return (
    <Styled.SettingsPageContainer>
      <Styled.NetworkActionBar>
        <Styled.ConnectedNetwork>
          {connectedNetwork ? 
            (<span>✔ {connectedNetwork}</span>) : 
            (<span>✗ Not Connected</span>)}
        </Styled.ConnectedNetwork>

        <Styled.DisconnectButton onClick={handleDisconnectButtonClick} tabIndex={0}>Disconnect</Styled.DisconnectButton>
        <Styled.RefreshButton onClick={handleRefreshButtonClick} tabIndex={0}>↻</Styled.RefreshButton>
      </Styled.NetworkActionBar>

      {renderWifiContent()}
    </Styled.SettingsPageContainer>
  );
}