import { CommunityPageContainer, GameGridContainer, GameIcon, GameIconsContainer, SearchBarContainer, SearchBar, SearchIconContainer, SearchBarInput, RefreshButton, RefreshButtonContainer} from "./styles/CommunityPage.styled"
import { SearchIcon, RefreshIcon } from "./Icons";

export default function CommunityPage() {
  let gameNames = []
  for(let i=0; i < 40; i++){
    gameNames.push(`Game ${i}`);
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
          {gameNames.map((game, index)=>{
            return(
              <GameIcon tabIndex={0}>{game}</GameIcon>
            )
          })}
        </GameIconsContainer>
      </GameGridContainer>
    </CommunityPageContainer>
  )
}