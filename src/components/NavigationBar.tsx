import { useGoBack } from 'hooks/useGoBack.ts'
import { canGoBack } from 'routes/utils.ts'

import { IconButton } from './IconButton.tsx'
import { NavigationBarStyled } from './NavigationBar.styled.ts'

interface NavigationBarProps {
  title?: string
}

export const NavigationBar = ({ title }: NavigationBarProps) => {
  const goBack = useGoBack()

  return (
    <NavigationBarStyled>
      {canGoBack() && <IconButton iconName="chevron-back" onClick={goBack} />}
      <div>{title && <span>{title}</span>}</div>
    </NavigationBarStyled>
  )
}
