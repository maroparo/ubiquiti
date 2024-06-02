import styled from 'styled-components'

import { addAlpha, spacing } from 'theme/utils.ts'

export const PageContainerStyled = styled.div`
  --min-card-width: 400px;

  display: flex;
  margin: 0 auto;
  justify-content: center;
  gap: ${spacing(3)};

  img {
    margin: auto 0;

    box-shadow: -7px 7px 11px 1px rgba(0, 0, 0, 0.15);
    border: 1px solid ${({ theme }) => theme.color.lightGrey3};
    border-radius: ${({ theme }) => theme.borderRadius.s};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    max-width: var(--min-card-width) !important;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;

    img {
      margin: 0;
    }
  }
`

export const ProductInfoCard = styled.div`
  margin: auto 0;
  min-width: var(--min-card-width);

  div {
    min-height: ${spacing(4)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey3};

    &:hover {
      background-color: ${({ theme }) => addAlpha(theme.color.primary, 0.1)};
    }

    span {
      font-size: ${({ theme }) => theme.fontSize.m};
      color: ${({ theme }) => addAlpha(theme.color.black, 0.65)};
      font-weight: 400;

      &:last-child {
        color: ${({ theme }) => theme.color.black};
        font-weight: 600;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    margin: 0;
    min-width: unset;
    max-width: var(--min-card-width);
    width: 100%;

    div {
      flex-direction: column;
      align-items: flex-start;

      span {
        font-size: ${({ theme }) => theme.fontSize.xs};
        &:last-child {
          font-size: ${({ theme }) => theme.fontSize.m};
        }
      }
    }
  }
`
