# Weave 3.0 - 3D Viewer

A modern 3D viewer interface built with React, TypeScript, and Weave 3.0 design tokens using styled-components.

## Project Structure

```
src/
├── theme/                    # Design token system
│   ├── tokens/              # Base tokens
│   │   ├── colors.ts        # Color palette
│   │   ├── typography.ts    # Font and text styles
│   │   ├── spacing.ts       # Spacing scale
│   │   ├── borderRadius.ts  # Border radius values
│   │   ├── shadows.ts       # Shadow definitions
│   │   ├── sizes.ts         # Component sizes
│   │   ├── borderWidth.ts   # Border widths
│   │   └── index.ts         # Token aggregator
│   ├── semantic-tokens/     # Context-aware tokens
│   │   ├── colors.ts        # Semantic color mappings
│   │   └── index.ts         # Export
│   └── index.ts             # Theme provider setup
├── components/              # React components
│   ├── Avatar/             # Avatar component
│   ├── Badge/              # Status badge
│   ├── Button/             # Action button
│   ├── Divider/            # Separator
│   ├── IconButton/         # Icon-only button
│   ├── Text/               # Text element
│   ├── Toolbar/            # Main toolbar
│   └── Viewer3D/           # 3D viewer container
├── App.tsx                 # Root component
└── index.tsx               # Entry point
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the development server at `http://localhost:3000`

### Build

```bash
npm run build
```

Creates a production build in the `dist/` directory.

### Type Checking

```bash
npm run type-check
```

Validates TypeScript without emitting files.

## Design Tokens

All design tokens are centralized in `src/theme/tokens/` following the Weave 3.0 design system:

### Token Categories

- **Colors**: Semantic, brand, feedback, and surface colors
- **Typography**: Font families, sizes, weights, and line heights
- **Spacing**: Margin and padding scale
- **Border Radius**: Rounded corner values
- **Shadows**: Elevation and depth effects
- **Sizes**: Standard component dimensions
- **Border Width**: Stroke thickness

### Usage

```typescript
import styled from 'styled-components'
import { theme } from '@theme'

const MyComponent = styled.div`
  color: ${props => props.theme.tokens.colors.text.default};
  padding: ${props => props.theme.tokens.spacing.m};
  border-radius: ${props => props.theme.tokens.borderRadius.variable.l};
`
```

## Components

### Atomic Components

- **Avatar**: User representation with initials
- **Badge**: Status indicator
- **Button**: Primary action trigger
- **Divider**: Content separator
- **IconButton**: Icon-only action button
- **Text**: Semantic text element

### Composite Components

- **Toolbar**: Main interface toolbar with hub selector, status, and actions
- **Viewer3D**: Main 3D viewer container and canvas

## Styling System

This project uses **styled-components** for CSS-in-JS. All components consume design tokens through the theme provider:

```typescript
<ThemeProvider theme={theme}>
  <GlobalStyle />
  <App />
</ThemeProvider>
```

## Interactivity

The Toolbar supports click handlers for:

- Hub selection
- Search
- Settings
- Help
- Additional options
- Avatar group interactions

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ required

## License

Proprietary - Autodesk
