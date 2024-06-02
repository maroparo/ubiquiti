import { render, fireEvent } from '@testing-library/react'
import { TestWrapper } from 'test/TestWrapper.tsx'
import { vi } from 'vitest'

import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('should render correctly', () => {
    const { getByRole } = render(
      <TestWrapper>
        <Checkbox checked={false} onChange={() => {}} />
      </TestWrapper>,
    )

    const checkbox = getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()
  })

  it('should call onChange when clicked', () => {
    const handleChange = vi.fn()
    const { getByRole } = render(
      <TestWrapper>
        <Checkbox checked={false} onChange={handleChange} />
      </TestWrapper>,
    )

    const checkbox = getByRole('checkbox')
    fireEvent.click(checkbox)

    expect(handleChange).toHaveBeenCalled()
  })
})
