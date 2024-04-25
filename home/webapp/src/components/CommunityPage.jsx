import { PreviewGameIcon, MetaDataText, MetaDataTitle, GameActionButton, GameMetaData, CommunityPageContainer, GameGridContainer, GameIcon, GameIconsContainer, SearchBarContainer, SearchBar, SearchIconContainer, SearchBarInput, RefreshButton, RefreshButtonContainer, GameActionButtonsContainer} from "./styles/CommunityPage.styled"
import { SearchIcon, RefreshIcon } from "./Icons";
import { useState, useEffect } from 'react';
import { useTheme } from "styled-components";

var defaultGames = []

export default function CommunityPage() {
  // let gameNames = []
  // for(let i=0; i < 40; i++){
  //   gameNames.push(`Game ${i}`);
  // }


  const [availableGames, setAvailableGames] = useState(defaultGames);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedGameIndex, setSelectedGameIndex] = useState(null);

  const theme = useTheme();

  const downloadFromCommunity = () => {
    if(selectedGame == null) { return; }

    fetch(`/download/community/${selectedGame.id}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("download complete!")
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

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


  const scrollIntoView = (index) => {
    document.getElementById(index).scrollIntoView(true)
  }
  const handleSelectGame = (index) => {
    if(selectedGame != null) {
      availableGames[selectedGameIndex].selected = false;
    }
    availableGames[index].selected = true
    setSelectedGame(availableGames[index]);
    setSelectedGameIndex(index);

    document.getElementById("backbutton").focus()
  };

  const deselectGame = () => {
    if(selectedGame != null) {
      document.getElementById(selectedGameIndex).focus()
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
            <SearchIcon color={theme.colors.text}/>
          </SearchIconContainer>
            <SearchBarInput type="text" tabIndex={0}/>
        </SearchBar>
        <RefreshButtonContainer>
          <RefreshButton tabIndex={0}>
              <RefreshIcon color={theme.colors.text}/>
          </RefreshButton>
        </RefreshButtonContainer>
      </SearchBarContainer>
      
      <GameGridContainer>
        <GameIconsContainer>
          {availableGames.map((game, index) => (
            <GameIcon
              key={index}
              id={index}
              tabIndex={0}
              onClick={() => handleSelectGame(index)}
              // onBlur={() => deselectGame()}
              onFocus={()=> scrollIntoView(index)}
              imagepath={game.game_icon_path}
              className={game.selected ? "inspecting" : ""}
            />
          ))}
        </GameIconsContainer>
      </GameGridContainer>

      {selectedGame != null ?
          <GameMetaData>
            <div className="div1">
            <PreviewGameIcon
              imagepath={selectedGame.game_icon_path}
            />
            </div>

            <div className="div2">
              <MetaDataText> {selectedGame["description"]}</MetaDataText>
            </div>


            <div className="div3">

            <GameActionButtonsContainer>
            <GameActionButton 
              tabIndex={1}
              onClick={()=>{downloadFromCommunity()}}
            >
              <h2> Download </h2>

            </GameActionButton>
            
            <GameActionButton 
              tabIndex={1}
              id={"backbutton"}
              autoFocus={true}
              onClick={()=>deselectGame()}
            >
              <h2> Back </h2>
            </GameActionButton>
            </GameActionButtonsContainer>

            <div>
            <MetaDataTitle>
            <span>{selectedGame.id}</span>
            </MetaDataTitle>
            <MetaDataText> Author: {selectedGame["author"]}</MetaDataText>
            <MetaDataText> Last Updated: {selectedGame.uploaded.replace(/(\d{4})-(\d{2})-(\d{2})/, '$2/$3/$1')} </MetaDataText>
           </div>
           
            </div>
          </GameMetaData>
          : <></>
        }
    </CommunityPageContainer>
  )
}