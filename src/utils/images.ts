import { DeviceIcon } from 'data/types.ts'

import { API_BASE_URL } from './constants.ts'
import { getClosestIndex } from './parsing.ts'

export const getDeviceImageSource = (
  { id, resolutions }: DeviceIcon,
  size: number = 1,
): string | undefined => {
  const index = size - 1
  const resolution = getClosestIndex(resolutions, index)

  if (!resolution) {
    return
  }

  const [width, height] = resolution

  return `${API_BASE_URL}/icons/${id}_${width}x${height}.png`
}
