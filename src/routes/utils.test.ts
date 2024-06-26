import { routes } from 'routes/index.tsx'
import {
  canGoBack,
  fromQueryParams,
  generatePath,
  getRoute,
  getRoutePath,
  getStatusCodeMessage,
  statusCodeMessages,
  toQueryParams,
} from 'routes/utils.ts'

describe('getRoute', () => {
  Object.keys(routes).forEach((routeKey) => {
    it(`should return correct route for ${routeKey}`, () => {
      const key = routeKey as keyof typeof routes
      const result = getRoute(key)
      expect(result).toBe(routes[key])
    })
  })
})

describe('generatePath', () => {
  it('should generate correct path for given route name and parameters', () => {
    const routeName = 'product'
    const params = { productId: '123' }
    const result = generatePath(routeName as keyof typeof routes, params)
    expect(result).toBe('/product/123')
  })
})

describe('getRoutePath', () => {
  it('should return correct path for given route name and parameters', () => {
    const routeName = 'product'
    const params = { productId: '123' }
    const result = getRoutePath(routeName as keyof typeof routes, params)
    expect(result).toBe('/product/123')
  })

  it('should return correct route for given route name without parameters', () => {
    const routeName = 'home'
    const result = getRoutePath(routeName as keyof typeof routes)
    expect(result).toBe('/home')
  })
})

describe('getStatusCodeMessage', () => {
  Object.keys(statusCodeMessages).forEach((code) => {
    it(`should return correct message for status code ${code}`, () => {
      const result = getStatusCodeMessage(Number(code))
      expect(result).toBe(statusCodeMessages[Number(code)])
    })
  })

  it('should return "Unknown Status Code" for status code not in messages', () => {
    const result = getStatusCodeMessage(999)
    expect(result).toBe('Unknown Status Code')
  })
})

describe('canGoBack', () => {
  it('should return true when window.history.state.idx is not 0', () => {
    // Mock window.history.state.idx
    Object.defineProperty(window, 'history', {
      value: {
        state: { idx: 1 },
      },
      writable: true,
    })

    const result = canGoBack()
    expect(result).toBe(true)
  })

  it('should return false when window.history.state.idx is 0', () => {
    Object.defineProperty(window, 'history', {
      value: {
        state: { idx: 0 },
      },
      writable: true,
    })

    const result = canGoBack()
    expect(result).toBe(false)
  })
})

describe('toQueryParams', () => {
  it('should correctly convert an object with string and array values into a record of strings', () => {
    const filters = {
      searchTerm: 'test',
      selectedProductLines: ['line1', 'line2'],
    }

    const result = toQueryParams(filters)
    expect(result).toEqual({
      searchTerm: 'test',
      selectedProductLines: 'line1,line2,',
    })
  })
})

describe('fromQueryParams', () => {
  it('should correctly convert URLSearchParams with string values into a record of strings', () => {
    const params = new URLSearchParams()
    params.set('searchTerm', 'test')

    const result = fromQueryParams(params)
    expect(result).toEqual({
      searchTerm: 'test',
    })
  })

  it('should correctly convert URLSearchParams with comma-separated values into a record of string arrays', () => {
    const params = new URLSearchParams('selectedProductLines=line1,line2')

    const result = fromQueryParams(params)
    expect(result).toEqual({
      selectedProductLines: ['line1', 'line2'],
    })
  })
})
