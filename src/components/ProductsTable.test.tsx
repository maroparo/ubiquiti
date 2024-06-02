import { render, fireEvent } from '@testing-library/react'
import { devices } from 'test/fixtures/devices.ts'
import { TestWrapper } from 'test/TestWrapper.tsx'

import { ProductsTable } from './ProductsTable'

describe('ProductsTable', () => {
  it('should render correctly', () => {
    const { getByText, getAllByText } = render(
      <TestWrapper>
        <ProductsTable
          devices={devices}
          totalDevicesTitle={`Total Devices ${devices.length}`}
        />
      </TestWrapper>,
    )

    expect(getByText(`Total Devices ${devices.length}`)).toBeInTheDocument()
    expect(getAllByText('airMAX')[0]).toBeInTheDocument()
    expect(getByText('airCube AC')).toBeInTheDocument()
  })

  it('should navigate when row is clicked', () => {
    const { getByText } = render(
      <TestWrapper>
        <ProductsTable devices={devices} totalDevicesTitle="Total Devices" />
      </TestWrapper>,
    )

    const rowElement = getByText(devices[0].product.name).closest('tr')

    if (!rowElement) {
      throw new Error('Row element not found')
    }

    fireEvent.click(rowElement)

    expect(window.location.pathname).toBe(`/product/${devices[0].id}`)
  })
})
