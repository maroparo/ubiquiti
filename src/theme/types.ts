import { icons } from './icons.ts'
import { theme } from './theme.ts'

export type Theme = typeof theme

export type IconName = keyof typeof icons
