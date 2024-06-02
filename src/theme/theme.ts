import { createGlobalStyle, css } from 'styled-components'

import RobotoBold from 'assets/fonts/roboto-bold-webfont.woff2'
import RobotoMedium from 'assets/fonts/roboto-medium-webfont.woff2'
import RobotoRegular from 'assets/fonts/roboto-regular-webfont.woff2'

import { spacing } from './utils.ts'

export const theme = {
  fontFamily: "'RobotoRegular', 'RobotoMedium', 'RobotoBold', sans-serif",
  fontSize: {
    xs: '10px',
    s: '12px',
    m: '14px',
    l: '20px',
    xl: '1.5rem',
  },
  lineHeight: {
    s: '0.9rem',
  },
  color: {
    primary: '#006FFF',
    primaryDark: '#0055ce',
    black: '#000000',
    white: '#ffffff',
    lightGrey: '#F6F6F8',
    lightGrey2: '#E0E0E0',
    lightGrey3: '#EDEDF0',
    lightGrey4: '#FBFBFB',
    lightGrey5: '#BDBDBD',
    lightGrey6: '#DBDCE1',
    imageBackground: '#f6f7f8',
    grey: '#838691',
    darkGrey: 'rgba(0, 0, 0, 0.65)',
  },
  borderRadius: {
    s: '4px',
    m: '8px',
  },
  breakpoints: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tabletS: '560px',
    tabletM: '768px',
    tabletL: '980px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  },
}

const headerHeight = `${spacing(7)}`

export const FlexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Reset = css`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default spacing */
  * {
    margin: 0;
    padding: 0;
  }

  /* Remove list styles on ul, ol elements with a list role */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  html,
  body,
  body > div#root {
    height: 100%;
    margin: 0;

    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: ${spacing(7)};
      background-color: #f0f0f0;
    }
  }

  main {
    height: 100%;
    overflow-y: scroll;
    padding-top: calc(${headerHeight});
    display: flex;
    flex-direction: column;
  }

  /* Set core body defaults */
  body {
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-synthesis: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
    cursor: pointer;
  }

  /* Make images easier to work with */
  img,
  picture,
  video,
  canvas,
  svg {
    max-width: 100%;
    display: block;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  /* Create a root stacking context */
  #root {
    isolation: isolate;
  }
`

export const Typography = css`
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular}) format('woff2');
    font-weight: 400;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMedium}) format('woff2');
    font-weight: 500;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold}) format('woff2');
    font-weight: 700;
    font-display: fallback;
  }
`

export const Base = css`
  :root {
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: 400;
    line-height: 1.5;
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    border: none;
    padding: 0;
    font-family: inherit;
    cursor: pointer;
    background: none;
  }

  button:focus,
  button:focus-visible {
    outline: none;
  }

  body {
    min-width: 320px;
    min-height: 100vh;
  }

  ul {
    list-style-type: none;
  }
`

export const GlobalStyles = createGlobalStyle`
  ${Reset}
  ${Base}
  ${Typography}
`
