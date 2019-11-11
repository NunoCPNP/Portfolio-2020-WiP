import React from 'react'
import styled from '@emotion/styled'

const Post = props => {
  return (
    <Wrapper>
      <h2>{props.title}</h2>
      {props.body.map(item =>
        item.children.map(item => <p key={item._key}>{item.text}</p>)
      )}
    </Wrapper>
  )
}

export default Post

const Wrapper = styled.div`
  color: white;
`
