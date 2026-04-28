/**
 * Weave 3.0 Border Radius Tokens
 * Rounded corner definitions
 */

export const borderRadius = {
  none: '0px',
  variable: {
    s: '4px', // semantic/border-radius/variable/s
    m: '6px', // semantic/border-radius/variable/m
    l: '12px', // semantic/border-radius/variable/l
  },
} as const

export type BorderRadius = typeof borderRadius
