/**
 * Weave 3.0 Spacing Tokens
 * Spacing scale for padding, margins, and gaps
 */

export const spacing = {
  xxs: '4px', // semantic/spacing/xxs
  xs: '12px', // semantic/spacing/xs
  s: '12px', // semantic/spacing/s
  m: '24px', // semantic/spacing/m
  l: '48px',
  xl: '64px',
  fixed: {
    xs: '4px', // semantic/spacing/fixed/xs
    m: '12px', // semantic/spacing/fixed/m
  },
} as const

export type Spacing = typeof spacing
