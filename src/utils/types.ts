import { IconProps } from 'components/Icon.tsx'

export type GenericData<T> = T

export type GenericObject = Record<string, string | string[]>

export type PaginatedResults<T> = {
  page: number
  results: GenericData<T>[]
}

export type SelectOption = {
  value: string
  label: string
}

export type IconSelectOption = SelectOption & {
  iconName: IconProps['name']
}
