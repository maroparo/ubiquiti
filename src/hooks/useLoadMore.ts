import { useEffect, useMemo, useState } from 'react'

import { paginate } from 'utils/parsing.ts'
import { GenericData } from 'utils/types.ts'

export function useLoadMore<T>(items: T[] = [], batchCount: number = 15) {
  const [itemsOnDisplay, setItemsOnDisplay] = useState<GenericData<T>[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  const pages = useMemo(() => paginate(items, batchCount), [batchCount, items])

  useEffect(() => {
    const itemsToDisplay = pages
      .slice(0, currentPage)
      .flatMap((item) => item.results)

    setItemsOnDisplay(itemsToDisplay)
  }, [currentPage, pages])

  return {
    itemsOnDisplay,
    hasMore: currentPage < pages.length,
    loadMore: () => setCurrentPage((prev) => prev + 1),
  }
}
