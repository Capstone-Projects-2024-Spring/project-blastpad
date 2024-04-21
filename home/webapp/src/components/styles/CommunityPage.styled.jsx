import styled from "styled-components";

export const CommunityPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
`;

export const SearchBar = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  outline: 4px solid ${({ theme }) => theme.colors.foreground};
  outline-offset: -4px;
  border-radius: 40px;
  display: flex;
  padding: 5px 20px;
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

export const SearchBarInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  font-size: 24px;
  outline: none;
  textarea:focus, input:focus{
    outline: none;
  }
`;

export const RefreshButtonContainer = styled.div`
  width: 7%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

export const RefreshButton = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.foreground};
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.text};
    outline-offset: -2px;
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
// outline: 3px solid blue;

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
  background-color: ${({ theme }) => theme.colors.background};\
  background-image: url("${({ imagepath }) => imagepath}");
  background-repeat: no-repeat;
  background-size: contain;
  
  outline: 5px solid ${({ theme }) => theme.colors.foreground};
  outline-offset: -4px;

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.text};
    outline-offset: -3px;
  }

  flex-grow: 0;
  flex-shrink: 0;
`;

export const GameInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  position: relative;
`;


export const GameMetaData = styled.div`
  // outline: 3px solid red;
  width: 100%;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const GameActionButtonsContainer = styled.div`
  // outline: 3px solid green;
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: fit-content;
`;

export const GameActionButton = styled.div`
  position: relative;
  width: 100%; 
  height: 90px;
  border-radius: 15px;
  background-color: red;
  
  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.text};
    outline-offset: 0px;
    border-radius: 15px;
  }

  &.active div {
    transform: translateY(3px);
    transition: transform 0.1s;
  }
`;

export const MetaDataText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};
  font-size: 28px;
  font-weight: 600;
`;

export const MetaDataTitle = styled(MetaDataText)`
  font-size: 39px;
  font-weight:700;
`;
