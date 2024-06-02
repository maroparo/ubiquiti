import { useEffect, useMemo, useState } from 'react'

import { useDevices } from 'data/queries/useDevices.tsx'
import { Device } from 'data/types.ts'
import { usePopover } from 'hooks/usePopover.ts'
import { useToggleValues } from 'hooks/useToggleValues.ts'
import {
  DeviceFilters,
  displayOptions,
  initialDeviceFilters,
} from 'pages/Home/hooks/useFilterDevices.ts'

import { Button } from './Button.tsx'
import { FiltersStyled, RightAdornment } from './Filters.styles.ts'
import { IconRadioButtons } from './IconRadioButtons.tsx'
import { MenuItem, PopoverMenu } from './PopoverMenu.tsx'
import { SearchBox } from './SearchBox.tsx'

interface FiltersProps {
  onFiltersChange: (filters: DeviceFilters) => void
}

export const Filters = ({ onFiltersChange }: FiltersProps) => {
  const { data, isLoading } = useDevices()

  const [filters, setFilters] = useState<DeviceFilters>(initialDeviceFilters)

  useEffect(() => onFiltersChange(filters), [filters, onFiltersChange])

  const [selectedProductLines, toggleSelectedProductLines] = useToggleValues([])

  const filtersOptions = useMemo(() => {
    return aggregateFiltersFromDevicesList(data?.devices)
  }, [data])

  const filterOptions: MenuItem[] = useMemo(() => {
    if (!data) {
      return []
    }

    return filtersOptions.map(({ label, value }) => ({
      label,
      checked: selectedProductLines.includes(value),
      onClick: () => toggleSelectedProductLines(value),
    }))
  }, [data, filtersOptions, selectedProductLines, toggleSelectedProductLines])

  useEffect(() => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      selectedProductLines,
    }))
  }, [selectedProductLines])

  const handleSearchTermChange = (searchTerm: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, searchTerm }))
  }

  const handleDisplayOptionChange = (displayOption: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, displayOption }))
  }

  const {
    isOpen: isFilterMenuOpen,
    onHandlePress: onFilterMenuClick,
    onClose: onFilterMenuClose,
  } = usePopover()

  return (
    <FiltersStyled>
      <SearchBox onSearchTermChange={handleSearchTermChange} />
      <RightAdornment>
        <IconRadioButtons
          options={displayOptions}
          onChange={handleDisplayOptionChange}
        />
        <PopoverMenu
          from={
            <Button
              title="Filter"
              isLoading={isLoading}
              variant={!isFilterMenuOpen ? 'outlined' : 'filled'}
              iconName={isFilterMenuOpen ? 'chevron-up' : 'chevron-down'}
              onClick={onFilterMenuClick}
            />
          }
          title="Filter"
          menuHeader="Product Line"
          items={filterOptions}
          isOpen={isFilterMenuOpen}
          onClose={onFilterMenuClose}
        />
      </RightAdornment>
    </FiltersStyled>
  )
}

const aggregateFiltersFromDevicesList = (devices: Device[] = []) => {
  const uniqueFilters: { label: string; value: string }[] = []
  const seenLineIds = new Set<string>()

  for (const { line } of devices) {
    if (!seenLineIds.has(line.id)) {
      uniqueFilters.push({ label: line.name, value: line.id })
      seenLineIds.add(line.id)
    }
  }
  return uniqueFilters
}
