import { PreviewGameIcon, MetaDataText, MetaDataTitle, GameActionButton, GameMetaData, CommunityPageContainer, GameGridContainer, GameIcon, GameIconsContainer, SearchBarContainer, SearchBar, SearchIconContainer, SearchBarInput, RefreshButton, RefreshButtonContainer, GameActionButtonsContainer} from "./styles/CommunityPage.styled"
import { SearchIcon, RefreshIcon } from "./Icons";
import { useState, useEffect, useContext } from 'react';
import { useTheme } from "styled-components";
import {
  GameLoadingContainer,
  ShareLoader, Checkmark
} from './styles/HomePage.styled';
import { AuthContext } from "../AuthContext";


var defaultGames = []

export default function ClassroomPage() {
  const { classroom } = useContext(AuthContext)

  const [availableGames, setAvailableGames] = useState(defaultGames);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedGameIndex, setSelectedGameIndex] = useState(null);

  const [success, setSuccess] = useState(false);
  const [gameDownloading, setGameDownloading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const theme = useTheme();

  const downloadFromClassroom = () => {
    if(selectedGame == null) { return; }
    setGameDownloading(true);
    setStatusMessage(`Downloading ${selectedGame.id}`);
    fetch(`/download/classroom/${classroom.id}/${selectedGame.id}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then(() => {
        // console.log(data);
        setSuccess(true);
        setStatusMessage("Download Successful!");
      })
      .catch((error) => {
        console.error(error);
        setStatusMessage("Could not download.");
      })
      .finally(() => {
        setTimeout(() => {setGameDownloading(false); setSuccess(false)}, 2500)
      });
  }


  const getGamesWithTerm = (term) => {
    if(classroom == null) { return; }
    if(term == "") {
      term = "all";
    }
    fetch(`/get/classroom/${classroom.id}/${term}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setAvailableGames(data.games);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getGamesWithTerm("all");
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

  // todo: better5
  if(classroom == null) {
    return(
      <CommunityPageContainer>
            <MetaDataText> 
              Looks like you aren't a member of any classrooms!
            </MetaDataText>

      </CommunityPageContainer>
    )
  }

  return (
    <CommunityPageContainer>
      <GameLoadingContainer className={gameDownloading ? '' : 'notActive'}>
        {gameDownloading ? 
          <>
            <GameIcon imagepath={selectedGame.game_icon_path}>
              <ShareLoader/>
              <Checkmark className={success ? '' : 'notActive'}/>
            </GameIcon>
            <MetaDataTitle> {statusMessage} </MetaDataTitle>
          </>
          : <></>
        }
      </GameLoadingContainer>

      <SearchBarContainer>
        <marquee> {classroom.title} </marquee>
        <SearchBar>
          <SearchIconContainer>
            <SearchIcon color={theme.colors.text}/>
          </SearchIconContainer>
            <SearchBarInput type="text" tabIndex={0} value={searchQuery} onChange={(event)=>{setSearchQuery(event.target.value);}} />
        </SearchBar>
        <RefreshButtonContainer
        onClick={()=>{ getGamesWithTerm(searchQuery)}}
        
        >
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
              onClick={()=>{downloadFromClassroom()}}
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