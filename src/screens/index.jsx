import { css } from 'styled-components'

// export const onlyNonTouchScreensSizes = () => css`
//   @media (hover: hover) and (pointer: fine) {
//     &:hover {
//       background-color: rgba(255, 255, 255, 0.9);
//     }
//   }
// `

export const nonTouchScreensSizes = ({ xxl, xl, lg, md, sm }) => css`
  /* Extra extra large devices (1400px) */
  @media (max-width: 90em) {
    ${css(...xxl)}
  }

  /* Extra large devices (1200px) */
  @media (max-width: 75em) {
    ${css(...xl)}
  }

  /* Large devices (992px) */
  @media (max-width: 62em) {
    ${css(...lg)}
  }

  /* Medium devices (768px) */
  @media (max-width: 48em) {
    ${css(...md)}
  }

  /* Small devices (576px) */
  @media (max-width: 36em) {
    ${css(...sm)}
  }
`

export const touchScreensSizes = ({
  tabletPortrait,
  phonePortrait,
  tabletLanscape,
  phoneLandscape,
}) => css`
  @media (hover: none), (pointer: none), (pointer: coarse) {
    /* Portrait mode */
    @media (orientation: portrait) {
      /* Tablets (992px) */
      @media (max-width: 62em) {
        ${css(...tabletPortrait)};
      }

      /* Phones (576px) */
      @media (max-width: 36em) {
        ${css(...phonePortrait)};
      }
    }

    /* Landscape mode */
    @media (orientation: landscape) {
      /* Tablets (992px) */
      @media (max-height: 62em) {
        ${css(...tabletLanscape)};
      }

      /* Phones (576px) */
      @media (max-height: 36em) {
        ${css(...phoneLandscape)};
      }
    }
  }
`
