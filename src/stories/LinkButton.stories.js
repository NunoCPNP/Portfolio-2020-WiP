import React from 'react'

import LinkButton from '../components/buttons/LinkButton'
import AnchorButton from '../components/buttons/AnchorButton'

export default { title: 'Buttons' }

export const Link = () => <LinkButton label="Send Message" />

export const Anchor = () => <AnchorButton label="Teste" />
