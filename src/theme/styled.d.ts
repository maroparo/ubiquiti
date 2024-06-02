import 'styled-components'
import { Theme } from './types.ts'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
