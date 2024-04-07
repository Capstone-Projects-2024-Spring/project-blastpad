import {ClassroomIcon, CommunityIcon, HomeIcon, SettingsIcon} from "./Icons";
import { NavButtonsContainer, NavBarContainer, NavButton, StatusIconsContainer } from "./styles/NavBar.styled";

export default function NavBar() {
  return (
    <NavBarContainer>
      <NavButtonsContainer>
        <NavButton tabIndex={1}>
          <HomeIcon/>
        </NavButton>
        <NavButton tabIndex={2}>
          <CommunityIcon/>
        </NavButton>
        <NavButton tabIndex={3}>
          <ClassroomIcon/>
        </NavButton>
        <NavButton tabIndex={4}>
          <SettingsIcon/>
        </NavButton>
      </NavButtonsContainer>
      <StatusIconsContainer>
        
      </StatusIconsContainer>
    </NavBarContainer>
  )
}