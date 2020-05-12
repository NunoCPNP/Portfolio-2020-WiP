import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../../test/testUtils'

import SectionTitle from '../components/sectionTitle/SectionTitle'

const defaultProps = {
  title: 'test title',
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<SectionTitle {...setupProps} />)
}

describe('AnchorButton Component Tests: ', () => {
  it('Renders without errors', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'SectionTitle')
    expect(component.length).toBe(1)
  })

  it('Doesnt display subtitle when no subtitle prop is passed', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'SubTitle')
    expect(component.text()).toBe('')
  })

  it('Displays subtitle when subtitle prop is passed', () => {
    const wrapper = setup({ subTitle: 'test subtitle' })
    const component = findByTestAttr(wrapper, 'SubTitle')
    expect(component.text()).toBe('test subtitle')
  })

  it('Converts Title to uppercase if uppercase prop is true', () => {
    const wrapper = setup({ uppercase: true })
    const component = findByTestAttr(wrapper, 'Title')
    expect(component.text()).toBe('TEST TITLE')
  })
})
