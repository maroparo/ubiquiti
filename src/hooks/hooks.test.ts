import { renderHook, act } from '@testing-library/react'
import { generateItems } from 'test/utils.ts'

import { useLoadMore } from './useLoadMore'
import { usePopover } from './usePopover.ts'
import { usePrevious } from './usePrevious.ts'
import { useSetPageTitle } from './useSetPageTitle.ts'
import { useToggleValues } from './useToggleValues'

describe('useLoadMore', () => {
  it('should initially display the first batch of items', () => {
    const items = generateItems(30)
    const { result } = renderHook(() => useLoadMore(items, 10))

    expect(result.current.itemsOnDisplay).toEqual(generateItems(10))

    expect(result.current.hasMore).toBe(true)
  })

  it('should load more items when loadMore is called', () => {
    const items = generateItems(30)
    const { result } = renderHook(() => useLoadMore(items, 10))

    act(() => {
      result.current.loadMore()
    })

    expect(result.current.itemsOnDisplay).toEqual(generateItems(20))

    expect(result.current.hasMore).toBe(true)
  })

  it('should indicate when there are no more items to load', () => {
    const items = generateItems(20)
    const { result } = renderHook(() => useLoadMore(items, 10))

    act(() => {
      result.current.loadMore()
    })

    expect(result.current.itemsOnDisplay).toEqual(generateItems(20))
    expect(result.current.hasMore).toBe(false)
  })
})

describe('usePopover', () => {
  it('should initially set isOpen to false', () => {
    const { result } = renderHook(() => usePopover())

    expect(result.current.isOpen).toBe(false)
  })

  it('should toggle isOpen when onHandlePress is called', () => {
    const { result } = renderHook(() => usePopover())

    act(() => {
      result.current.onHandlePress()
    })

    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.onHandlePress()
    })

    expect(result.current.isOpen).toBe(false)
  })

  it('should set isOpen to false when onClose is called', () => {
    const { result } = renderHook(() => usePopover())

    act(() => {
      result.current.onHandlePress()
    })

    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.onClose()
    })

    expect(result.current.isOpen).toBe(false)
  })
})

describe('usePrevious', () => {
  it('should return the previous value', () => {
    let value = 0
    const { result, rerender } = renderHook(() => usePrevious(value))

    expect(result.current).toBeUndefined()

    value = 1
    rerender()

    expect(result.current).toBe(0)

    value = 2
    rerender()

    expect(result.current).toBe(1)
  })
})

describe('useSetPageTitle', () => {
  it('should set the document title', () => {
    renderHook(() => useSetPageTitle('Test Title'))

    expect(document.title).toBe('Test Title')
  })
})

describe('useToggleValues', () => {
  it('should toggle values correctly', () => {
    const { result } = renderHook(() => useToggleValues(['test1']))

    expect(result.current[0]).toEqual(['test1'])

    act(() => {
      result.current[1]('test2')
    })

    expect(result.current[0]).toEqual(['test1', 'test2'])

    act(() => {
      result.current[1]('test1')
    })

    expect(result.current[0]).toEqual(['test2'])
  })
})
