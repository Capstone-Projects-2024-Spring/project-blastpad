import styled from "styled-components";

export const SettingsPageContainer = styled.div`
  display: flex; /* Use flexbox to arrange items */
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 20px;
  padding: 0px;
`;

export const SideMenu = styled.div`
  width: 170px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  padding: 0px;
  margin-right: 20px;
  margin-left: 5px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 20px 10px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.active ? `${props.theme.colors.active}` : `${props.theme.colors.foreground}`)};
  color: #ffffff;
  border: ${(props) => (props.active ? "3px solid #ffffff" : "none")};
  border-radius: 5px;
  cursor: pointer;
  font-size: 22px;
  font-family: 'Inter', sans-serif;
`;

export const NetworksListContainer = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0px;
`;

export const NetworksList = styled.ul`
    background-color: ${({ theme }) => theme.colors.foreground};
    border-radius: 20px
`;

export const NetworkButton = styled(Button)`
  margin-bottom: 0;
  width: 90%;
  border-radius: 0px;
  margin-left: 30px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
`;

export const ConnectedNetworkContainer = styled.div`
  display: flex;
  padding-top: 0px;
  align-items: center;
`;

export const ConnectedNetwork = styled.div`
  background-color: ${({ theme }) => theme.colors.active};
  width: 70%;
  color: #39FF14;
  padding: 10px;
  margin-left: 5px;
  border-radius: 5px;
  text-align: center;
  font-family: 'Inter', sans-serif;
  border: 3px solid white;
  font-size: 22px;
  margin-right: 10px;
`;

export const DisconnectButton = styled(Button)`
    background-color: #9c1313;
    width: 150px;
    height: 50px;
    margin-top: 10px;
    line-height: 10px;
    padding-left: 7px;

`;

export const RefreshButton = styled(Button)`
  background-color: #3ebffa;
  width: 10%;
  font-size: 40px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-left: 10px;
  margin-top: 8px;
`
