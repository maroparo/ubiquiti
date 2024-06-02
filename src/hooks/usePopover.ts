import { useState } from 'react'

export const usePopover = () => {
  const [isOpen, setIsOpen] = useState(false)

  return {
    isOpen,
    onHandlePress: () => {
      setIsOpen((prev) => !prev)
    },
    onClose: () => {
      setIsOpen(false)
    },
  }
}
