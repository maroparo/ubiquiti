import { useMemo } from 'react'

import { useQuery } from '@tanstack/react-query'

import { fetchDevices } from '../api.ts'
import { toDevicesQueryKey } from '../queryKeys.ts'

export const useDevices = () => {
  return useQuery({
    queryKey: toDevicesQueryKey(),
    queryFn: fetchDevices,
    staleTime: 1000 * 60 * 30,
  })
}

export const useDevice = (deviceId?: string) => {
  const { data, isLoading } = useDevices()

  const device = useMemo(() => {
    if (!deviceId || !data) {
      return undefined
    }

    return data.devices.find((device) => device.id === deviceId)
  }, [data, deviceId])

  return {
    device,
    isLoading,
  }
}
