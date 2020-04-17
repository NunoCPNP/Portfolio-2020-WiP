import styled from '../themes/theme'

export const PageWrapper = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const LeftWrapper = styled('div')`
  padding: 5rem;
`
export const RightWrapper = styled('div')``
export const FormWrapper = styled('div')`
  display: flex;
  flex-direction: column;

  & input {
    margin-bottom: 2rem;
  }
`
export const Button = styled('button')`
  padding: 0.2rem 0;
`
