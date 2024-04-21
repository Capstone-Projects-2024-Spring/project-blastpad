// BELOW IS THE CODE THAT DOESN'T USE API POLLING FOR LOADED GAMES. CHANGES METADATA ON GAME FOCUS. 

import { useState } from 'react';
import { NewGameIcon, PlayIcon, PencilIcon, UploadIcon } from './Icons';
import {
  GalleryContainer, GameIcon, GameInfoContainer, HomePageContainer, GameMetaData,
  GameActionButtonsContainer, GameActionButton, MetaDataText, MetaDataTitle,
  PlayButtonBackgroundColor, PlayButtonForegroundColor, EditButtonBackgroundColor,
  EditButtonForegroundColor, ShareButtonBackgroundColor, ShareButtonForegroundColor,
} from './styles/HomePage.styled';

// List of games with metadata
let gameList = [
  { name: 'Super Mario', author: 'Nintendo', lastUpdated: '1/13/2024' },
  { name: 'Legend of Zelda', author: 'Nintendo', lastUpdated: '2/24/2024' },
  { name: 'Pokemon', author: 'Game Freak', lastUpdated: '12/20/2023' },
  { name: 'FarCry', author: 'Ubisoft', lastUpdated: '11/22/2023' },
  { name: 'Sonic', author: 'SEGA', lastUpdated: '5/29/2023' },
];

export default function HomePage() {
  
  const [selectedGame, setSelectedGame] = useState(gameList[0]);

  const handleSelectGame = (game) => {
    setSelectedGame(game);
  };

  return (
    <HomePageContainer>
      <GalleryContainer>
        <GameIcon tabIndex={0} autoFocus id='NewGameIcon'>
          <NewGameIcon />
        </GameIcon>
        {gameList.map((game, index) => (
          <GameIcon
            key={index}
            tabIndex={0}
            onClick={() => handleSelectGame(game)}
            onFocus={() => handleSelectGame(game)}
          >
            {game.name}
          </GameIcon>
        ))}
      </GalleryContainer>

      <GameInfoContainer>
        <GameMetaData>
          <MetaDataTitle>
            <span>{selectedGame.name}</span>
          </MetaDataTitle>
          <MetaDataText> Author: {selectedGame.author}</MetaDataText>
          <MetaDataText> Last Updated: {selectedGame.lastUpdated}</MetaDataText>
        </GameMetaData>

        <GameActionButtonsContainer>
          <GameActionButton>
            <PlayButtonForegroundColor>
              <PlayIcon />
            </PlayButtonForegroundColor>
            <PlayButtonBackgroundColor />
          </GameActionButton>

          <GameActionButton>
            <EditButtonForegroundColor>
              <PencilIcon />
            </EditButtonForegroundColor>
            <EditButtonBackgroundColor />
          </GameActionButton>

          <GameActionButton>
            <ShareButtonForegroundColor>
              <UploadIcon />
            </ShareButtonForegroundColor>
            <ShareButtonBackgroundColor />
          </GameActionButton>
        </GameActionButtonsContainer>
      </GameInfoContainer>
    </HomePageContainer>
  );
}







// //BELOW IS OLD CODE THAT USES API POLLING FOR LOADED GAMES. DOESN'T CHANGE METADATA ON GAME FOUCS.

// import { useState, useEffect} from 'react'

// import { NewGameIcon, PlayIcon, PencilIcon, UploadIcon } from "./Icons"

// import {GalleryContainer, GameIcon, GameInfoContainer, HomePageContainer, 
//         GameMetaData, GameActionButtonsContainer, GameActionButton, 
//         GameActionButtonBackground, GameActionButtonForeground, 
//         MetaDataText, MetaDataTitle, PlayButtonBackgroundColor, 
//         PlayButtonForegroundColor, EditButtonBackgroundColor, 
//         EditButtonForegroundColor, ShareButtonBackgroundColor, 
//         ShareButtonForegroundColor} from "./styles/HomePage.styled"

// let gameList = ["Super Mario", "Legend of Zelda", "Pokemon", "FarCry", "Sonic"];


// export default function HomePage() {
 
//   const [games, setGames] = useState([])

//   useEffect(() => {
//     fetch(`${import.meta.env.VITE_BASE_URL}/games/`, {
//       method: "GET"
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setGames(data.games);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <HomePageContainer>

//       <GalleryContainer>

//         <GameIcon tabIndex={0} autoFocus id="NewGameIcon">
//           <NewGameIcon/>
//         </GameIcon>

//         {gameList.map((game, index)=>{
//             return(
//               <GameIcon tabIndex={0}>{game}</GameIcon>
//             )

//         })}

        

//       </GalleryContainer>

//       <GameInfoContainer>
//         <GameMetaData>
//             <MetaDataTitle><span>Super Mario</span></MetaDataTitle> 
//             <MetaDataText> Author: </MetaDataText>
//             <MetaDataText> Last Updated: </MetaDataText>

//         </GameMetaData>

//         <GameActionButtonsContainer>
//           <GameActionButton>
//             <PlayButtonForegroundColor>
//               <PlayIcon/>
//             </PlayButtonForegroundColor>

//             <PlayButtonBackgroundColor></PlayButtonBackgroundColor>

//           </GameActionButton>


//           <GameActionButton>
//             <EditButtonForegroundColor>
//               <PencilIcon/>
//             </EditButtonForegroundColor>

//             <EditButtonBackgroundColor></EditButtonBackgroundColor>

//           </GameActionButton>


//           <GameActionButton>
//             <ShareButtonForegroundColor>
//               <UploadIcon/>
//             </ShareButtonForegroundColor>

//             <ShareButtonBackgroundColor></ShareButtonBackgroundColor>

//           </GameActionButton>

//         </GameActionButtonsContainer>

//       </GameInfoContainer>

//     </HomePageContainer>
//   )
// }





