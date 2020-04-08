import React from 'react'

import Card from '../cards/Cards'

import { Wrapper, Container } from './ProjectsGrid.styles'

type Props = {}

const ProjectsGrid: React.FC<Props> = () => {
  const handleClick = () => console.log('Clicked !')

  return (
    <Wrapper>
      <Container>
        <Card click={handleClick} cover="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_1.jpg" />
        <Card click={handleClick} cover="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_2.jpg" />
        <Card click={handleClick} cover="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg" />
        <Card click={handleClick} cover="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_4.jpg" />
      </Container>
    </Wrapper>
  )
}

export default ProjectsGrid
