import styled from 'styled-components'
import { touchScreensSizes } from '@/styles'

const Screen = styled.div`
  grid-column: 1 / -1;
  background-color: rgba(60, 64, 67, 0.75);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 5px 15px;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  ${touchScreensSizes({
    tabletPortrait: 'padding: 5px 15px;',
    phonePortrait: 'padding: 5px 15px;',
    tabletLanscape: 'padding: 5px 15px;',
    phoneLandscape: 'padding: 0 10px;',
  })}
`

export default Screen
