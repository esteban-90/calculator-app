import 'animate.css'
import { createGlobalStyle } from 'styled-components'
import { gothamRoundedMedium } from '@/fonts'

const Global = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: "Gotham Rounded", sans-serif;
    font-weight: normal;
  }

  @font-face{
    font-family: "Gotham Rounded";
    src: url(${gothamRoundedMedium}) format("ttf");
  }
  
  body {
    margin: 0;
    padding: 0;
  }

  .clicked,
  input[type="button"]:active {
    transform: scale(0.95);
  }
`

export default Global
