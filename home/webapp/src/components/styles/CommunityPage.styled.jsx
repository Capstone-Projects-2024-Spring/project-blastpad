import styled from "styled-components";

export const CommunityPageContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.foreground};
  padding: 20px;
  gap: 19px;
  justify-content: space-evenly;
  align-items: center;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const GameIcon = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.active};

  outline: 4px solid ${({ theme }) => theme.colors.foreground};
  outline-offset: -4px;

  &:focus {
    outline: none;
    outline-offset: -4px;
  }

  flex-grow: 0;
  flex-shrink: 0;
`;
