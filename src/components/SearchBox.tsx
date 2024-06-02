import { ChangeEvent } from 'react'

import { Icon } from './Icon.tsx'
import { IconButton } from './IconButton.tsx'
import { SearchBoxStyled } from './SearchBox.styles.ts'

interface SearchBoxProps {
  onSearchTermChange: (searchTerm: string) => void
  value?: string
}

export const SearchBox = ({ onSearchTermChange, value }: SearchBoxProps) => {
  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value
    onSearchTermChange(searchTerm)
  }

  const handleClearSearch = () => {
    onSearchTermChange('')
  }

  return (
    <SearchBoxStyled>
      <Icon name="search" />
      <input
        type="text"
        placeholder="Search"
        value={value}
        data-testid="search-box"
        onChange={handleSearchTermChange}
      />
      <IconButton iconName="close" onClick={handleClearSearch} />
    </SearchBoxStyled>
  )
}
