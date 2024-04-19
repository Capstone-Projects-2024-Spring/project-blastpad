import { CommunityPageContainer, GameGridContainer, GameIcon, GameIconsContainer, SearchBarContainer, SearchBar,SearchIconContainer, RefreshButton, RefreshButtonContainer} from "./styles/CommunityPage.styled"
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
          <SearchIconContainer tabIndex={2}>
            <SearchIcon/>
          </SearchIconContainer>
        </SearchBar>
        <RefreshButtonContainer>
          <RefreshButton tabIndex={2}>
              <RefreshIcon/>
          </RefreshButton>
        </RefreshButtonContainer>
      </SearchBarContainer>
      <GameGridContainer>
        <GameIconsContainer>
          {gameNames.map((game, index)=>{
            return(
              <GameIcon tabIndex={2}>{game}</GameIcon>
            )
          })}
        </GameIconsContainer>
      </GameGridContainer>
    </CommunityPageContainer>
  )
}