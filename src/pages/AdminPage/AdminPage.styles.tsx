import styled from '../../themes/theme'

export const Wrapper = styled('div')`
  padding-top: 5rem;
  background-color: ${props => props.theme.colors.backgroundColor};
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
