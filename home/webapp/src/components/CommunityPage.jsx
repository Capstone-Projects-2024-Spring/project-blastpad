import { CommunityPageContainer, GameIcon, GameIconsContainer } from "./styles/CommunityPage.styled"

export default function CommunityPage() {
  let gameNames = []
  for(let i=0; i < 40; i++){
    gameNames.push(`Game ${i}`);
  }

  return (
    <CommunityPageContainer>
      <GameIconsContainer>
        {gameNames.map((game, index)=>{
          return(
            <GameIcon tabIndex={2}>{game}</GameIcon>
          )
        })}
      </GameIconsContainer>
    </CommunityPageContainer>
  )
}