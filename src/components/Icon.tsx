import { SVGProps } from 'react'

import { icons } from 'theme/icons.ts'
import { IconName } from 'theme/types.ts'

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
}

export const Icon = ({ name, ...svgProps }: IconProps) => {
  const IconComponent = icons[name]

  return <IconComponent {...svgProps} />
}
