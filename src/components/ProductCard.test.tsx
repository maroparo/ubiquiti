import { render } from '@testing-library/react'
import { devices } from 'test/fixtures/devices.ts'
import { TestWrapper } from 'test/TestWrapper.tsx'

import { ProductCard } from './ProductCard'

describe('ProductCard', () => {
  it('should render correctly', () => {
    const { getByText, getByTestId } = render(
      <TestWrapper>
        <ProductCard device={devices[0]} />
      </TestWrapper>,
    )

    expect(getByTestId('product-card')).toBeInTheDocument()
    expect(getByText(devices[0].product.name)).toBeInTheDocument()
    expect(getByText(devices[0].product.name)).toBeInTheDocument()
  })
})
