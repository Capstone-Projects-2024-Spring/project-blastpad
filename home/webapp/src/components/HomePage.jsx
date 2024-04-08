import { NewGameIcon, PlayIcon } from "./Icons"
import { GalleryContainer, GameIcon, GameInfoContainer, HomePageContainer, GameMetaData, GameActionButtonsContainer, GameActionButton, GameActionButtonBackground, GameActionButtonForeground ,MetaDataText, MetaDataTitle} from "./styles/HomePage.styled"

export default function HomePage() {

  let gameNames = ["Mario Kart", "Legend of Zelda", "PacMan", "Tetris", "Pokemon"];

  return (
    <HomePageContainer>

      <GalleryContainer>

        <GameIcon tabIndex={2}>
          <NewGameIcon />
        </GameIcon>

        {gameNames.map((game, index)=>{
            return(
              <GameIcon tabIndex={2}>{game}</GameIcon>
            )

        })}

  

      </GalleryContainer>

      <GameInfoContainer>
        <GameMetaData>
            <MetaDataTitle><span>Super Mario</span></MetaDataTitle> 
            <MetaDataText> Author: </MetaDataText>
            <MetaDataText> Last Updated: </MetaDataText>

        </GameMetaData>

        <GameActionButtonsContainer>
          <GameActionButton>
            <GameActionButtonForeground>
              <PlayIcon/>
            </GameActionButtonForeground>

            <GameActionButtonBackground></GameActionButtonBackground>

          </GameActionButton>

        </GameActionButtonsContainer>

      </GameInfoContainer>

    </HomePageContainer>
  )
}