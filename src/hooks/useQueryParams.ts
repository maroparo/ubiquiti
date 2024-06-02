import { useEffect, useMemo, useState } from 'react'

import { useSearchParams } from 'react-router-dom'

import { fromQueryParams, toQueryParams } from 'routes/utils.ts'
import { GenericObject } from 'utils/types.ts'

export function useQueryParameters<T extends GenericObject>() {
  const [searchParams, setSearchParams] = useSearchParams()

  const existingQueryParams = useMemo(
    () => fromQueryParams<GenericObject>(new URLSearchParams(searchParams)),
    [searchParams],
  )

  const [params, setParams] = useState(existingQueryParams)

  const handleSetParams = (newParams: T) => {
    const params = new URLSearchParams(searchParams)
    const newParsedParams = toQueryParams(newParams)

    setParams(newParsedParams)
    Object.entries(newParsedParams).forEach(([key, value]) =>
      params.set(key, value),
    )
  }

  useEffect(() => {
    setSearchParams(params)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  return {
    queryParams: existingQueryParams,
    setQueryParams: handleSetParams,
  }
}
