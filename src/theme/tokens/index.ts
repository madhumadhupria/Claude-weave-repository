/**
 * Token Aggregator
 * Exports all design tokens in a single namespace
 */

export { colors } from './colors'
export type { Colors } from './colors'

export { typography } from './typography'
export type { Typography } from './typography'

export { spacing } from './spacing'
export type { Spacing } from './spacing'

export { borderRadius } from './borderRadius'
export type { BorderRadius } from './borderRadius'

export { shadows } from './shadows'
export type { Shadows } from './shadows'

export { sizes } from './sizes'
export type { Sizes } from './sizes'

export { borderWidth } from './borderWidth'
export type { BorderWidth } from './borderWidth'

// Combined types
export type AllTokens = {
  colors: typeof import('./colors').colors
  typography: typeof import('./typography').typography
  spacing: typeof import('./spacing').spacing
  borderRadius: typeof import('./borderRadius').borderRadius
  shadows: typeof import('./shadows').shadows
  sizes: typeof import('./sizes').sizes
  borderWidth: typeof import('./borderWidth').borderWidth
}
