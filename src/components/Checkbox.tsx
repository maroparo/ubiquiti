import { ButtonHTMLAttributes } from 'react'

import { useTheme } from 'styled-components'

import { Container, HiddenCheckboxInput, Indicator } from './Checkbox.styled.ts'
import { Icon } from './Icon.tsx'

interface CheckboxProps extends ButtonHTMLAttributes<HTMLInputElement> {
  checked: boolean
}

export const Checkbox = ({ value, checked, onChange }: CheckboxProps) => {
  const { color } = useTheme()

  return (
    <Container>
      <HiddenCheckboxInput
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <Indicator $checked={checked}>
        {checked && <Icon color={color.white} name="check" />}
      </Indicator>
    </Container>
  )
}
