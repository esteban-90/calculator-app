import styled from 'styled-components'
import { touchScreensSizes } from '@/screens'

const Current = styled.div`
  color: rgb(255, 255, 255);
  font-size: 2.5rem;

  ${touchScreensSizes({
    tabletPortrait: 'font-size: 2.5rem;',
    phonePortrait: 'font-size: 2.3rem;',
    tabletLanscape: 'font-size: 2.5rem;',
    phoneLandscape: 'font-size: 2rem;',
  })}
`

export default Current
