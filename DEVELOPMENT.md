# Development Guide

## Quick Start

```bash
# Install & run
npm install
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## Project Architecture

### Token-First Design
This project follows a **token-first approach**:
1. All design decisions start with tokens (colors, spacing, typography)
2. Tokens are defined in `src/theme/tokens/`
3. Components consume tokens via styled-components theme provider
4. Theme is typed and provides full TypeScript autocomplete

### Component Architecture
**Atomic Design Pattern:**
- **Atoms**: Avatar, Badge, Button, Divider, IconButton, Text
- **Molecules**: Toolbar (composed of atoms)
- **Organisms**: Viewer3D (complete feature)

Each component:
- Is self-contained in its own folder
- Uses styled-components for styling
- Consumes tokens via `props.theme`
- Has full TypeScript typing
- Includes data-node-id attributes for Figma tracing

---

## Adding New Components

### 1. Create Component File
```typescript
// src/components/MyComponent/MyComponent.tsx
import React from 'react'
import styled from 'styled-components'

const StyledRoot = styled.div`
  color: ${props => props.theme.tokens.colors.text.default};
  padding: ${props => props.theme.tokens.spacing.m};
`

interface MyComponentProps {
  children: React.ReactNode
}

export const MyComponent: React.FC<MyComponentProps> = ({ children }) => {
  return <StyledRoot>{children}</StyledRoot>
}
```

### 2. Export from Component Index (optional)
Create `src/components/MyComponent/index.ts`:
```typescript
export { MyComponent } from './MyComponent'
export type { MyComponentProps } from './MyComponent'
```

### 3. Use in Other Components
```typescript
import { MyComponent } from '@components/MyComponent/MyComponent'

export const App = () => {
  return <MyComponent>Hello</MyComponent>
}
```

---

## Adding New Tokens

### 1. Add Token Definition
Create file in `src/theme/tokens/`:
```typescript
// src/theme/tokens/animations.ts
export const animations = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
} as const
```

### 2. Export from Aggregator
Update `src/theme/tokens/index.ts`:
```typescript
export { animations } from './animations'
export type { Animations } from './animations'
```

### 3. Use in Components
```typescript
const StyledButton = styled.button`
  transition: all ${props => props.theme.tokens.animations.normal} ease-in-out;
`
```

---

## Theme Customization

### Global Styles
Edit `src/theme/index.ts` to modify global styles:
```typescript
export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.tokens.typography.fonts.body};
    background-color: ${props => props.theme.tokens.colors.background.surface[100]};
  }
`
```

### Dark Mode Support (Future)
Extend semantic tokens to support theme switching:
```typescript
// src/theme/semantic-tokens/colors.ts
export const semanticTokens = (isDark: boolean) => ({
  background: isDark ? '#1a1a1a' : '#ffffff',
  // ...
})
```

Then update theme provider to accept mode:
```typescript
const [isDark, setIsDark] = useState(false)

<ThemeProvider theme={{ ...theme, semanticTokens: semanticTokens(isDark) }}>
  <App />
</ThemeProvider>
```

---

## Component Props Patterns

### Optional Props
```typescript
interface MyComponentProps {
  variant?: 'primary' | 'secondary'  // Optional with default
  disabled?: boolean
  className?: string                  // Allow style overrides
  dataNodeId?: string                 // Figma tracing
}
```

### Children Patterns
```typescript
// With children
export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  ...props
}) => {
  return <div>{children}</div>
}

// Or explicit
interface Props {
  children: React.ReactNode
}
```

---

## Styling Best Practices

### ✅ DO: Use Design Tokens
```typescript
const StyledDiv = styled.div`
  color: ${props => props.theme.tokens.colors.text.default};
  padding: ${props => props.theme.tokens.spacing.m};
  border-radius: ${props => props.theme.tokens.borderRadius.variable.l};
`
```

### ❌ DON'T: Use Hard-Coded Values
```typescript
const StyledDiv = styled.div`
  color: #3c3c3c;
  padding: 24px;
  border-radius: 12px;
`
```

### ✅ DO: Compose Styled Components
```typescript
const Container = styled.div`
  display: flex;
  gap: ${props => props.theme.tokens.spacing.m};
`

const Item = styled.div`
  flex: 1;
`

export const MyComponent = () => (
  <Container>
    <Item>Item 1</Item>
    <Item>Item 2</Item>
  </Container>
)
```

### ✅ DO: Use Semantic Props
```typescript
const StyledText = styled.p<{ variant?: 'primary' | 'secondary' }>`
  color: ${props => 
    props.variant === 'primary'
      ? props.theme.tokens.colors.text.default
      : props.theme.tokens.colors.text.muted
  };
`
```

---

## Type Safety Tips

### Theme Typing
```typescript
import type { Theme } from '@theme'

// Get type of specific token
type Colors = Theme['tokens']['colors']
type Spacing = Theme['tokens']['spacing']
```

### Component Props Typing
```typescript
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = (props) => {
  // Full type safety
}
```

---

## Common Tasks

### Change a Color
1. Edit `src/theme/tokens/colors.ts`
2. All components using that token automatically update
3. No need to find and replace hardcoded colors

### Adjust Spacing Scale
1. Edit `src/theme/tokens/spacing.ts`
2. Update semantic tokens if needed
3. All components automatically reflect changes

### Add New Font Size
1. Add to `src/theme/tokens/typography.ts`
2. Export in `src/theme/tokens/index.ts`
3. Use via `props.theme.tokens.typography.sizes.newSize`

---

## Debugging

### Check Theme Values
```typescript
// In component
console.log(props.theme.tokens)  // See all tokens
```

### Verify Styles Are Applied
```typescript
// Use React DevTools
// Inspect element → Styles tab shows all styled-components
```

### TypeScript Errors
```bash
npm run type-check
```
Shows all type issues without compiling.

---

## Performance Tips

### Component Memoization
```typescript
import React from 'react'

export const MyComponent = React.memo(({ prop }: Props) => {
  return <div>{prop}</div>
})
```

### Styled-Components Best Practices
```typescript
// ✅ Define styled components outside render
const StyledDiv = styled.div`...`

export const Component = () => <StyledDiv />

// ❌ DON'T: Define inside render (creates new class on each render)
export const Component = () => {
  const StyledDiv = styled.div`...`  // Bad!
  return <StyledDiv />
}
```

---

## File Size and Build

### Check Bundle Size
```bash
npm run build
# Check dist/ folder size
```

### Optimize
- Only import what you need
- Use tree-shaking: `import { Button } from '@components/Button'`
- Remove unused tokens

---

## Next Steps

1. **Install & Run**: `npm install && npm run dev`
2. **Explore Components**: Check `src/components/` for examples
3. **Modify Tokens**: Try changing colors in `src/theme/tokens/colors.ts`
4. **Add Components**: Follow the "Adding New Components" pattern above
5. **Build**: `npm run build` when ready to deploy

---

## Troubleshooting

### "Cannot find module" Error
- Check path aliases in `tsconfig.json`
- Verify file exports (`export { Component }`)
- Restart dev server

### Styles Not Applying
- Ensure component is wrapped in `<ThemeProvider>`
- Check `GlobalStyle` is rendered
- Verify token paths are correct

### TypeScript Errors
- Run `npm run type-check` for full error report
- Check `DefaultTheme` augmentation in `src/theme/index.ts`
- Verify component prop types are correct

---

## Resources

- [styled-components Docs](https://styled-components.com/)
- [React Docs](https://react.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/)
- [Vite Docs](https://vitejs.dev/)
- [Weave Design System](https://weave.autodesk.com/)
