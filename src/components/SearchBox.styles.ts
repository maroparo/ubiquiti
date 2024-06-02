import styled from 'styled-components'

import { spacing } from 'theme/utils.ts'

export const SearchBoxStyled = styled.div`
  height: ${spacing(4)};
  width: 344px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.lightGrey};
  border-radius: ${({ theme }) => theme.borderRadius.s};
  overflow: hidden;

  svg,
  button {
    z-index: 1;
  }

  > svg:first-child {
    margin-left: ${spacing(1)};
  }

  button {
    margin-right: ${spacing(1)};
    border-radius: ${({ theme }) => theme.borderRadius.s};

    &:hover {
      background-color: ${({ theme }) => theme.color.lightGrey2};
    }
  }

  input[type='text'] {
    background-color: inherit;
    position: absolute;
    padding-left: ${spacing(4)};
    padding-right: ${spacing(3.5)};
    border: none;
    width: 100%;
    height: 100%;

    &:hover {
      background-color: ${({ theme }) => theme.color.lightGrey3};
    }

    &:focus-visible {
      outline: none;
      border-radius: ${({ theme }) => theme.borderRadius.s};
      border: 1px solid ${({ theme }) => theme.color.primary};
    }
  }
`
