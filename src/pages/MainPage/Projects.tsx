import React from 'react'

import SectionTitle from '../../components/sectionTitle/SectionTitle'
import ProjectsGrid from '../../components/grids/ProjectsGrid'
import Card from '../../components/card/Card'

import { Section } from './Projects.styles'

type Props = {}

const Projects: React.FC<Props> = () => {
  const handleClick = () => console.log('Clicked !')

  return (
    <Section id="Projects">
      <SectionTitle
        uppercase
        title="My Latest Projects"
        subTitle="Some of the latest Projects I have been working on"
      />
      <ProjectsGrid>
        <Card click={handleClick} cover="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_1.jpg" />
        <Card click={handleClick} cover="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_2.jpg" />
        <Card click={handleClick} cover="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg" />
        <Card click={handleClick} cover="https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_4.jpg" />
      </ProjectsGrid>
    </Section>
  )
}

export default Projects
