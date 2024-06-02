import { useCallback } from 'react'

import { useTheme } from 'styled-components'

import { iconExists } from 'theme/utils.ts'
import { IconSelectOption, SelectOption } from 'utils/types.ts'

import { IconProps } from './Icon.tsx'
import {
  IconButtonStyled,
  IconRadioButtonsStyled,
} from './IconRadioButtons.styled.ts'

interface IconRadioButtonsProps {
  options: IconSelectOption[]
  onChange: (value: SelectOption['value']) => void
  value?: string
}

export const IconRadioButtons = ({
  options,
  onChange,
  value,
}: IconRadioButtonsProps) => {
  const { color } = useTheme()

  const renderIcon = useCallback(
    ({ value: optionValue, label, iconName }: IconSelectOption) => {
      const isSelected = optionValue === value

      const outlineIcon = `${iconName}-outlined` as IconProps['name']
      const outlineIconExists = iconExists(outlineIcon)
      const icon = outlineIconExists && !isSelected ? outlineIcon : iconName

      return (
        <IconButtonStyled
          $selected={isSelected}
          disabled={isSelected}
          key={optionValue}
          title={label}
          iconName={icon}
          color={color.grey}
          onClick={() => {
            onChange(optionValue)
          }}
        />
      )
    },
    [color.grey, onChange, value],
  )

  return (
    <IconRadioButtonsStyled>{options.map(renderIcon)}</IconRadioButtonsStyled>
  )
}
