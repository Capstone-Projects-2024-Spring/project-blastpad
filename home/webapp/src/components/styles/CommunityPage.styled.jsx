import styled from "styled-components";

export const CommunityPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;
`;

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 10%;
  padding: 0px 5px;
`;

export const SearchBar = styled.div`
  width: 90%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  outline: 4px solid ${({ theme }) => theme.colors.foreground};
  outline-offset: -4px;
  border-radius: 40px;
  display: flex;
  padding: 25px 20px;
  justify-content: start;
  align-items: center;
`;

export const SearchIconContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.text};
    outline-offset: -3px;
  }
`;

export const GameGridContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 20px;
  padding: 20px 5px;
  display: flex;
  overflow: hidden;
  justify-content: center;
`;

export const GameIconsContainer = styled.div`
  width: 700px;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  gap: 8px;
`;

export const GameIcon = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};

  outline: 5px solid ${({ theme }) => theme.colors.foreground};
  outline-offset: -4px;

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.text};
    outline-offset: -3px;
  }

  flex-grow: 0;
  flex-shrink: 0;
`;
