import { routeMap } from 'routes'
import { Device } from 'data/types.ts'
import { getDeviceImageSource } from 'utils/images.ts'

import { ImageWithFallback } from './ImageWithFallback.tsx'
import {
  ImageContainer,
  ProductCardStyled,
  ProductDescription,
} from './ProductCard.styled.ts'

interface ProductCardProps {
  device: Device
}

export const ProductCard = ({ device }: ProductCardProps) => {
  return (
    <ProductCardStyled
      to={routeMap.product(device.id)}
      data-testid="product-card"
    >
      <ImageContainer>
        <ImageWithFallback src={getDeviceImageSource(device.icon, 7)} />
      </ImageContainer>
      <ProductDescription>
        <h3>{device.product.name}</h3>
        <span>{device.line.name}</span>
      </ProductDescription>
    </ProductCardStyled>
  )
}
