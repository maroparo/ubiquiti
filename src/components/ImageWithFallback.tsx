import { ImgHTMLAttributes, useState } from 'react'

import { ImageWithFallbackStyled } from './ImageWithFallback.styled.ts'

export const ImageWithFallback = ({
  src,
  ...other
}: ImgHTMLAttributes<HTMLImageElement>) => {
  const [hasError, setHasError] = useState(false)

  return (
    <ImageWithFallbackStyled
      onError={() => setHasError(true)}
      src={!hasError ? src : '/fallback.png'}
      {...other}
    />
  )
}
