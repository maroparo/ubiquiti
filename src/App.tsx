import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { router } from 'routes'
import { queryClient } from 'data/queryClient.ts'
import { useSetPageTitle } from 'hooks/useSetPageTitle.ts'
import { GlobalStyles, theme } from 'theme/theme.ts'

function App() {
  useSetPageTitle('Ubiquiti Devices')

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
