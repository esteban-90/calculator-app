import styled from 'styled-components'
import { touchScreensSizes } from '@/styles'

const Previous = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;

  ${touchScreensSizes({
    tabletPortrait: 'font-size: 1.6rem;',
    phonePortrait: 'font-size: 1.3rem;',
    tabletLanscape: 'font-size: 1.3rem;',
    phoneLandscape: 'font-size: 1.1rem;',
  })}
`

export default Previous
