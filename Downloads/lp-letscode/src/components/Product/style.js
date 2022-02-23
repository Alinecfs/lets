import styled from 'styled-components'

export const Wrapper = styled.article`
  background: rgba(255, 255, 255, .4);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  & h2 {
    margin-bottom: 0;
  }
`