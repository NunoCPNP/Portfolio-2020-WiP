import React from 'react'

import { Wrapper } from './AboutTextBlock.styles'

type Props = {}

const AboutTextBlock: React.FC<Props> = () => {
  return (
    <Wrapper>
      <div>
        <p>
          I am a <span>JavaScript Developer</span> based in Portugal, focused on coding websites and applications using
          modern <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span>.
        </p>
        <p>
          Building <span>state-of-the-art</span>, <span>easy to use, user-friendly</span>
          <span>websites and applications</span> is truly a passion of mine. I actively seek out new technologies and
          stay <span>up-to-date</span> on industry trends and advancements.
        </p>
        <p>
          <span>Continued education</span> allows me to stay <span>ahead of the curve</span> and deliver{' '}
          <span>exceptional work</span> to each employer I’ve worked for - both full-time and contract.
        </p>
      </div>
    </Wrapper>
  )
}

export default AboutTextBlock
