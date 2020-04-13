import styled from '../../themes/theme'

import { darkBlue } from '../../styles/colors'

export const Wrapper = styled('div')`
  padding-top: 5rem;
  background-color: ${darkBlue};
  color: white;
`
export const Container = styled('div')`
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
`

export const Navigation = styled('div')`
  display: flex;
  flex-direction: column;
`
