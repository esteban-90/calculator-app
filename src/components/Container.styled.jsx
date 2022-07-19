import styled from 'styled-components'
import { nonTouchScreensSizes, touchScreensSizes } from '@/styles'

const Container = styled.div.attrs({
  className: `
      animate__animated
      animate__fadeInDown
      animate__faster
      animate__delay-1s
    `,
})`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1.7fr repeat(5, 1fr);
  box-shadow: 2px 2px 10px #333;
  border-radius: 10px;
  height: 70%;
  width: 25%;

  ${nonTouchScreensSizes({
    extraExtraLarge: 'width: 30%',
    extraLarge: 'width: 40%',
    large: 'width: 50%',
    medium: 'width: 60%',
    small: 'width: 70%',
  })}

  ${touchScreensSizes({
    tabletPortrait: `
      height: 60%;
      width: 65%;
    `,

    phonePortrait: `
      width: 90%;
      grid-template-rows: 2fr repeat(5, 1fr);
    `,

    tabletLanscape: `
      height: 90%;
      width: 40%;
    `,

    phoneLandscape: `
      height: 95%;
      width: 45%;
      grid-template-rows: 2fr repeat(5, 1fr);
    `,
  })}
`

export default Container
