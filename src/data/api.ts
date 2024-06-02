import { API_BASE_URL } from 'utils/constants.ts'

import { DevicesResponse } from './types.ts'

export const fetchDevices = async (): Promise<DevicesResponse> => {
  return await fetch(`${API_BASE_URL}/public.json`).then((res) =>
    res.json().catch(() => {
      throw new Error('Something went wrong while fetching the devices!')
    }),
  )
}
