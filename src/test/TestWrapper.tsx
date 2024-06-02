import { PropsWithChildren } from 'react'

import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { testQueryClient } from 'test/utils.ts'

import { GlobalStyles, theme } from 'theme/theme.ts'

export const TestWrapper = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <QueryClientProvider client={testQueryClient}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  </ThemeProvider>
)
