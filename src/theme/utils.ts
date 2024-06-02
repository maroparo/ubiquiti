import { icons } from './icons.ts'

export const spacing = (value: number) => {
  return `${value * 8}px`
}

export const addAlpha = (color: string, opacity = 1) => {
  const _opacity = Math.round(Math.min(Math.max(opacity ?? 1, 0), 1) * 255)
  return color + _opacity.toString(16).toUpperCase()
}

export const iconExists = (iconName: string) => {
  return Object.prototype.hasOwnProperty.call(icons, iconName)
}
