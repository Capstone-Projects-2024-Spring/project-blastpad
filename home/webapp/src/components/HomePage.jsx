// BELOW IS THE CODE THAT DOESN'T USE API POLLING FOR LOADED GAMES. CHANGES METADATA ON GAME FOCUS. 

import { useState, useEffect } from 'react';
import { NewGameIcon, PlayIcon, PencilIcon, UploadIcon, ClassroomIcon, CommunityIcon } from './Icons';
import {
  GalleryContainer, GameIcon, GameInfoContainer, HomePageContainer, GameMetaData,
  GameActionButtonsContainer, GameActionButton, MetaDataText, MetaDataTitle,
  PlayButtonBackgroundColor, PlayButtonForegroundColor, EditButtonBackgroundColor,
  EditButtonForegroundColor, ShareButtonBackgroundColor, ShareButtonForegroundColor, ShareMenu, ShareMenuButton
} from './styles/HomePage.styled';

// List of games with metadata
var gameList = []

export default function HomePage() {
  const [availableGames, setAvailableGames] = useState(gameList);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedGameIndex, setSelectedGameIndex] = useState(null);

  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  

  const shareToCommunity = () => {
    if(selectedGame == null) { return; }

    fetch(`/share/community/${selectedGame.name}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("share complete!")
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetch(`/games/`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setAvailableGames(data.games);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSelectGame = (index) => {
    if(selectedGame != null) {
      availableGames[selectedGameIndex].selected = false;
    }
    availableGames[index].selected = true
    console.log(availableGames);
    setSelectedGame(availableGames[index]);
    setSelectedGameIndex(index);

  };

  const deselectGame = () => {
    if(selectedGame != null) {
      availableGames[selectedGameIndex].selected = false;
    }
    setSelectedGame(null);
    setSelectedGameIndex(null);
  }

  const runGame = () => {
    if(selectedGame == null) { return; }

    fetch(`/run?game=${selectedGame.name}`, {
      method: "GET"
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
  }

  const editGame = () => {
    if(selectedGame == null) { return; }
    window.location.href = `/editor?load=${selectedGame.workspace_filename}&fromHomescreen=true`;
  }

  const newGame = () => {
    window.location.href = `/editor?load=NewGame.json&fromHomescreen=true`;
  }

  return (
    <HomePageContainer>
      <GalleryContainer>
        <GameIcon tabIndex={0} autoFocus id='NewGameIcon' 
          onFocus={() => deselectGame()}
          onClick={() => newGame()}
        >
          <NewGameIcon />
        </GameIcon>
        {console.log(availableGames)}
        {availableGames.map((game, index) => (
          <GameIcon
            key={index}
            tabIndex={0}
            onFocus={() => handleSelectGame(index)}
            imagepath={game.game_icon_path}
            className={game.selected ? "inspecting" : ""}
          />
        ))}
      </GalleryContainer>

      <GameInfoContainer>

        {shareMenuOpen?
            <ShareMenu>
            <ShareMenuButton tabIndex={1}> <ClassroomIcon/> My Classroom </ShareMenuButton>
            <ShareMenuButton tabIndex={1} onClick={()=>shareToCommunity()}> <CommunityIcon/> Community Hub </ShareMenuButton>
            <ShareMenuButton tabIndex={1} onClick={()=>{
              setShareMenuOpen(false);
              document.getElementById("shareButton").focus()
            }}> Nevermind </ShareMenuButton>
          </ShareMenu>
          
        :<></>}


       {selectedGame != null ?
         <>

        <GameMetaData>
            <MetaDataTitle>
              <span>{selectedGame.name}</span>
            </MetaDataTitle>
            <MetaDataText> Author: {selectedGame.metadata[1]["author name"]}</MetaDataText>
            <MetaDataText> Last Updated: {selectedGame.last_updated}</MetaDataText>

            </GameMetaData>


          <GameActionButtonsContainer>
         <GameActionButton 
          tabIndex={0}
          onClick={() => runGame()}
         >
            <PlayButtonForegroundColor>
              <PlayIcon />
            </PlayButtonForegroundColor>
            <PlayButtonBackgroundColor />
          </GameActionButton>

          <GameActionButton 
            tabIndex={0}
            onClick={() => editGame()}
            >
            <EditButtonForegroundColor>
              <PencilIcon />
            </EditButtonForegroundColor>
            <EditButtonBackgroundColor />
          </GameActionButton>

          <GameActionButton
           tabIndex={0}
          onClick={() => setShareMenuOpen(true)}
          id="shareButton"
           >
            <ShareButtonForegroundColor>
              <UploadIcon />
            </ShareButtonForegroundColor>
            <ShareButtonBackgroundColor />
          </GameActionButton>
        </GameActionButtonsContainer>
            </>
          : <></>
        }



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





