/**
 * Weave 3.0 Typography Tokens
 * Font, size, weight, and line height definitions
 */

export const typography = {
  fonts: {
    artifakt: 'ArtifaktElement',
    artifaktElement: '"Artifakt Element", "ArtifaktElement:Bold", "ArtifaktElement:Semi_Bold", sans-serif',
    body: 'system-ui, -apple-system, sans-serif',
  },
  sizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    '2xl': '32px',
    fixed: {
      m: '12px', // semantic/font-size/fixed/m
    },
  },
  weights: {
    normal: 400,
    medium: 600, // generic/font-weight/medium
    semibold: 600,
    bold: 700, // generic/font-weight/bold
  },
  lineHeights: {
    tight: 1.2,
    16: '16px', // generic/line-height/16
    normal: 1.5,
    relaxed: 1.75,
  },
  styles: {
    fixedM: {
      medium: {
        fontFamily: '"Artifakt Element", sans-serif',
        fontSize: '12px',
        fontWeight: 600,
        lineHeight: '16px',
        letterSpacing: 0,
      },
      bold: {
        fontFamily: '"Artifakt Element", sans-serif',
        fontSize: '12px',
        fontWeight: 700,
        lineHeight: '16px',
        letterSpacing: 0,
      },
    },
  },
} as const

export type Typography = typeof typography
