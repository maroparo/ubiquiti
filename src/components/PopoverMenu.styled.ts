import styled from 'styled-components'

import { spacing } from 'theme/utils.ts'

import { PopoverContent } from './Popover.styled.ts'
import { Popover } from './Popover.tsx'

export const PopoverStyled = styled(Popover)`
  ${PopoverContent} {
    min-width: 250px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.color.white};
    margin-top: ${spacing(0.5)};
    box-shadow: 0 12px 48px 0 rgba(0, 0, 0, 0.15);
    border: 1px solid ${({ theme }) => theme.color.lightGrey2};
    border-radius: ${({ theme }) => theme.borderRadius.s};

    h4 {
      font-size: ${({ theme }) => theme.fontSize.m};
      font-weight: 700;
    }
  }
`

export const PopoverHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: ${spacing(6)};
  padding: 0 ${spacing(2)} 0 ${spacing(3)};
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey2};

  h4 {
    color: ${({ theme }) => theme.color.grey};
    font-weight: 400;
  }

  button {
    &:hover {
      background-color: ${({ theme }) => theme.color.lightGrey2};
    }
  }
`

export const PopoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2.5)};
  padding: ${spacing(3)};
  max-height: 350px;
  overflow-y: scroll;

  h4 {
    color: ${({ theme }) => theme.color.grey};
    font-weight: 400;
  }
`

export const PopoverMenuStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1.5)};

  button {
    width: 100%;
    text-align: left;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${spacing(2)};

    button {
      justify-content: flex-start;
    }
  }
`
