/**
 * Weave 3.0 Size Tokens
 * Standard sizes for components, touch targets, and data displays
 */

export const sizes = {
  touchTarget: {
    default: '32px', // semantic/size/touch-target/default
  },
  dataDisplay: {
    status: {
      container: {
        text: {
          height: '24px', // semantic/size/data-display/status/container/text/height
        },
      },
    },
  },
} as const

export type Sizes = typeof sizes
