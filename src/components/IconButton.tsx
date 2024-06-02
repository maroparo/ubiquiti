import { ButtonHTMLAttributes } from 'react'

import { Icon, IconProps } from './Icon.tsx'
import { IconButtonStyled } from './IconButton.styled.ts'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: IconProps['name']
  color?: string
}

export const IconButton = ({ iconName, color, ...other }: IconButtonProps) => {
  return (
    <IconButtonStyled {...other}>
      <Icon name={iconName} color={color} />
    </IconButtonStyled>
  )
}
