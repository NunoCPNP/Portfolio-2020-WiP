import React from 'react'

import { Wrapper } from './SectionTitle.styles'

type Props = {
  title: string
  subTitle?: string
  uppercase?: boolean
}

const SectionTitle: React.FC<Props> = ({ title, subTitle, uppercase }) => {
  return (
    <Wrapper>
      <span>
        <h2>{uppercase ? title.toUpperCase() : uppercase}</h2>
      </span>
      <h4>{subTitle}</h4>
    </Wrapper>
  )
}

export default SectionTitle
