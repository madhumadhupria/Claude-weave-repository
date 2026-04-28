/**
 * Weave 3.0 Border Width Tokens
 * Border thickness definitions
 */

export const borderWidth = {
  fixed: {
    s: '1px', // semantic/border-width/fixed/s
  },
} as const

export type BorderWidth = typeof borderWidth
