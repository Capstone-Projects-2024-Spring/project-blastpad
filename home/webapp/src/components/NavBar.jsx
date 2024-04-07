import {ClassroomIcon, CommunityIcon, HomeIcon, SettingsIcon} from "./Icons";
import { ActionButtonsContainer, NavBarContainer, ActionButton, StatusIconsContainer } from "./styles/NavBar.styled";

export default function NavBar() {
  return (
    <NavBarContainer>
      <ActionButtonsContainer>
        <ActionButton>
          <HomeIcon/>
        </ActionButton>
        <ActionButton>
          <CommunityIcon/>
        </ActionButton>
        <ActionButton>
          <ClassroomIcon/>
        </ActionButton>
        <ActionButton>
          <SettingsIcon/>
        </ActionButton>
      </ActionButtonsContainer>
      <StatusIconsContainer>
        
      </StatusIconsContainer>
    </NavBarContainer>
  )
}