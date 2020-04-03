import styled from '@emotion/styled'

type WrapperTypes = {
  type: string
}

export const Wrapper = styled('div')`
  z-index: 5;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${(props: WrapperTypes) => props.type};
`

export const Container = styled('div')`
  display: flex;
  justify-content: space-between;

  p {
    padding: 1.5rem 3rem;
    color: white;
    font-size: 1.6rem;
    font-weight: 500;
  }

  img {
    margin-right: 3rem;
    width: 1.5rem;
  }
`
