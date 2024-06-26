import { useMemo, useState } from 'react'

import { isEqual } from 'lodash'

import { useDevices } from 'data/queries/useDevices.tsx'
import { Device } from 'data/types.ts'
import { useQueryParameters } from 'hooks/useQueryParams.ts'
import { IconSelectOption } from 'utils/types.ts'

export type DeviceFilters = {
  searchTerm: string
  displayOption: string
  selectedProductLines: string[]
}

export const displayOptions: IconSelectOption[] = [
  { value: 'list', label: 'List', iconName: 'list' },
  { value: 'grid', label: 'Grid', iconName: 'grid' },
]

export const initialDeviceFilters: DeviceFilters = {
  searchTerm: '',
  displayOption: displayOptions[0].value,
  selectedProductLines: [],
}

export const useFilterDevices = () => {
  const { queryParams, setQueryParams } = useQueryParameters<DeviceFilters>()
  const { data, ...other } = useDevices()

  const [filters, setFilters] = useState<DeviceFilters>({
    ...initialDeviceFilters,
    ...queryParams,
  })

  const filteredDevices = useMemo(() => {
    if (!data) return []
    const { searchTerm, selectedProductLines } = filters

    let devices = data.devices

    if (selectedProductLines.length > 0) {
      devices = filterByLine(devices, selectedProductLines)
    }

    return searchByTerm(devices, searchTerm)
  }, [data, filters])

  const handleOnChangeFilters = (newFilters: Partial<DeviceFilters>) => {
    setFilters((prevFilters) => {
      const filters = { ...prevFilters, ...newFilters }
      setQueryParams(filters)
      return filters
    })
  }

  return {
    ...other,
    filters,
    devices: filteredDevices,
    onChange: handleOnChangeFilters,
    isFiltering: !isEqual(filters, initialDeviceFilters),
  }
}

export const filterByLine = (
  devices: Device[],
  selectedProductLines: string[],
): Device[] => {
  return devices.filter(({ line }) => {
    return selectedProductLines.includes(line.id)
  })
}

export const searchByTerm = (
  devices: Device[],
  searchTerm: string,
): Device[] => {
  return devices.filter(({ line, product }) => {
    const values = [line.name, product.name]
    return values.some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  })
}
