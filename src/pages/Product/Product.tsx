import { useParams } from 'react-router-dom'

import { ImageWithFallback } from 'components/ImageWithFallback.tsx'
import { NavigationBar } from 'components/NavigationBar.tsx'
import { PageContainer } from 'containers/PageContainer.tsx'
import { useDevice } from 'data/queries/useDevices.tsx'
import { useSetPageTitle } from 'hooks/useSetPageTitle.ts'
import { getDeviceImageSource } from 'utils/images.ts'

import { PageContainerStyled, ProductInfoCard } from './Product.styled.ts'

type ProductPageParams = {
  productId: string
}

export const Product = () => {
  const { productId } = useParams<ProductPageParams>()
  const { isLoading, device } = useDevice(productId)

  useSetPageTitle(device?.product.name || 'Device Details')

  if (!device && !isLoading) {
    throw new Error(`A device with the id:${productId} was not found!`)
  }

  return (
    <>
      <NavigationBar title={device?.product.name} />
      <PageContainer isLoading={isLoading}>
        {device && (
          <PageContainerStyled>
            <ImageWithFallback src={getDeviceImageSource(device.icon, 10)} />
            <ProductInfoCard>
              <div>
                <span>Product Line</span>
                <span>{device.line.name}</span>
              </div>
              <div>
                <span>ID</span>
                <span>{device.id}</span>
              </div>
              <div>
                <span>Name</span>
                <span>{device.product.name}</span>
              </div>
              <div>
                <span>Short Name</span>
                <span>{device.product.abbrev}</span>
              </div>
              {device.unifi?.network?.radios.na?.maxPower && (
                <div>
                  <span>Max. Power</span>
                  <span>{device.unifi.network.radios.na.maxPower}W</span>
                </div>
              )}
              {device.unifi?.network?.radios.na?.maxSpeedMegabitsPerSecond && (
                <div>
                  <span>Max. Power</span>
                  <span>
                    {device.unifi.network.radios.na.maxSpeedMegabitsPerSecond}
                    Mbps
                  </span>
                </div>
              )}
              {device.unifi?.network?.numberOfPorts && (
                <div>
                  <span>Number of Ports</span>
                  <span>{device.unifi.network.numberOfPorts}</span>
                </div>
              )}
            </ProductInfoCard>
          </PageContainerStyled>
        )}
      </PageContainer>
    </>
  )
}
