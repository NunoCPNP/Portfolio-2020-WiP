import React from 'react'
import { shallow } from 'enzyme'

import SectionTitle from './SectionTitle'
import { Wrapper } from './SectionTitle.styles'

const initialProps = {
  title: 'test title',
}

const setup = (props = {}) => {
  const setupProps = { ...initialProps, ...props }
  return shallow(<SectionTitle {...setupProps} />)
}

describe('AnchorButton Component Tests: ', () => {
  it('Renders without errors', () => {
    const wrapper = setup()
    expect(wrapper.type()).toEqual(Wrapper)
  })

  it('Doesnt display subtitle when no subtitle prop is passed', () => {
    const wrapper = setup()
    const target = wrapper.find('h4')
    expect(target.text()).toBe('')
  })

  it('Displays subtitle when subtitle prop is passed', () => {
    const wrapper = setup({ subTitle: 'test subtitle' })
    const target = wrapper.find('h4')
    expect(target.text()).toBe('test subtitle')
  })

  it('Converts Title to uppercase if uppercase prop is true', () => {
    const wrapper = setup({ uppercase: true })
    const target = wrapper.find('h2')
    expect(target.text()).toBe('TEST TITLE')
  })
})
