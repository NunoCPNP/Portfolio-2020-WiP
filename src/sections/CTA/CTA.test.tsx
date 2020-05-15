import React from 'react'
import { shallow } from 'enzyme'

import CTA from './CTA'
import { SectionWrapper, ButtonsContainer, CTAText } from './CTA.styles'

import AnchorButton from '../../components/buttons/AnchorButton'

const setup = (props = {}) => {
  return shallow(<CTA {...props} />)
}

describe('CTA Component Tests:', () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = setup()
  })

  it('Renders without errors:', () => {
    expect(wrapper.type()).toEqual(SectionWrapper)
  })

  it('All styled components are rendered', () => {
    expect(wrapper.find(ButtonsContainer).length).toBe(1)
    expect(wrapper.find(CTAText).length).toBe(1)
  })

  it('Rendering H2, H3 and span tags', () => {
    expect(wrapper.find('h2').length).toBe(1)
    expect(wrapper.find('h3').length).toBe(2)
    expect(wrapper.find('span').length).toBe(2)
  })

  it('One img tag is found', () => {
    expect(wrapper.find('img').length).toBe(1)
  })

  it('Correct omage is being shown', () => {
    const target = wrapper.find('img')
    expect(target.find('[src="ctaSVG.svg"]').length).toBe(1)
    expect(target.find('[alt=""]').length).toBe(1)
  })

  it('Renders one AnchorButton component', () => {
    expect(wrapper.find(AnchorButton).length).toBe(1)
  })

  it('Passing the correct props to AnchorButton', () => {
    expect(wrapper.find(AnchorButton).props()).toEqual({
      label: 'GitHub',
      icon: 'github',
      linkTo: 'https://github.com/NunoCPNP',
      blankTarget: true,
    })
  })
})
