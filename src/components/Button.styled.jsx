import styled from 'styled-components'
import { touchScreensSizes } from '@/styles'

const Button = styled.input.attrs({ type: 'button' })`
  cursor: pointer;
  border: 1px outset rgb(255, 255, 255);
  outline: none;
  user-select: none;
  transition: transform 0.1s ease-in-out;
  font-size: 1.5rem;

  background-color: ${({ btnAction, theme }) => {
    return `${
      btnAction
        ? theme.themeStyle.button.action
        : theme.themeStyle.button.number
    };`
  }};

  ${({ bottomCorner }) => {
    return bottomCorner && `border-bottom-${bottomCorner}-radius: 10px;`
  }};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: rgba(255, 255, 255, 0.9);
    }
  }

  ${touchScreensSizes({
    tabletPortrait: 'font-size: 1.6rem;',
    phonePortrait: 'font-size: 1.3rem;',
    tabletLanscape: 'font-size: 1.3rem;',
    phoneLandscape: 'font-size: 1.1rem;',
  })}
`

export default Button
