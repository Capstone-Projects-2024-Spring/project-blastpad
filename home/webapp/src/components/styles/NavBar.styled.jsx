import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between; // Ensure children are spaced out
  align-items: center;
  padding: 0px;
  gap: 37px;
`;

export const NavButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 13px;

  width: fit-content;

  flex: none;
  order: 0; // Keep order 0
  flex-grow: 0;
`;

export const NavButton = styled.div`
  background-color: ${({ theme, active }) => (active ? theme.colors.active : theme.colors.foreground)};
  width: 80px;
  height: 80px;
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 15px;

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.text};
    outline-offset: -3px;
  }
`;

export const StatusIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 13px;

  flex: none;
  order: 1; // Keep order 1
  flex-grow: 0;
`;

export const TimeContainer = styled.div`
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  font-size: 44px; 
  margin-left: auto; 
  user-select: none;
`;