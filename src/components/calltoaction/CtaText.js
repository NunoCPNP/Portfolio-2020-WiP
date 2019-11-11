import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const CtaText = ({ className }) => {
  return (
    <Wrapper className={className}>
      <h4>Hello</h4>
      <h2>I'm Nuno Pereira</h2>
      <h3>A Front-End Developer</h3>
    </Wrapper>
  )
}

CtaText.propTypes = {
  className: PropTypes.string.isRequired
}

export default CtaText

const Wrapper = styled.div`

`
