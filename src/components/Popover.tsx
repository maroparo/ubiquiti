import { PropsWithChildren, ReactNode, useRef } from 'react'

import { useOnClickOutside } from 'usehooks-ts'

import { PopoverContent, PopoverStyled } from './Popover.styled.ts'

export interface PopoverProps {
  from: ReactNode
  onClose: () => void
  className?: string
  isOpen: boolean
}

export const Popover = ({
  children,
  from,
  onClose,
  className,
  isOpen = false,
}: PropsWithChildren<PopoverProps>) => {
  const ref = useRef(null)

  useOnClickOutside(ref, onClose)

  return (
    <PopoverStyled ref={ref} className={className}>
      {from}
      {isOpen && <PopoverContent>{children}</PopoverContent>}
    </PopoverStyled>
  )
}
