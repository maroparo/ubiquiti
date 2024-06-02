import styled from 'styled-components'

import { addAlpha, spacing } from 'theme/utils.ts'

export const ProductsTableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
  color: ${({ theme }) => addAlpha(theme.color.black, 0.8)};

  thead tr th {
    text-transform: uppercase;
    color: ${({ theme }) => addAlpha(theme.color.black, 0.8)};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 700;

    &:nth-child(1) {
      width: 130px;
    }

    &:nth-child(2) {
      width: 226px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
      font-size: ${({ theme }) => theme.fontSize.xs};

      &:nth-child(2) {
        width: 100px;
      }
    }
  }

  th,
  tr {
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey3};
    text-align: left;
  }

  tr {
    height: ${spacing(4)};

    > td:first-of-type {
      img {
        margin: 0 auto;
        height: 26px;
        width: 26px;
      }
    }

    &:last-of-type td {
      border-bottom: none;
    }
  }

  th:first-of-type {
    text-transform: unset;
    text-align: center;
    color: ${({ theme }) => theme.color.lightGrey5};
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  tbody {
    & > tr:nth-of-type(even) {
      background-color: ${({ theme }) => theme.color.lightGrey4};
    }

    tr:hover {
      cursor: pointer;
      background-color: ${({ theme }) => addAlpha(theme.color.primary, 0.1)};
    }
  }
`
