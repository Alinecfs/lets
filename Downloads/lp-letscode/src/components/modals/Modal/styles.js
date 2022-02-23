import styled from 'styled-components'
import { SMALL_SCREEN_DEVICES } from 'defaults/Breakpoints'

const Modal = styled.div`
  position: fixed;
  background: white;
  border-radius: 10px;
  box-shadow: 5px 5px 30px rgb(0 0 0 / 30%);
  box-sizing: border-box;
  padding: 30px;
  width: 400px;
  top: calc(50% - 150px);
  left: calc(50% - 200px);
  z-index: 1000;
  transition: .25s opacity ease, .3s transform ease;
  opacity: 0;
  transform: scale(.6);
  pointer-events: none;
  ${({ visible }) => visible && `
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  `}
  @media only screen and (max-width: ${SMALL_SCREEN_DEVICES}px) {
    width: 90%;
    top: 5%;
    left: 5%;
  }
  & h1 {
    font-size: 24px;
  }
`

const BtnClose = styled.button`
  background: none;
  border: none;
  font-size: 23px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 10px;
  transition: .05s color ease;
  &:hover {
    color: #929292;
  }
`

const Overlay = styled.div`
  position: fixed;
  background: #0000005e;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  transition: .2s opacity ease;
  opacity: 0;
  pointer-events: none;
  ${({ visible }) => visible && `
    opacity: 1;
    pointer-events: auto;
  `}
`

export default { BtnClose, Modal, Overlay }