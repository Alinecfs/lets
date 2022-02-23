import styled from 'styled-components';
import { BIG_SCREEN_DEVICES } from 'defaults/Breakpoints';

export const Container = styled.div`
  height: calc(25vw + 90px);
  position: relative;
  @media only screen and (max-width: ${BIG_SCREEN_DEVICES}px) {
    height: calc(45vw + 90px);
  }  
`

export const Image = styled.img`
  border-radius: 5px;
  box-shadow: -3px 3px 30px rgba(0,0,0,.35);
  position: absolute;
  opacity: .85;
  transition: .3s opacity ease;
  width: 45vw;
  &:hover {
    opacity: 1;
    z-index: 1;
  }
  ${({ i }) => `
    left: ${70 * i}px;
    top: ${70 * i}px;
  `}
  @media only screen and (min-width: ${BIG_SCREEN_DEVICES}px) {
    width: 25vw;
  }
`