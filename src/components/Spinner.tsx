import { Size, SpinnerStyled } from './Spinner.styled.ts'

interface SpinnerProps {
  size?: Size
}

export const Spinner = ({ size = 'large' }: SpinnerProps) => {
  return <SpinnerStyled data-testid="spinner" $size={size} />
}
