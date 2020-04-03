import styled from '../../themes/theme'

export const BarWrapper = styled('div')`
  background-color: ${props => props.theme.colors.blogBar};
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 4rem;
`
export const P = styled('p')`
  font-size: 1.2rem;

  span {
    padding-right: 1.9rem;
    font-weight: 500;
  }
`

export const Button = styled('a')`
  cursor: pointer;
  background-color: ${props => props.theme.colors.blogBar};
  font-size: 1.2rem;
  font-weight: 400;
`
