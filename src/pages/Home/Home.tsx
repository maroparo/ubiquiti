import { Button } from 'components/Button.tsx'
import { Filters } from 'components/Filters.tsx'
import { ProductsGrid } from 'components/ProductsGrid.tsx'
import { ProductsTable } from 'components/ProductsTable.tsx'
import { useLoadMore } from 'hooks/useLoadMore.ts'
import { useSetPageTitle } from 'hooks/useSetPageTitle.ts'

import { NoResults, PageContainerStyled } from './Home.styled.ts'
import { useFilterDevices } from './hooks/useFilterDevices.ts'

export const Home = () => {
  useSetPageTitle('Devices List')

  const { onChange, filters, isLoading, devices, isFiltering } =
    useFilterDevices()

  const { itemsOnDisplay, hasMore, loadMore } = useLoadMore(devices, 20)

  const { displayOption } = filters

  const totalDevicesTitle = `${devices.length}  ${isFiltering ? 'filtered' : ''} devices`
  const loadMoreButtonTitle = `Load More Devices (${devices.length - itemsOnDisplay.length}  Remaining)`
  const hasNoResults = isFiltering && itemsOnDisplay.length === 0

  const ProductDisplay = displayOption === 'grid' ? ProductsGrid : ProductsTable

  return (
    <>
      <Filters onFiltersChange={onChange} />
      <PageContainerStyled isLoading={isLoading}>
        <ProductDisplay
          devices={itemsOnDisplay}
          totalDevicesTitle={totalDevicesTitle}
        />
        {hasNoResults && <NoResults>No results were found</NoResults>}
        {hasMore && (
          <Button
            variant="outlined"
            title={loadMoreButtonTitle}
            onClick={loadMore}
          />
        )}
      </PageContainerStyled>
    </>
  )
}
