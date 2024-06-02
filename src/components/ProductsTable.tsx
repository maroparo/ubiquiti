import { useNavigate } from 'react-router-dom'

import { routeMap } from 'routes'
import { Device } from 'data/types.ts'
import { getDeviceImageSource } from 'utils/images.ts'

import { ImageWithFallback } from './ImageWithFallback.tsx'
import { ProductsTableStyled } from './ProductsTable.styled.ts'

interface ProductsTableProps {
  devices: Device[]
  totalDevicesTitle: string
}

export const ProductsTable = ({
  devices,
  totalDevicesTitle,
}: ProductsTableProps) => {
  const navigate = useNavigate()

  return (
    <>
      <ProductsTableStyled>
        <thead>
          <tr>
            <th>{totalDevicesTitle}</th>
            <th>Product Line</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device) => (
            <tr
              key={device.id}
              onClick={() => navigate(routeMap.product(device.id))}
            >
              <td>
                <ImageWithFallback src={getDeviceImageSource(device.icon, 0)} />
              </td>
              <td>{device.line.name}</td>
              <td>{device.product.name}</td>
            </tr>
          ))}
        </tbody>
      </ProductsTableStyled>
    </>
  )
}
