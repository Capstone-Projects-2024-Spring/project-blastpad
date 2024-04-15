import styled from "styled-components";

export const CommunityPageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 20px;
  padding: 17px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 20px;
`;

export const GameIcon = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.active};

  outline: 5px solid ${({ theme }) => theme.colors.foreground};
  outline-offset: -4px;

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.text};
    outline-offset: -3px;
  }

  flex-grow: 0;
  flex-shrink: 0;
`;
