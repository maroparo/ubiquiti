import styled from 'styled-components'

export const IconButtonStyled = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius.s};

  &:hover {
    background-color: ${({ theme }) => theme.color.lightGrey};
  }
`
