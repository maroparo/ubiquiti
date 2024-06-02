import { fireEvent, render } from '@testing-library/react'
import { devices } from 'test/fixtures/devices.ts'
import { TestWrapper } from 'test/TestWrapper.tsx'

import { ProductsGrid } from './ProductsGrid.tsx'

describe('ProductsGrid', () => {
  it('should render correctly', () => {
    const { getByText, getAllByText } = render(
      <TestWrapper>
        <ProductsGrid
          devices={devices}
          totalDevicesTitle={`Total Devices ${devices.length}`}
        />
      </TestWrapper>,
    )

    expect(getByText(`Total Devices ${devices.length}`)).toBeInTheDocument()
    expect(getAllByText('airMAX')[0]).toBeInTheDocument()
    expect(getByText('airCube AC')).toBeInTheDocument()
  })

  it('should navigate when card is clicked', () => {
    const { getAllByTestId } = render(
      <TestWrapper>
        <ProductsGrid devices={devices} totalDevicesTitle="Total Devices" />
      </TestWrapper>,
    )

    const rowElement = getAllByTestId('product-card')[0]

    if (!rowElement) {
      throw new Error('Row element not found')
    }

    fireEvent.click(rowElement)

    expect(window.location.pathname).toBe(`/product/${devices[0].id}`)
  })
})
