import { useState, useEffect} from 'react'

import { NewGameIcon, PlayIcon, PencilIcon, UploadIcon } from "./Icons"

import {GalleryContainer, GameIcon, GameInfoContainer, HomePageContainer, 
        GameMetaData, GameActionButtonsContainer, GameActionButton, 
        GameActionButtonBackground, GameActionButtonForeground, 
        MetaDataText, MetaDataTitle, PlayButtonBackgroundColor, 
        PlayButtonForegroundColor, EditButtonBackgroundColor, 
        EditButtonForegroundColor, ShareButtonBackgroundColor, 
        ShareButtonForegroundColor} from "./styles/HomePage.styled"

export default function HomePage() {

  const [games, setGames] = useState([])

  // let gameNames = ["Mario Kart", "Legend of Zelda", "PacMan", "Tetris", "Pokemon"];
  useEffect(() => {
    fetch("http://localhost:5173/games/", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setGames(data.games);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(games)

  return (
    <HomePageContainer>

      <GalleryContainer>

        <GameIcon tabIndex={0} autoFocus id="NewGameIcon">
          <NewGameIcon/>
        </GameIcon>

        {games.map((game, index)=>{
            return(
              <GameIcon tabIndex={0}>{game}</GameIcon>
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
            <PlayButtonForegroundColor>
              <PlayIcon/>
            </PlayButtonForegroundColor>

            <PlayButtonBackgroundColor></PlayButtonBackgroundColor>

          </GameActionButton>


          <GameActionButton>
            <EditButtonForegroundColor>
              <PencilIcon/>
            </EditButtonForegroundColor>

            <EditButtonBackgroundColor></EditButtonBackgroundColor>

          </GameActionButton>


          <GameActionButton>
            <ShareButtonForegroundColor>
              <UploadIcon/>
            </ShareButtonForegroundColor>

            <ShareButtonBackgroundColor></ShareButtonBackgroundColor>

          </GameActionButton>

        </GameActionButtonsContainer>

      </GameInfoContainer>

    </HomePageContainer>
  )
}