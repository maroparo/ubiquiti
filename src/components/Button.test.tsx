import { render, fireEvent } from '@testing-library/react'
import { TestWrapper } from 'test/TestWrapper.tsx'
import { vi } from 'vitest'

import { Button } from './Button'

describe('Button', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <TestWrapper>
        <Button title="Test Button" />
      </TestWrapper>,
    )

    expect(getByText('Test Button')).toBeInTheDocument()
  })

  it('should call onClick when clicked', () => {
    const handleClick = vi.fn()
    const { getByText } = render(
      <TestWrapper>
        <Button title="Test Button" onClick={handleClick} />
      </TestWrapper>,
    )

    fireEvent.click(getByText('Test Button'))

    expect(handleClick).toHaveBeenCalled()
  })

  it('should show loading state when isLoading is true', () => {
    const { getByTestId } = render(
      <TestWrapper>
        <Button title="Test Button" onClick={() => {}} isLoading={true} />
      </TestWrapper>,
    )

    expect(getByTestId('spinner')).toBeInTheDocument()
  })

  it('should render icon when icon prop is provided', () => {
    const { container } = render(
      <TestWrapper>
        <Button title="Test Button" onClick={() => {}} iconName="close" />
      </TestWrapper>,
    )

    const button = container.firstChild as Element
    expect(button).toBeInTheDocument()

    if (button) {
      const svg = button.querySelector('svg')
      expect(svg).toBeInTheDocument()
    }
  })
})
