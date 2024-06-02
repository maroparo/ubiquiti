import { generatePath as _generatePath } from 'react-router-dom'

import { routes } from './index.tsx'
import { isArray } from 'lodash'
import { GenericObject } from '/utils/types.ts'

type StatusCodeMessageMap = {
  [code: number]: string
}

export const statusCodeMessages: StatusCodeMessageMap = {
  204: 'No content could be displayed at this moment!',
  400: 'Something went wrong! Please try again later.',
  401: 'You are not authorized to perform this action!',
  403: 'You do not have permission to access this resource!',
  404: 'The resource you requested could not be found!',
  500: 'Something happened on our end! Please try again later.',
}

export const getStatusCodeMessage = (code: number) => {
  return statusCodeMessages[code] || 'Unknown Status Code'
}

export const getRoute = (name: keyof typeof routes) => {
  return routes[name]
}

export const generatePath = (
  name: keyof typeof routes,
  params: Record<string, string | number> = {},
) => {
  return _generatePath(getRoute(name), params)
}

export const getRoutePath = (
  name: keyof typeof routes,
  params?: Record<string, string | number> | 0 | false | null,
) => {
  return params ? generatePath(name, params) : getRoute(name)
}

export const canGoBack = () => {
  return window.history.state.idx !== 0
}

export function toQueryParams<T extends GenericObject>(filters: T) {
  const params: Record<string, string> = {}

  Object.entries(filters).forEach(([key, value]) => {
    if (typeof value === 'string' && value.length > 0) {
      params[key] = value
    }

    if (isArray(value) && value.length > 0) {
      // This little trick ensures that the value is read as an array when the query params are parsed back
      params[key] = value.join(',') + ','
    }
  })

  return params
}

export function fromQueryParams<T extends GenericObject>(
  params: URLSearchParams,
) {
  const filters: Record<string, string | string[]> = {}

  params.forEach((value, key) => {
    if (value.includes(',')) {
      // In conjunction with the little trick in toQueryParams, we can now split the value back into an array
      filters[key] = value.split(',').filter((v) => v.length > 0)
    } else {
      filters[key] = value
    }
  })

  return filters as T
}
