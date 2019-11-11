import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import Post from './Post'

import { getPosts } from '../../store/sanityBlog/actions'

const Posts = props => {
  useEffect(() => {
    const { getPosts } = props
    getPosts()
  }, [])

  return (
    <>
      <Wrapper>
        {props.posts.map(item => (
          <Post key={item.id} title={item.title} body={item.body} />
        ))}
      </Wrapper>
    </>
  )
}

const mapStateToProps = state => ({
  posts: state.sanityPosts.posts
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPosts }, dispatch)

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)

const Wrapper = styled.div`
  display: flex;
  justify-items: center;
  margin-top: 2rem;
  width: 80vw;
`
