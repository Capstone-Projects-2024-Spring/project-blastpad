import { CommunityPageContainer, GameGridContainer, GameIcon, GameIconsContainer, SearchBarContainer, SearchIconContainer } from "./styles/CommunityPage.styled"
import { SearchIcon } from "./Icons";

export default function CommunityPage() {
  let gameNames = []
  for(let i=0; i < 40; i++){
    gameNames.push(`Game ${i}`);
  }
  return (
    <CommunityPageContainer>
      <SearchBarContainer>
        <SearchIconContainer tabIndex={2}>
          <SearchIcon></SearchIcon>
        </SearchIconContainer>
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