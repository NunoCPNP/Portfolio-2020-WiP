import React from 'react'
import { shallow } from 'enzyme'
import BlogBar from '../components/blogBar/BlogBar'

describe('BlogBar', () => {
  it('renders', () => {
    shallow(<BlogBar />)
  })
})
