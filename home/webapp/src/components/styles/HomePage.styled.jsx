import styled from "styled-components";

export const HomePageContainer = styled.div`
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

export const GalleryContainer = styled.div`
  display: flex;
  gap: 9px;
  // outline: 3px solid red;
  width: 100%;
  overflow: scroll;
  
  &::-webkit-scrollbar {
    display: none;
  }

`;

export const GameIcon = styled.div`
  // outline: 3px solid green;
  width: 165px;
  height: 165px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.active};
  background-image: url("${({ imagepath }) => imagepath}");=
  background-repeat: no-repeat;
  background-size: contain;

  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;          /* Firefox */
  image-rendering: -o-crisp-edges;            /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
  -ms-interpolation-mode: nearest-neighbor;

  outline: 5px solid ${({ theme }) => theme.colors.foreground};
  outline-offset: -4px;

  &:focus, &.inspecting {
    outline: 3px solid ${({ theme }) => theme.colors.text};
    outline-offset: -3px;
    // transform: scale(1.03);
    // transition: transform 0.3s;
  }

  flex-grow: 0;
  flex-shrink: 0;
`;

export const GameInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  // outline: 3px solid yellow;
  gap: 20px;
  align-items: center;
`;

export const GameMetaData = styled.div`
  // outline: 3px solid red;
  width: 50%;
  gap: 10px;
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
  width: 100px; 
  height: 110px;
  border-radius: 15px;

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.text};
    outline-offset: 0px;
    border-radius: 15px;
  }
`;

export const GameActionButtonBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  // transform: translate(5px, 5px); /* Adjust for desired shadow offset */
  z-index: 1;
  border-radius: 15px;
  bottom: 0px;
`;

export const GameActionButtonForeground = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100px;
  // transform: translate(5px, 5px); /* Adjust for desired shadow offset */
  z-index: 2;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  transition: transform 0.1s;

  &:active {
    transform: translateY(3px);
    transition: transform 0.1s;
  }
`;

export const PlayButtonBackgroundColor = styled(GameActionButtonBackground)`
  background-color: ${({ theme }) => theme.colors.playSecondary};
`;

export const PlayButtonForegroundColor = styled(GameActionButtonForeground)`
  background-color: ${({ theme }) => theme.colors.playPrimary};
`;

export const EditButtonBackgroundColor = styled(GameActionButtonBackground)`
  background-color: ${({ theme }) => theme.colors.editSecondary};
`;

export const EditButtonForegroundColor = styled(GameActionButtonForeground)`
  background-color: ${({ theme }) => theme.colors.editPrimary};
`;

export const ShareButtonBackgroundColor = styled(GameActionButtonBackground)`
  background-color: ${({ theme }) => theme.colors.shareSecondary};
`;

export const ShareButtonForegroundColor = styled(GameActionButtonForeground)`
  background-color: ${({ theme }) => theme.colors.sharePrimary};
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