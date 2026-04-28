/**
 * Weave 3.0 Semantic Tokens
 * Context-aware, purpose-driven token mappings
 */

export const semanticTokens = {
  // Action tokens for interactive states
  action: {
    default: '#0070f3',
    hover: '#0051cc',
    active: '#003a9d',
    disabled: '#d1d5db',
  },
  // Status tokens for feedback
  status: {
    success: '#16a34a',
    error: '#dc2626',
    warning: '#d97706',
    info: '#0284c7',
    new: '#006698',
  },
  // Text color mappings
  text: {
    primary: '#3C3C3C',
    secondary: '#3C3C3C',
    muted: '#808080',
  },
  // Background mappings
  surface: {
    default: '#FFFFFF',
    elevated: '#EEEEEE',
    depressed: '#CCCCCC',
  },
  // Border mappings
  border: {
    default: '#0000001a',
    light: '#3C3C3C1a',
    divider: '#3C3C3C1a',
  },
} as const

export type SemanticTokens = typeof semanticTokens
