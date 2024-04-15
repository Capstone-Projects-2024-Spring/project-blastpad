import React, { useState } from "react";
import * as Styled from "../styles/Settings.styled";

export default function NetworkSettingsPage() {
  let currentNetwork = "Applebaum's Network";
  let networksList = ["tusecurewireless", "eduroam", "Stacy's iPhone", "xfinitywifi"];
  const [connectedNetwork, setConnectedNetwork] = useState("✔ "+currentNetwork);
  const [wifiNetworks, setWifiNetworks] = useState(networksList);

  const handleDisconnectButtonClick = () => {
    // Implement connect/disconnect logic here
  };

  const handleRefreshButtonClick = () => {
    // Implement refresh logic here
  };

  const renderWifiContent = () => {
    return (
      <Styled.NetworksList>
        {wifiNetworks.map((network, index) => (
            <Styled.NetworkButton>{network}</Styled.NetworkButton>
        ))}
      </Styled.NetworksList>
    );
  };

  return (<Styled.SettingsPageContainer>
    <Styled.NetworkActionBar>
      <Styled.ConnectedNetwork>{connectedNetwork}</Styled.ConnectedNetwork>
      <Styled.DisconnectButton onClick={handleDisconnectButtonClick}>
        Disconnect
      </Styled.DisconnectButton>
      <Styled.RefreshButton onClick={handleRefreshButtonClick}>
        ↻
      </Styled.RefreshButton>
    </Styled.NetworkActionBar>
    {renderWifiContent()}
  </Styled.SettingsPageContainer>)
}