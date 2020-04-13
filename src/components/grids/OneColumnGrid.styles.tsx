import styled from '../../themes/theme'

type ContainerProps = {
  items: number
  breakTo: number
  gap: number
  maxWidth: number
  padding: number
}

export const Container = styled('div')`
  display: grid;
  grid-template-columns: repeat(${(props: ContainerProps) => props.items}, 1fr);
  grid-gap: ${(props: ContainerProps) => props.gap}rem;
  width: 100%;
  max-width: ${(props: ContainerProps) => props.maxWidth}rem;
  padding: ${(props: ContainerProps) => props.padding}rem;

  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(${(props: ContainerProps) => props.breakTo}, 1fr);
  }
`

export const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
`
