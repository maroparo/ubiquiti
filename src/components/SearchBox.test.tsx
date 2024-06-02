import { render, fireEvent } from '@testing-library/react'
import { TestWrapper } from 'test/TestWrapper.tsx'
import { vi } from 'vitest'

import { SearchBox } from './SearchBox'

describe('SearchBox', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <TestWrapper>
        <SearchBox onSearchTermChange={() => {}} />,
      </TestWrapper>,
    )

    expect(getByTestId('search-box')).toBeInTheDocument()
  })

  it('should call onSearchTermChange prop when input value changes', () => {
    const handleSearchTermChange = vi.fn()
    const { getByTestId } = render(
      <TestWrapper>
        <SearchBox onSearchTermChange={handleSearchTermChange} />
      </TestWrapper>,
    )

    fireEvent.change(getByTestId('search-box'), {
      target: { value: 'test' },
    })

    expect(handleSearchTermChange).toHaveBeenCalledWith('test')
  })
})
