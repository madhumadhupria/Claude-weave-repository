/**
 * Theme Provider Configuration
 * Integrates all tokens with styled-components
 */

import { createGlobalStyle } from 'styled-components'
import * as tokens from './tokens'
import { semanticTokens } from './semantic-tokens'

// Define the theme object
export const theme = {
  tokens: {
    colors: tokens.colors,
    typography: tokens.typography,
    spacing: tokens.spacing,
    borderRadius: tokens.borderRadius,
    shadows: tokens.shadows,
    sizes: tokens.sizes,
    borderWidth: tokens.borderWidth,
  },
  semanticTokens,
} as const

export type Theme = typeof theme

// Global styles
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: ${props => props.theme.tokens.typography.fonts.body};
    font-size: ${props => props.theme.tokens.typography.sizes.md};
    color: ${props => props.theme.tokens.colors.text.default};
    background-color: ${props => props.theme.tokens.colors.background.surface[100]};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button, input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

// Augment styled-components DefaultTheme
declare module 'styled-components' {
  export interface DefaultTheme {
    tokens: typeof theme.tokens
    semanticTokens: typeof semanticTokens
  }
}

export { ThemeProvider } from 'styled-components'
