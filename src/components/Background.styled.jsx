import styled from 'styled-components'

const Background = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.themeStyle.background.start},
    ${({ theme }) => theme.themeStyle.background.end}
  );
`

export default Background
