import { GenericData, PaginatedResults } from 'utils/types.ts'

import { getClosestIndex, paginate } from './parsing'

describe('getClosestIndex', () => {
  it('should return undefined for empty array', () => {
    expect(getClosestIndex(undefined, 5)).toBeUndefined()
    expect(getClosestIndex([], 10)).toBeUndefined()
  })

  it('should return first element for negative index', () => {
    expect(getClosestIndex([1, 2, 3], -1)).toBe(1)
  })

  it('should return element at index for valid index', () => {
    expect(getClosestIndex([10, 20, 30], 1)).toBe(20)
  })

  it('should return last element for out-of-bounds index', () => {
    expect(getClosestIndex([100, 200, 300], 10)).toBe(300)
  })
})

describe('paginate', () => {
  it('should return empty array for empty results', () => {
    const results: GenericData<string>[] = []
    const itemsPerPage = 10

    expect(paginate(results, itemsPerPage)).toEqual([])
  })

  it('should return single page for results less than itemsPerPage', () => {
    const results: GenericData<number>[] = [1, 2, 3]
    const itemsPerPage = 5
    const expected: PaginatedResults<number>[] = [{ page: 1, results: results }]

    expect(paginate(results, itemsPerPage)).toEqual(expected)
  })

  it('should create multiple pages for results exceeding itemsPerPage', () => {
    const results: GenericData<boolean>[] = [true, false, true, false, true]
    const itemsPerPage = 3
    const expected: PaginatedResults<boolean>[] = [
      { page: 1, results: results.slice(0, 3) },
      { page: 2, results: results.slice(3) },
    ]

    expect(paginate(results, itemsPerPage)).toEqual(expected)
  })

  it('should handle exact page division for results matching itemsPerPage', () => {
    const results: GenericData<string>[] = ['a', 'b', 'c', 'd', 'e']
    const itemsPerPage = 5
    const expected: PaginatedResults<string>[] = [
      { page: 1, results: results.slice(0, 5) },
    ]

    expect(paginate(results, itemsPerPage)).toEqual(expected)
  })
})
