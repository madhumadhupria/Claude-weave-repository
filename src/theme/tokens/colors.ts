/**
 * Weave 3.0 Color Tokens
 * These are the base color definitions extracted from the design system
 */

export const colors = {
  // Semantic colors - direct from Figma design
  text: {
    medium: '#3C3C3C',
    default: '#363636',
    muted: '#808080',
  },
  background: {
    surface: {
      100: '#FFFFFF',
      250: '#EEEEEE',
      350: '#CCCCCC',
    },
    input: {
      secondary: '#ffffff00', // transparent
    },
    data: {
      display: {
        attribute: '#ffffff',
      },
    },
    selection: '#cdeaf766',
    selected: '#CDEAF7',
    feedback: {
      status: {
        new: {
          light: '#e6f5fb',
        },
      },
    },
  },
  border: {
    divider: {
      light: '#3C3C3C1a',
    },
    light: '#0000001a',
    transparent: '#ffffff00',
    selection: '#006da2b2',
    feedback: {
      status: {
        new: {
          light: '#006da233',
        },
      },
    },
  },
  icon: {
    default: '#363636',
    medium: '#808080',
    heavy: '#3C3C3C',
    pressed: '#3C3C3C',
  },
  feedback: {
    status: {
      new: '#006698',
    },
  },
  brand: {
    pink: '#FC56A9',
  },
  generic: {
    transparent: '#FAFAFA',
  },
  shadow: '#00000033',
} as const

export type Colors = typeof colors
