import styled from 'styled-components'
import { BLACK, WHITE } from 'defaults/Colors'

export const StyledButton = styled.button.attrs(
  ({ type }) => ({
    type: type || 'button'
  })
)`
  background: ${WHITE};
  border: none;
  border-radius: 10px;
  color: ${BLACK};
  cursor: pointer;
  font-weight: 800;
  padding: 10px 10px;
  transition: .15s transform ease;
  transform: scale(.9);
  ${({ backgroundColor }) => backgroundColor && `
    background: ${backgroundColor};
  `}
  ${({ marginTop }) => marginTop && `
    margin-top: ${marginTop};
  `}
  &:hover {
    transform: scale(1);
  }
`
