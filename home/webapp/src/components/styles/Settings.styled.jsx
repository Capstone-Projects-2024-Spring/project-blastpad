import styled from "styled-components";

export const SettingsPageLayout = styled.div`
  display: flex; /* Use flexbox to arrange items */
  flex-direction: row;
  gap: 13px;
  
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export const SideMenu = styled.div`
  width: 170px;
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

  background-color: ${({active, theme}) => (active ? `${theme.colors.active}` : `${theme.colors.foreground}`)};
  color: ${({active, theme}) => (active ? `${theme.colors.textActive}` : `${theme.colors.text}`)};

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
    background-color: ${({active, theme}) => (active ? `${theme.colors.active}` : `${theme.colors.foreground}`)};
    outline: 3px solid ${({ theme }) => theme.colors.text};
    outline-offset: -3px;
  }
`;

export const SideButtonIconContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SettingsPageContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.foreground};

  border-radius: 20px;

  display: flex;
  flex-grow: 2;
  flex-direction: column;

  gap: 15px;

  padding: 30px;
`;

export const NetworksList = styled.div`
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 20px;
  
  height: 100%;
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
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 26px;
  flex-grow: 1;

  user-select: none;
`;

export const DisconnectButton = styled.div`
  background-color: ${({ theme }) => theme.colors.playPrimary};
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
  background-color: ${({ theme }) => theme.colors.editPrimary};
  font-size: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;

  border-radius: 10px;
`;

export const ClassroomSettingsPageClassroomTitle = styled.div`
  // outline: 2px solid red;
  font-size: 22px;
  text-align: center;
  font-weight: 700;
  line-height: 29.05px;
`;

export const ClassroomSettingsPageMetaData = styled.div`
  // outline: 3px solid green;
  padding: 15px;


`;

export const ClassroomSettingsPageLeaveClassButtonContainer = styled.div`
  // outline: 3px solid yellow;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const ClassroomSettingsPageLeaveClassButton = styled(ClassroomSettingsPageLeaveClassButtonContainer)`
  // outline: 3px solid white;
  text-align: center;
  padding: 4px 14px; 
  font-size: 24px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.playPrimary};
  width: 265px;
  height: 48px;
  user-select: none;
  cursor: pointer;

  
  &:focus {
    background-color: ${({active, theme}) => (active ? `${theme.colors.active}` : `${theme.colors.foreground}`)};
    outline: 3px solid ${({ theme }) => theme.colors.text};
    outline-offset: -3px;
  }
`;



export const CreateClassroomButton = styled.button`
  // outline: 3px solid white;
  text-align: center;
  padding: 4px 14px; 
  font-size: 24px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.playPrimary};
  width: 265px;
  height: 48px;
  user-select: none;
  cursor: pointer;
  grid-column: span 2;
  border: none;

  &:focus {
    background-color: ${({active, theme}) => (active ? `${theme.colors.active}` : `${theme.colors.foreground}`)};
    outline: 3px solid ${({ theme }) => theme.colors.text};
    outline-offset: -3px;
  }
`;
 

export const SearchBarInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  border: none;
  font-size: 24px;
  outline: none;
  textarea:focus, input:focus{
    outline: none;
  }
`;


export const ClassroomSettingsPageFormField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & input {
    width: 100%;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    border: none;
    font-size: 24px;
    outline: none;
    textarea:focus, input:focus{
      outline: none;
    }
`;

export const ClassroomSettingsPageFormContainer = styled.form`
  width: 100%;
  gap: 10px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const TopButtonContainer = styled.div`
  margin-top: -20px;
  display: flex;
  gap: 10px;
`

export const TopButtonInContainer = styled.div`
  width: 100%;
  background-color: ${({active, theme}) => (active ? `${theme.colors.active}` : `${theme.colors.foreground}`)};
  color: ${({active, theme}) => (active ? `${theme.colors.textActive}` : `${theme.colors.text}`)};

  cursor: pointer;
  font-size: 22px;
  font-family: 'Inter', sans-serif;

  box-sizing: border-box;
  border-radius: 9px;

  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 15px;

  gap: 10px;
  outline: 3px solid ${({ theme }) => theme.colors.text};

  &:focus, &:active {
    background-color: ${({active, theme}) => (active ? `${theme.colors.active}` : `${theme.colors.background}`)};
    outline: 3px solid ${({ theme }) => theme.colors.text};
    outline-offset: -3px;
  }
`;


