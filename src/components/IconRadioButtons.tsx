import { useCallback, useState } from 'react'

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
}

export const IconRadioButtons = ({
  options,
  onChange,
}: IconRadioButtonsProps) => {
  const { color } = useTheme()
  const [selectedValue, setSelectedValue] = useState(options[0].value)

  const renderIcon = useCallback(
    ({ value, label, iconName }: IconSelectOption) => {
      const isSelected = selectedValue === value

      const outlineIcon = `${iconName}-outlined` as IconProps['name']
      const outlineIconExists = iconExists(outlineIcon)
      const icon = outlineIconExists && !isSelected ? outlineIcon : iconName

      return (
        <IconButtonStyled
          $selected={isSelected}
          disabled={isSelected}
          key={value}
          title={label}
          iconName={icon}
          color={color.grey}
          onClick={() => {
            setSelectedValue(value)
            onChange(value)
          }}
        />
      )
    },
    [color, onChange, selectedValue],
  )

  return (
    <IconRadioButtonsStyled>{options.map(renderIcon)}</IconRadioButtonsStyled>
  )
}
