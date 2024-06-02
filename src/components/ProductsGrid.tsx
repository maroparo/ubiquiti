import { Device } from 'data/types.ts'

import { ProductCard } from './ProductCard.tsx'
import {
  ProductsCount,
  ProductsGridStyled,
  Wrapper,
} from './ProductsGrid.styled.ts'

interface ProductsGridProps {
  devices: Device[]
  totalDevicesTitle: string
}

export const ProductsGrid = ({
  devices,
  totalDevicesTitle,
}: ProductsGridProps) => {
  return (
    <Wrapper>
      <ProductsCount>{totalDevicesTitle}</ProductsCount>
      <ProductsGridStyled>
        {(devices || []).map((device) => (
          <ProductCard key={device.id} device={device} />
        ))}
      </ProductsGridStyled>
    </Wrapper>
  )
}
