import { QueryClient } from '@tanstack/react-query'

export const generateItems = (count: number) =>
  Array.from({ length: count }, (_, i) => i)

export const testQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})
