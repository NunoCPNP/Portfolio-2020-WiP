import styled from '../../themes/theme'

export const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
`

export const Container = styled('div')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4rem;
  width: 100%;
  max-width: 120rem;
  padding: 4rem;

  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
