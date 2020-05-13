import React from 'react'
import { shallow } from 'enzyme'

import AnchorButton from './AnchorButton'
import { StyledA, Container } from './AnchorButton.styles'

const defaultProps = {
  label: 'test label',
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<AnchorButton {...setupProps} />)
}

describe('AnchorButton Component Tests: ', () => {
  it('Renders without errors', () => {
    const wrapper = setup()
    expect(wrapper.type()).toEqual(StyledA)
  })

  it('Shows label prop at button label', () => {
    const wrapper = setup()
    const target = wrapper.find(Container).find('div')
    expect(target.text()).toBe('TEST LABEL')
  })

  it('Display github icon if github is passed on icon prop', () => {
    const wrapper = setup({ icon: 'github' })
    const target = wrapper.find(Container).find('img')
    expect(target.length).toBe(1)
  })

  it('Dont display icon if nothing is passad on icon prop', () => {
    const wrapper = setup()
    const target = wrapper.find(Container).find('img')
    expect(target.length).toBe(0)
  })

  it('Href property is applyed if linkTo prop is passed', () => {
    const wrapper = setup({ linkTo: 'http://test.test' })
    const target = wrapper.find(StyledA)
    expect(target.find('[href="http://test.test"]').length).toBe(1)
  })

  it('No href property is applyed if linkTo prop is not passed', () => {
    const wrapper = setup()
    const target = wrapper.find(StyledA)
    expect(target.find('[href="http://test.test"]').length).toBe(0)
  })

  it('Blank target and noreferrer properties if blankTarget prop is true', () => {
    const wrapper = setup({ blankTarget: true })
    const target = wrapper.find(StyledA)
    expect(target.find('[target="_blank"]').length).toBe(1)
    expect(target.find('[rel="noreferrer"]').length).toBe(1)
  })

  it('No blank target and noreferrer properties if blankTarget prop is false', () => {
    const wrapper = setup()
    const target = wrapper.find(StyledA)
    expect(target.find('[target="_blank"]').length).toBe(0)
    expect(target.find('[rel="noreferrer"]').length).toBe(0)
  })
})
