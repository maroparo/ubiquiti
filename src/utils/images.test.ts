import { DeviceIcon } from 'data/types.ts'

import { API_BASE_URL } from './constants.ts'
import { getDeviceImageSource } from './images.ts'

describe('getDeviceImageSource', () => {
  it('should return undefined for missing resolutions', () => {
    const device: DeviceIcon = { id: 'device' }
    const size = 1

    expect(getDeviceImageSource(device, size)).toBeUndefined()
  })

  it('should find the previous available resolution when the size is out of bounds', () => {
    const device: DeviceIcon = { id: 'device', resolutions: [[320, 240]] }
    const size = 3 // Size exceeding available resolutions

    const expectedUrl = `${API_BASE_URL}/icons/device_320x240.png`
    expect(getDeviceImageSource(device, size)).toEqual(expectedUrl)
  })

  it('should find the next available resolution when the passed size is 0', () => {
    const device: DeviceIcon = { id: 'device', resolutions: [[320, 240]] }
    const size = 0 // Size exceeding available resolutions

    const expectedUrl = `${API_BASE_URL}/icons/device_320x240.png`
    expect(getDeviceImageSource(device, size)).toEqual(expectedUrl)
  })

  it('should return image source for valid size and resolutions', () => {
    const device: DeviceIcon = {
      id: 'device',
      resolutions: [
        [640, 480],
        [1280, 720],
      ],
    }
    const size = 2 // Size matching second resolution

    const expectedUrl = `${API_BASE_URL}/icons/device_1280x720.png`
    expect(getDeviceImageSource(device, size)).toEqual(expectedUrl)
  })
})
