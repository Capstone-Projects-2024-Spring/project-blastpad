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
  position: relative;
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
  background-color: ${({ theme }) => theme.colors.foreground};
  // outline: 4px solid ${({ theme }) => theme.colors.active};
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
  background-color: ${({ theme }) => theme.colors.foreground};
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
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  padding-top: 50px;
`;

export const GameIconsContainer = styled.div`
// outline: 3px solid blue;

  width: 700px;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  gap: 8px;
  padding-bottom: 300px;

`;

export const GameIcon = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.active};
  background-image: url("${({ imagepath }) => imagepath}");
  background-repeat: no-repeat;
  background-size: contain;
  
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;          /* Firefox */
  image-rendering: -o-crisp-edges;            /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
  -ms-interpolation-mode: nearest-neighbor;

  outline: 5px solid ${({ theme }) => theme.colors.foreground};
  outline-offset: -4px;

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.text};
    outline-offset: -3px;
  }

  flex-grow: 0;
  flex-shrink: 0;
`;


export const PreviewGameIcon = styled(GameIcon)`
  width: 150px;
  height: 150px;
  margin-left: 20px;
  margin-right: 50px;
`

export const GameMetaData = styled.div`
  position: absolute;
  bottom: 0px;
  // outline: 3px solid red;
  height: 283px;
  gap: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.foreground};


  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  & .div1 { grid-area: 1 / 1 / 2 / 2; }
  & .div2 { grid-area: 1 / 2 / 2 / 5; }
  & .div3 { 
    
    grid-area: 5 / 1 / 5 / 5; 
    display: flex;
    flex-direction: row;
  }

    

`;

export const GameActionButtonsContainer = styled.div`
  // outline: 3px solid green;
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-top: 10px;
  height: fit-content;
  margin-right: 20px;
`;

export const GameActionButton = styled.div`
  position: relative;
  width: 200px; 
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.background};

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.textActive};
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
  font-size: 28px;
  font-weight: 600;
`;

export const MetaDataTitle = styled(MetaDataText)`
  font-size: 39px;
  font-weight:700;
`;
