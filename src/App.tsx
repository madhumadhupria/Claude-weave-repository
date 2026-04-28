/**
 * App Component
 * Root application component with theme provider
 */

import React from 'react'
import { ThemeProvider, GlobalStyle, theme } from '@theme'
import { Viewer3D } from '@components/Viewer3D/Viewer3D'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Viewer3D />
    </ThemeProvider>
  )
}

export default App
