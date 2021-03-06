import { css } from 'styled-components'

const screenSizes = {
  xxl: '90em', // 16px × 90 -> 1440px
  xl: '75em', // 16px × 75 -> 1200px
  lg: '62em', // 16px × 62 -> 992px
  md: '48em', // 16px × 48 -> 768px
  sm: '36em', // 16px × 36 -> 576px
}

export const nonTouchScreensSizes = ({
  extraExtraLarge,
  extraLarge,
  large,
  medium,
  small,
}) => css`
  @media (max-width: ${screenSizes.xxl}) {
    ${css(...extraExtraLarge)}
  }

  @media (max-width: ${screenSizes.xl}) {
    ${css(...extraLarge)}
  }

  @media (max-width: ${screenSizes.lg}) {
    ${css(...large)}
  }

  @media (max-width: ${screenSizes.md}) {
    ${css(...medium)}
  }

  @media (max-width: ${screenSizes.sm}) {
    ${css(...small)}
  }
`

export const touchScreensSizes = ({
  tabletPortrait,
  phonePortrait,
  tabletLanscape,
  phoneLandscape,
}) => css`
  @media (pointer: coarse) {
    /* Portrait */
    @media (orientation: portrait) {
      /* Tablets */
      @media (max-width: ${screenSizes.lg}) {
        ${css(...tabletPortrait)};
      }

      /* Phones */
      @media (max-width: ${screenSizes.sm}) {
        ${css(...phonePortrait)};
      }
    }

    /* Landscape */
    @media (orientation: landscape) {
      /* Tablets */
      @media (max-height: ${screenSizes.lg}) {
        ${css(...tabletLanscape)};
      }

      /* Phones */
      @media (max-height: ${screenSizes.sm}) {
        ${css(...phoneLandscape)};
      }
    }
  }
`
