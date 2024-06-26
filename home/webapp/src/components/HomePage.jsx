// BELOW IS THE CODE THAT DOESN'T USE API POLLING FOR LOADED GAMES. CHANGES METADATA ON GAME FOCUS. 

import { useState, useEffect, useContext } from 'react';
import { NewGameIcon, PlayIcon, PencilIcon, UploadIcon, ClassroomIcon, CommunityIcon } from './Icons';
import {
  GalleryContainer, GameIcon, GameInfoContainer, HomePageContainer, GameMetaData,
  GameActionButtonsContainer, GameActionButton, MetaDataText, MetaDataTitle,
  PlayButtonBackgroundColor, PlayButtonForegroundColor, EditButtonBackgroundColor,
  EditButtonForegroundColor, ShareButtonBackgroundColor, ShareButtonForegroundColor, 
  ShareMenu, ShareMenuButton, GameLoadingContainer, Loader,
  ShareLoader, Checkmark
} from './styles/HomePage.styled';
import { useTheme } from 'styled-components'
import { AuthContext } from "../AuthContext";

// List of games with metadata
var gameList = []

export default function HomePage() {
  const { classroom } = useContext(AuthContext)

  const [availableGames, setAvailableGames] = useState(gameList);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedGameIndex, setSelectedGameIndex] = useState(null);

  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  
  const [gameLoading, setGameLoading] = useState(false);
  const [gameSharing, setGameSharing] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const theme = useTheme()
  
  const scrollIntoView = (index) => {
    document.getElementById(index).scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
  }

  const shareToCommunity = () => {
    if(selectedGame == null) { return; }
    setGameSharing(true)
    setStatusMessage(`Sharing ${selectedGame.name} to the Community Hub...`)

    fetch(`/share/community/${selectedGame.name}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("share complete!")
        console.log(data);
        setSuccess(true)
        setStatusMessage("Shared Successfully!")
      })
      .catch((error) => {
        console.log(error)
        setStatusMessage(`Could not share to community hub.`)
      })
      .finally(() => {
        setTimeout(() => {setGameSharing(false); setSuccess(false)}, 2500)
      });
  }

  const shareToClassroom = () => {
    if(selectedGame == null || classroom == null) { return; }
    setGameSharing(true)
    setStatusMessage(`Sharing ${selectedGame.name} to ${classroom.title}...`)

    fetch(`/share/classroom/${classroom.id}/${selectedGame.name}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSuccess(true)
        setStatusMessage("Shared Successfully!")
      })
      .catch((error) => {
        console.log(error)
        setStatusMessage(`Could not share to ${classroom.title}`)
      })
      .finally(() => {
        setTimeout(() => {setGameSharing(false); setSuccess(false)}, 2500)
      });
  }

  useEffect(() => {
    fetch(`/games/`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setAvailableGames(data.games);
        console.log(data.games);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSelectGame = (index) => {
    if(index == -1) {
      if(selectedGame != null && selectedGameIndex != -1) {
        availableGames[selectedGameIndex].selected = false;
      }
      setSelectedGameIndex(index);
      return;
    }

    if(selectedGame != null && selectedGameIndex != -1) {
      availableGames[selectedGameIndex].selected = false;
    }
    availableGames[index].selected = true
    setSelectedGame(availableGames[index]);
    setSelectedGameIndex(index);

  };

  const deselectGame = () => {
    if(selectedGame != null && selectedGame != -1) {
      availableGames[selectedGameIndex].selected = false;
    }
    setSelectedGame(null);
    setSelectedGameIndex(null);
  }

  const runGame = () => {
    if(selectedGame == null) { return; }
    setGameLoading(true);
    setStatusMessage(`Launching ${selectedGame.name}...`)

    fetch(`/run?game=${selectedGame.name}`, {
      method: "GET"
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // setStatusMessage("Game ran successfully.");
      setSuccess(true)
    })
    .catch((error) => {
      setStatusMessage(`${selectedGame.name} encountered an error.`)
      setSuccess(false);
      console.log(error)
    })
    .finally(() => {
      setTimeout(() => {setGameLoading(false); setSuccess(false)}, 500)
    });
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
      <GameLoadingContainer className={gameLoading ? '' : 'notActive'}>
        {gameLoading ? 
          <>
            <GameIcon imagepath={selectedGame.game_icon_path}>
              <Loader/>
              <Checkmark className={success ? '' : 'notActive'}/>
            </GameIcon>
            <MetaDataTitle>{statusMessage}</MetaDataTitle>
          </>
          : <></>
        }
      </GameLoadingContainer>

      <GameLoadingContainer className={gameSharing ? '' : 'notActive'}>
        {gameSharing ? 
          <>
            <GameIcon imagepath={selectedGame.game_icon_path}>
              <ShareLoader/>
              <Checkmark className={success ? '' : 'notActive'}/>
            </GameIcon>
            <MetaDataTitle>{statusMessage}</MetaDataTitle>
          </>
          : <></>
        }
      </GameLoadingContainer>


      <GalleryContainer>
        <GameIcon tabIndex={0} 
        autoFocus 
        id='NewGameIcon' 
        onFocus={() => {handleSelectGame(-1); scrollIntoView("NewGameIcon")}}
        onClick={() => newGame()}  
        >
          <NewGameIcon color={theme.colors.textActive}/>
        </GameIcon>
        {availableGames.map((game, index) => (
          <GameIcon
            key={index}
            id={index}
            tabIndex={0}
            onFocus={() => {handleSelectGame(index); scrollIntoView(index)}}
            imagepath={game.game_icon_path}
            className={game.selected ? "inspecting" : ""}
          />
        ))}
      </GalleryContainer>

      <GameInfoContainer>

        {
          shareMenuOpen
          ?
          <ShareMenu>
            {classroom != null?
            <ShareMenuButton tabIndex={1} onClick={()=>shareToClassroom()}> <ClassroomIcon/> My Classroom </ShareMenuButton>
            : <></>}
            <ShareMenuButton tabIndex={1} onClick={()=>shareToCommunity()}> <CommunityIcon/> Community Hub </ShareMenuButton>
            <ShareMenuButton tabIndex={1} onClick={()=>{
              setShareMenuOpen(false);
              document.getElementById("shareButton").focus()
            }}> Nevermind </ShareMenuButton>
          </ShareMenu>
        :
        <></>
        }


        {
          selectedGameIndex == -1
          ?
          <>
            <GameMetaData>
              <MetaDataTitle>
                <span>Create a Game</span>
              </MetaDataTitle>
            </GameMetaData>
          </>
          : <></>
        }

        {
          selectedGame != null && selectedGameIndex != -1
          ? 
          <>
            <GameMetaData>
              <MetaDataTitle>
                <marquee>{selectedGame.name}</marquee>
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
                  <PlayIcon color={theme.colors.text}/>
                </PlayButtonForegroundColor>
                <PlayButtonBackgroundColor />
              </GameActionButton>
              <GameActionButton 
                tabIndex={0}
                onClick={() => editGame()}
              >
                <EditButtonForegroundColor>
                  <PencilIcon color={theme.colors.text}/>
                </EditButtonForegroundColor>
                <EditButtonBackgroundColor />
              </GameActionButton>

              <GameActionButton
                tabIndex={0}
                onClick={() => setShareMenuOpen(true)}
                id="shareButton"
              >
                <ShareButtonForegroundColor>
                  <UploadIcon color={theme.colors.text}/>
                </ShareButtonForegroundColor>
                <ShareButtonBackgroundColor />
              </GameActionButton>
            </GameActionButtonsContainer>
          </>
          : 
          <></>
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





