import { PlayButtonBackgroundColor, PlayButtonForegroundColor, MetaDataText, MetaDataTitle, GameActionButton, GameActionButtonsContainer, GameMetaData, CommunityPageContainer, GameGridContainer, GameIcon, GameIconsContainer, SearchBarContainer, SearchBar, SearchIconContainer, SearchBarInput, RefreshButton, RefreshButtonContainer} from "./styles/CommunityPage.styled"
import { SearchIcon, RefreshIcon, NewGameIcon } from "./Icons";
import { useState, useEffect } from 'react';


var defaultGames = [
  {
    "author": "A Cool Guy",
    "description": "This is an example project.",
    "game_icon_path": "https://klexzeldnyavipasmvvl.supabase.co/storage/v1/object/public/images/Flappy Bird.png",
    "id": "Flappy Bird",
    "uploaded": "2024-04-21",
    "selected": false
  }
]

export default function CommunityPage() {
  // let gameNames = []
  // for(let i=0; i < 40; i++){
  //   gameNames.push(`Game ${i}`);
  // }

  const [availableGames, setAvailableGames] = useState(defaultGames);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedGameIndex, setSelectedGameIndex] = useState(null);

  useEffect(() => {
    fetch(`/get/community/`, {
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

  return (
    <CommunityPageContainer>
      <SearchBarContainer>
        <SearchBar>
          <SearchIconContainer tabIndex={0}>
            <SearchIcon/>
          </SearchIconContainer>
            <SearchBarInput type="text" tabIndex={0}/>
        </SearchBar>
        <RefreshButtonContainer>
          <RefreshButton tabIndex={0}>
              <RefreshIcon/>
          </RefreshButton>
        </RefreshButtonContainer>
      </SearchBarContainer>
      
      <GameGridContainer>
        <GameIconsContainer>
          {availableGames.map((game, index) => (
            <GameIcon
              key={index}
              tabIndex={0}
              onClick={() => handleSelectGame(index)}
              // onBlur={() => deselectGame()}
              imagepath={game.game_icon_path}
              className={game.selected ? "inspecting" : ""}
            />
          ))}
        </GameIconsContainer>
          

        {selectedGame != null ?
          <GameMetaData>
            <MetaDataTitle>
            <span>{selectedGame.id}</span>
            </MetaDataTitle>
            <MetaDataText> Author: {selectedGame["author"]}</MetaDataText>
            <MetaDataText> Last Updated: {selectedGame.uploaded.replace(/(\d{4})-(\d{2})-(\d{2})/, '$2/$3/$1')} </MetaDataText>

            <GameActionButton 
              tabIndex={0}
              // onClick={(}
            >
              <NewGameIcon/>
              <h2> Download </h2>
            </GameActionButton>
            
          </GameMetaData>
          :
          <GameMetaData/>
          
        }

      </GameGridContainer>
    </CommunityPageContainer>
  )
}