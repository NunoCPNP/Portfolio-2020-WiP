import React from 'react'

import { Wrapper } from './AboutTextBlock.styles'

type Props = {}

const AboutTextBlock: React.FC<Props> = () => {
  return (
    <Wrapper data-test="AboutTextBlock">
      <div>
        <p>
          I am a <span>JavaScript Developer</span> based in Portugal, focused on coding websites and applications using
          modern <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span>.
        </p>
        <p>
          Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine. I
          actively seek out new technologies and stay up-to-date on industry trends and advancements.
        </p>
        <p>
          Continued education allows me to stay ahead of the curve and deliver exceptional work to each employer I’ve
          worked for - both full-time and contract.
        </p>
      </div>
    </Wrapper>
  )
}

export default AboutTextBlock
