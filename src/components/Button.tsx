import { ButtonHTMLAttributes } from 'react'

import { IconName } from 'theme/types.ts'

import { ButtonStyled, ButtonVariant, LoadingOverlay } from './Button.styled.ts'
import { Icon } from './Icon.tsx'
import { Spinner } from './Spinner.tsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  variant?: ButtonVariant
  iconName?: IconName
  isLoading?: boolean
}

export const Button = ({
  title,
  variant = 'filled',
  iconName,
  isLoading = false,
  disabled,
  ...other
}: ButtonProps) => {
  return (
    <ButtonStyled
      $variant={variant}
      $isLoading={isLoading}
      disabled={isLoading || disabled}
      {...other}
    >
      <p>{title}</p>
      {iconName && <Icon name={iconName} />}
      {isLoading && (
        <LoadingOverlay>
          <Spinner size="small" />
        </LoadingOverlay>
      )}
    </ButtonStyled>
  )
}
