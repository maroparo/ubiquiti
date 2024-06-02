import { GenericData, PaginatedResults } from '/utils/types.ts'

export function getClosestIndex<T>(arr: T[] | undefined, index: number) {
  if (!arr || arr.length === 0) {
    return
  }

  if (index < 0) {
    return arr[0]
  }

  if (index < arr.length) {
    return arr[index]
  }

  const closestIndex = arr.length - 1

  return arr[closestIndex]
}

export function paginate<T>(
  results: GenericData<T>[],
  itemsPerPage: number,
): PaginatedResults<T>[] {
  const totalPages = Math.ceil(results.length / itemsPerPage)
  const paginatedResults: PaginatedResults<T>[] = []

  for (let page = 0; page < totalPages; page++) {
    const startIndex = page * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const pageResults = results.slice(startIndex, endIndex)

    paginatedResults.push({
      page: page + 1,
      results: pageResults,
    })
  }

  return paginatedResults
}
