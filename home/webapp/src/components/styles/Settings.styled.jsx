import styled from "styled-components";

export const SettingsPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 13px;
  
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 20px;
  font-family: 'Inter', sans-serif;
`;

export const SideMenu = styled.div`
  width: 170px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  padding: 0px;

  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 10px;
`;

export const SideButton = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${(props) => (props.active ? `${props.theme.colors.active}` : `${props.theme.colors.foreground}`)};
  color: #ffffff;
  
  cursor: pointer;
  font-size: 22px;
  font-family: 'Inter', sans-serif;

  box-sizing: border-box;
  border-radius: 9px;

  display: flex;
  justify-content: start;
  align-items: center;

  padding: 15px;

  gap: 10px;

  &:focus {
    outline: ${(props) => "4px solid #ffffff"};
    outline-offset: -4px;
  }
`;

export const NetworkSettingsPageContainer = styled.div`
  height: 340px;
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-grow: 2;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  overflow: scroll-y;
`;

export const NetworksList = styled.div`
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 20px;
  height: 300px;
  width: 100%;
  overflow-y: scroll;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NetworkButton = styled.div`
  height: 19%;
  width: 90%;
  padding: 24px;

  margin-bottom: 5px;
  margin: 0;

  /* Set the borders */
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  border-left: none;
  border-right: none;
  border-radius: 1px; 

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 22px;

  cursor: pointer;
`;

export const NetworkActionBar = styled.div`
  display: flex;
  height: 80px;
  gap: 10px;
`;

export const ConnectedNetwork = styled.div`
  background-color: ${({ theme }) => theme.colors.active};
  color: #39FF14;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 3px solid white;
  font-size: 26px;
  flex-grow: 1;
`;

export const DisconnectButton = styled.div`
  background-color: #9c1313;
  width: 150px;
  cursor: pointer;
  font-size: 25px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  padding-left: 0px;

  border-radius: 10px;
`;


export const RefreshButton = styled.div`
  background-color: #3ebffa;
  font-size: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;

  border-radius: 10px;
`;
