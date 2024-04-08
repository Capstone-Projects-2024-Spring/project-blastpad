import styled from "styled-components";

export const CommunityPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.foreground};
  padding: 20px;
  gap: 9px
`;

export const GameIcon = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100px;
  height: 100px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  
  outline: 4px solid ${({ theme }) => theme.colors.foreground};
  outline-offset: -4px;
  &:focus {
    outline: none;
    outline-offset: -4px;
  }
`;
