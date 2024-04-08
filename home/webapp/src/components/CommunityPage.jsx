import { CommunityPageContainer, GameIcon } from "./styles/CommunityPage.styled"

export default function CommunityPage() {
  let gameNames = []
  for(let i=0; i < 20; i++){
    gameNames.push(`Game ${i}`);
  }

  return (
    <CommunityPageContainer>
      {gameNames.map((game, index)=>{
        return(
          <GameIcon tabIndex={2}>{game}</GameIcon>
        )
      })}
    </CommunityPageContainer>
  )
}