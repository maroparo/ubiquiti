import { generatePath as _generatePath } from 'react-router-dom'

import { routes } from './index.tsx'

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
