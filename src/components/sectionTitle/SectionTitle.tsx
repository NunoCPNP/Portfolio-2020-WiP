import React from 'react'

import { Wrapper } from './SectionTitle.styles'

type Props = {
  title: string
  subTitle?: string
  uppercase?: boolean
}

const SectionTitle: React.FC<Props> = ({ title, subTitle, uppercase }) => {
  return (
    <Wrapper data-test="SectionTitle">
      <h2 data-test="Title">{uppercase ? title.toUpperCase() : uppercase}</h2>
      <h4 data-test="SubTitle">{subTitle}</h4>
    </Wrapper>
  )
}

export default SectionTitle
