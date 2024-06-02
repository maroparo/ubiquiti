import { Button } from './Button.tsx'
import { Checkbox } from './Checkbox.tsx'
import { IconButton } from './IconButton.tsx'
import { PopoverProps } from './Popover.tsx'
import {
  PopoverHeader,
  PopoverContainer,
  PopoverMenuStyled,
  PopoverStyled,
} from './PopoverMenu.styled.ts'

export type MenuItem = {
  label: string
  checked?: boolean
  onClick: () => void
}

interface PopoverMenuProps extends Omit<PopoverProps, 'children'> {
  title: string
  menuHeader?: string
  items?: MenuItem[]
}

export const PopoverMenu = ({
  title,
  menuHeader,
  items = [],
  ...popoverProps
}: PopoverMenuProps) => {
  return (
    <PopoverStyled {...popoverProps}>
      <PopoverHeader>
        <h4>{title}</h4>
        <IconButton iconName="close" onClick={popoverProps.onClose} />
      </PopoverHeader>
      <PopoverContainer>
        {menuHeader && <h4>{menuHeader}</h4>}
        <PopoverMenuStyled>
          {items.map(({ label, onClick, checked = false }) => (
            <li key={label}>
              <Checkbox checked={checked} value={label} onChange={onClick} />
              <Button variant="text" title={label} onClick={onClick} />
            </li>
          ))}
        </PopoverMenuStyled>
      </PopoverContainer>
    </PopoverStyled>
  )
}
