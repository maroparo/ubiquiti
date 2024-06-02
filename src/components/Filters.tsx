import { useCallback, useMemo } from 'react'

import { useDevices } from 'data/queries/useDevices.tsx'
import { Device } from 'data/types.ts'
import { usePopover } from 'hooks/usePopover.ts'
import {
  DeviceFilters,
  displayOptions,
} from 'pages/Home/hooks/useFilterDevices.ts'

import { Button } from './Button.tsx'
import { FiltersStyled, RightAdornment } from './Filters.styles.ts'
import { IconRadioButtons } from './IconRadioButtons.tsx'
import { MenuItem, PopoverMenu } from './PopoverMenu.tsx'
import { SearchBox } from './SearchBox.tsx'

interface FiltersProps {
  onFiltersChange: (filters: Partial<DeviceFilters>) => void
  filters: DeviceFilters
}

export const Filters = ({ onFiltersChange, filters }: FiltersProps) => {
  const { data, isLoading } = useDevices()

  const handleSearchTermChange = (searchTerm: string) => {
    onFiltersChange({ searchTerm })
  }

  const handleDisplayOptionChange = (displayOption: string) => {
    onFiltersChange({ displayOption })
  }

  const toggleProductLine = useCallback(
    (lineId: string) => {
      const { selectedProductLines } = filters

      const productLines = !selectedProductLines.includes(lineId)
        ? [...selectedProductLines, lineId]
        : selectedProductLines.filter((id) => id !== lineId)

      onFiltersChange({ selectedProductLines: productLines })
    },
    [filters, onFiltersChange],
  )

  const devicesOptions: MenuItem[] = useMemo(() => {
    if (!data) {
      return []
    }

    return aggregateFiltersFromDevicesList(data.devices).map(
      ({ label, value }) => ({
        label,
        checked: filters.selectedProductLines.includes(value),
        onClick: () => toggleProductLine(value),
      }),
    )
  }, [data, filters.selectedProductLines, toggleProductLine])

  const {
    isOpen: isFilterMenuOpen,
    onHandlePress: onFilterMenuClick,
    onClose: onFilterMenuClose,
  } = usePopover()

  return (
    <FiltersStyled>
      <SearchBox
        value={filters.searchTerm}
        onSearchTermChange={handleSearchTermChange}
      />
      <RightAdornment>
        <IconRadioButtons
          options={displayOptions}
          onChange={handleDisplayOptionChange}
          value={filters.displayOption}
        />
        <PopoverMenu
          title="Filter"
          menuHeader="Product Line"
          items={devicesOptions}
          isOpen={isFilterMenuOpen}
          onClose={onFilterMenuClose}
          from={
            <Button
              title="Filter"
              isLoading={isLoading}
              variant={!isFilterMenuOpen ? 'outlined' : 'filled'}
              iconName={isFilterMenuOpen ? 'chevron-up' : 'chevron-down'}
              onClick={onFilterMenuClick}
            />
          }
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
