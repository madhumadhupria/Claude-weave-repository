/**
 * Weave 3.0 Shadow & Elevation Tokens
 * Shadow definitions for depth and elevation
 */

export const shadows = {
  low: {
    blurRadius: '8px', // semantic/box-shadow/blur-radius/elevation/low
    color: '#00000033', // semantic/shadow-color
    offset: '0px 0px',
    spread: '0px',
    full: '0px 0px 4px rgba(0, 0, 0, 0.2)',
  },
} as const

export type Shadows = typeof shadows
