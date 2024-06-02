import { ChangeEvent, useState } from 'react'

import { Icon } from './Icon.tsx'
import { IconButton } from './IconButton.tsx'
import { SearchBoxStyled } from './SearchBox.styles.ts'

interface SearchBoxProps {
  onSearchTermChange: (searchTerm: string) => void
}

export const SearchBox = ({ onSearchTermChange }: SearchBoxProps) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value
    setSearchTerm(searchTerm)
    onSearchTermChange(searchTerm)
  }

  const handleClearSearch = () => {
    setSearchTerm('')
    onSearchTermChange('')
  }

  return (
    <SearchBoxStyled>
      <Icon name="search" />
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        data-testid="search-box"
        onChange={handleSearchTermChange}
      />
      <IconButton iconName="close" onClick={handleClearSearch} />
    </SearchBoxStyled>
  )
}
