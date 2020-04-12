import styled from '../../themes/theme'

type ContainerProps = {
  items: number
  breakTo: number
  maxWidth: number
}

export const Container = styled('div')`
  display: grid;
  grid-template-columns: repeat(${(props: ContainerProps) => props.items}, 1fr);
  grid-gap: 4rem;
  width: 100%;
  max-width: ${(props: ContainerProps) => props.maxWidth}rem;
  padding: 4rem;

  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(${(props: ContainerProps) => props.breakTo}, 1fr);
  }
`

export const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
`
