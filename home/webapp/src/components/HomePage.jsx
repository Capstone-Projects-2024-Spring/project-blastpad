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
var gameList = [
    {
      "game_icon_path": "/icons/BlastPad Team.png",
      "last_updated": "04/28/24",
      "metadata": [
        {
          "game name": "BlastPad Team"
        },
        {
          "author name": "BlastPad Team"
        },
        {
          "description": "This is an example project."
        }
      ],
      "name": "BlastPad Team",
      "raw_last_updated": 1714333963.3623626,
      "workspace_filename": "BlastPad Team.json"
    },
    {
      "game_icon_path": "/icons/eg.png",
      "last_updated": "04/28/24",
      "metadata": [
        {
          "game name": "eg"
        },
        {
          "author name": "BlastPad Team"
        },
        {
          "description": "This is an example project."
        }
      ],
      "name": "eg",
      "raw_last_updated": 1714333833.195093,
      "workspace_filename": "eg.json"
    },
    {
      "game_icon_path": "/icons/Miniban.png",
      "last_updated": "04/28/24",
      "metadata": [
        {
          "game name": "Miniban"
        },
        {
          "author name": "Neil C"
        },
        {
          "description": "Soko Boy in Soko World. Place boxes on all targets to complete a level. Author Par: 379 Steps"
        }
      ],
      "name": "Miniban",
      "raw_last_updated": 1714333530.936699,
      "workspace_filename": "Miniban.json"
    },
    {
      "game_icon_path": "/icons/Multiplayer Tetris.png",
      "last_updated": "04/28/24",
      "metadata": [
        {
          "game name": "Multiplayer Tetris"
        },
        {
          "author name": "Ian Applebaum"
        },
        {
          "description": "MULTIPLAYER TETRIS!"
        }
      ],
      "name": "Multiplayer Tetris",
      "raw_last_updated": 1714328797.151689,
      "workspace_filename": "Multiplayer Tetris.json"
    },
    {
      "game_icon_path": "/icons/Block Dude.png",
      "last_updated": "04/27/24",
      "metadata": [
        {
          "game name": "Block Dude"
        },
        {
          "author name": "Mustafa Malik"
        },
        {
          "description": "Funny calculator game. Get to the door to win!________ Author PB: 01:25.50"
        }
      ],
      "name": "Block Dude",
      "raw_last_updated": 1714260457.4800224,
      "workspace_filename": "Block Dude.json"
    },
    {
      "game_icon_path": "/icons/Golf.png",
      "last_updated": "04/27/24",
      "metadata": [
        {
          "game name": "Golf"
        },
        {
          "author name": "Neil C"
        },
        {
          "description": "It's golf."
        }
      ],
      "name": "Golf",
      "raw_last_updated": 1714260406.310833,
      "workspace_filename": "Golf.json"
    },
    {
      "game_icon_path": "/icons/Multiplayer Tetris 2.png",
      "last_updated": "04/27/24",
      "metadata": [
        {
          "game name": "Multiplayer Tetris 2"
        },
        {
          "author name": "Ian Applebaum"
        },
        {
          "description": "This is an example project."
        }
      ],
      "name": "Multiplayer Tetris 2",
      "raw_last_updated": 1714254842.9828577,
      "workspace_filename": "Multiplayer Tetris 2.json"
    },
    {
      "game_icon_path": "/icons/Brickbreaker.png",
      "last_updated": "04/26/24",
      "metadata": [
        {
          "game name": "brickbreaker"
        },
        {
          "author name": "Niaz Baharudeen"
        },
        {
          "description": "Can't trust saving"
        }
      ],
      "name": "Brickbreaker",
      "raw_last_updated": 1714189681.510625,
      "workspace_filename": "Brickbreaker.json"
    },
    {
      "game_icon_path": "/icons/Snake.png",
      "last_updated": "04/26/24",
      "metadata": [
        {
          "game name": "Snake"
        },
        {
          "author name": "Snarr"
        },
        {
          "description": "This is an example project."
        }
      ],
      "name": "Snake",
      "raw_last_updated": 1714189078.0160055,
      "workspace_filename": "Snake.json"
    },
    {
      "game_icon_path": "/icons/DVD Logo.png",
      "last_updated": "04/26/24",
      "metadata": [
        {
          "game name": "DVD Logo"
        },
        {
          "author name": "Snarr"
        },
        {
          "description": "A DVD logo screen! Wait for it to hit the corner for a surrpise"
        }
      ],
      "name": "DVD Logo",
      "raw_last_updated": 1714188960.9627304,
      "workspace_filename": "DVD Logo.json"
    },
    {
      "game_icon_path": "/icons/Soul Bridge.png",
      "last_updated": "04/26/24",
      "metadata": [
        {
          "game name": "Soul Bridge"
        },
        {
          "author name": "Neil C"
        },
        {
          "description": "This is an example project."
        }
      ],
      "name": "Soul Bridge",
      "raw_last_updated": 1714109231.1237273,
      "workspace_filename": "Soul Bridge.json"
    },
    {
      "game_icon_path": "/icons/Block Dude Colored.png",
      "last_updated": "04/25/24",
      "metadata": [
        {
          "game name": "Block Dude Colored"
        },
        {
          "author name": "Mustafa Malik"
        },
        {
          "description": "Funny calculator game. Get to the door to win!"
        }
      ],
      "name": "Block Dude Colored",
      "raw_last_updated": 1714091164.2478032,
      "workspace_filename": "Block Dude Colored.json"
    },
    {
      "game_icon_path": "/icons/Space Fighterz.png",
      "last_updated": "04/24/24",
      "metadata": [
        {
          "game name": "Space Fighterz"
        },
        {
          "author name": "Neil C"
        },
        {
          "description": "Vanquish your enemies... in SPACE!"
        }
      ],
      "name": "Space Fighterz",
      "raw_last_updated": 1713970548.01735,
      "workspace_filename": "Space Fighterz.json"
    },
    {
      "game_icon_path": "/icons/Miniban copy.png",
      "last_updated": "04/23/24",
      "metadata": [
        {
          "game name": "Miniban"
        },
        {
          "author name": "BlastPad Team"
        },
        {
          "description": "This is an example project."
        }
      ],
      "name": "Miniban copy",
      "raw_last_updated": 1713924507.5857697,
      "workspace_filename": "Miniban copy.json"
    },
    {
      "game_icon_path": "/icons/Layer Test.png",
      "last_updated": "04/23/24",
      "metadata": [
        {
          "game name": "Layer Test"
        },
        {
          "author name": "BlastPad Team"
        },
        {
          "description": "This is an example project."
        }
      ],
      "name": "Layer Test",
      "raw_last_updated": 1713920006.0744035,
      "workspace_filename": "Layer Test.json"
    },
    {
      "game_icon_path": "/icons/Flappy Bird.png",
      "last_updated": "04/22/24",
      "metadata": [
        {
          "game name": "Flappy Bird"
        },
        {
          "author name": "A Cool Guy"
        },
        {
          "description": "This is an example project."
        }
      ],
      "name": "Flappy Bird",
      "raw_last_updated": 1713798511.5179813,
      "workspace_filename": "Flappy Bird.json"
    },
    {
      "game_icon_path": "/icons/Some Example.png",
      "last_updated": "04/22/24",
      "metadata": [
        {
          "game name": "Some Example"
        },
        {
          "author name": "Neil C"
        },
        {
          "description": "Guy Walking Around Simulator"
        }
      ],
      "name": "Some Example",
      "raw_last_updated": 1713762413.0602725,
      "workspace_filename": "Some Example.json"
    }
]

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





