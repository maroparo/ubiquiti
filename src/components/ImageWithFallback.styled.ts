import styled from 'styled-components'

export const ImageWithFallbackStyled = styled.img`
  background-color: ${({ theme }) => theme.color.imageBackground};
`
