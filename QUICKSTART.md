# 🚀 Quick Start Guide

## Installation & Setup (2 minutes)

```bash
# 1. Navigate to project
cd /Users/priyam/Weavification

# 2. Install dependencies (first time only)
npm install

# 3. Start development server
npm run dev
```

Browser opens automatically to `http://localhost:3000`

---

## What You'll See

A modern 3D viewer interface with:
- **Top Toolbar** with Autodesk Docs selector and model info
- **Status Display** showing "Viewing 1 model" with V1 badge
- **Action Buttons** (Search, Settings, Help)
- **User Avatars** group (3 overlapping profile circles)
- **Large Canvas Area** for 3D model display

All styled using **Weave 3.0 design tokens** with proper colors, spacing, typography, and shadows.

---

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Type checking (no compilation)
npm run type-check

# Preview production build locally
npm run preview
```

---

## Project Structure at a Glance

```
src/
├── theme/           # Design tokens (colors, typography, spacing, etc.)
│   ├── tokens/     # Base token definitions
│   └── semantic-tokens/  # Context-aware token mappings
├── components/      # Reusable UI components
│   ├── Avatar      # User representation
│   ├── Badge       # Status indicator
│   ├── Button      # Action button
│   ├── Divider     # Separator
│   ├── IconButton  # Icon-only button
│   ├── Text        # Text element
│   ├── Toolbar     # Main toolbar (composite)
│   └── Viewer3D    # Main container (composite)
├── App.tsx         # Root component
└── index.tsx       # App initialization
```

---

## Making Changes

### Change a Color
Edit `src/theme/tokens/colors.ts` → All components automatically update

### Add Spacing
Edit `src/theme/tokens/spacing.ts` → Use in components via `props.theme.tokens.spacing.m`

### Create New Component
Create folder in `src/components/MyComponent/` → Import and use

### See Live Changes
Changes auto-reload in browser (fast refresh enabled)

---

## File Descriptions

| File | Purpose |
|------|---------|
| `package.json` | Dependencies & scripts |
| `tsconfig.json` | TypeScript configuration |
| `vite.config.ts` | Build tool setup |
| `index.html` | HTML entry point |
| `src/theme/` | All design tokens |
| `src/components/` | All UI components |
| `src/App.tsx` | Root component with theme provider |
| `README.md` | Full documentation |
| `DEVELOPMENT.md` | Developer guide |

---

## Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process using port 3000 (macOS)
lsof -ti:3000 | xargs kill -9

# Or change port in vite.config.ts
```

### Dependencies Won't Install
```bash
rm -rf node_modules package-lock.json
npm install
```

### Type Errors in IDE
```bash
# Ensure TypeScript server is running
npm run type-check

# Restart VS Code if needed
```

### Styles Not Applying
- Ensure you're in the right React component
- Check browser DevTools → Elements → Styles
- Verify theme provider wraps component

---

## Next: Add Features

### To Add 3D Model Viewer
1. Install Three.js: `npm install three`
2. Create `src/components/Canvas3D/Canvas3D.tsx`
3. Replace placeholder in Viewer3D

### To Add Dark Mode
1. Extend `semantic-tokens/colors.ts` with dark variant
2. Add toggle state in App.tsx
3. Pass to ThemeProvider

### To Add More Icons
1. Find icon URL from Figma
2. Pass to IconButton via `icon` prop
3. Works immediately

---

## Key Technologies

- ⚛️ **React 18** — UI framework
- 🎨 **styled-components** — CSS-in-JS styling
- 📘 **TypeScript** — Type safety
- ⚡ **Vite** — Fast build tool
- 🎯 **Design Tokens** — Weave 3.0 system

---

## Resources

- **Weave Design System**: https://weave.autodesk.com/
- **React Docs**: https://react.dev/
- **styled-components**: https://styled-components.com/
- **Vite**: https://vitejs.dev/

---

## Need Help?

1. **Check DEVELOPMENT.md** — Full guide with patterns and best practices
2. **Check IMPLEMENTATION.md** — What was created and why
3. **Look at components** — Examples of how to use tokens
4. **Run `npm run type-check`** — Catch TypeScript errors

---

**Ready?** → `npm install && npm run dev` 🚀
