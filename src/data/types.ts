interface Line {
  id: string
  name: string
}

interface Product {
  abbrev: string
  name: string
}

interface TripletsEntity {
  k1?: string
  k2?: string
  k3?: string
}

interface Uisp {
  bleServices: unknown
  firmware: Firmware
  line: string
  nameLegacy?: (string | undefined)[]
}

interface Firmware {
  board?: (string | undefined)[]
  platform?: string
}

interface Btle {
  factoryDefault: string
  userConfigured: string
}

interface Compliance {
  fcc?: string
  ic?: string
  icEmi: string
  modelName: string
  rcm?: boolean
  rfCmFcc?: number
  rfCmIc?: number
  text: Text
  anatel?: string
  ncc?: string
  jrf?: string[]
  wifi?: string
  indoorOnly?: boolean
  kc?: string
  jnfc?: string
  jpa?: string[]
}

interface Text {
  CA?: string[]
  US?: string[]
}

interface MinAdoptVersion {
  net?: string
  protect?: string
}

interface Unifi {
  adoptability?: string
  network?: Network
  protect?: Protect
}

interface Network {
  bleServices?: BleServicesEntity[]
  deviceCapabilities?: string[]
  model: string
  radios: Radios
  type: string
  chipset?: string
  ethernetMaxSpeedMegabitsPerSecond?: number
  features?: Features
  minimumFirmwareRequired?: string
  numberOfPorts?: number
  systemIdHexadecimal?: string
  hybrid?: string
  ports?: Ports
  diagram?: string[]
  knownUnsupportedFeatures?: string[]
  linkNegotiation?: unknown
  networkGroups?: NetworkGroups
  optionalWanPortIndexes?: number[]
  subtypes?: string[]
  details?: Details
  power?: Power
  temperatureSensors?: TemperatureSensorsEntity[]
  primaryPortGroupCount?: number
  outlets?: Outlets
  outletsDiagram?: string[]
  primaryOutletGroupCount?: number
  rps?: Rps
  optionalWanPortNumbers?: number[]
}

interface BleServicesEntity {
  configured: string
  default: string
  features?: Features1
}

interface Features1 {
  ucore: boolean
}

interface Radios {
  na?: NaOrNg
  ng?: NaOrNg1
}

interface NaOrNg {
  gain?: number
  maxPower?: number
  maxSpeedMegabitsPerSecond: number
}

interface NaOrNg1 {
  gain?: number
  maxPower?: number
  maxSpeedMegabitsPerSecond: number
}

interface Features {
  zh?: boolean
  ac?: boolean
  bandsteer?: boolean
  gen?: number
  atfDisabled?: boolean
  ax?: boolean
  outdoorModeSupport?: boolean
  be?: boolean
  brcm?: boolean
  airTime?: boolean
  airView?: boolean
  dfs?: boolean
  poe?: boolean
  fan?: string
  legacyPortRemap?: boolean
  sfpPlusSupported?: boolean
}

interface Ports {
  standard?: number | string | number[]
  eth0?: string
  eth1?: string
  eth2?: string
  eth3?: string
  eth4?: string
  eth10?: string
  eth5?: string
  eth6?: string
  eth7?: string
  eth8?: string
  eth9?: string
  plus?: number[] | string | number
  eth11?: string
  eth12?: string
  eth13?: string
  eth14?: string
  eth15?: string
  eth16?: string
  eth17?: string
  eth18?: string
  eth19?: string
  sfp?: number[]
  qsfp28?: string
  sfp28?: string
}

interface NetworkGroups {
  eth0: string
  eth1: string
  eth2?: string
  eth3?: string
  eth4?: string
  eth10?: string
  eth5?: string
  eth6?: string
  eth7?: string
  eth8?: string
  eth9?: string
  eth11?: string
  eth12?: string
  eth13?: string
  eth14?: string
  eth15?: string
  eth16?: string
  eth17?: string
  eth18?: string
  eth19?: string
}

interface Details {
  ipsThroughput: string
  legacyPortRemap?: boolean
}

interface Power {
  capacity: number
}

interface TemperatureSensorsEntity {
  maxTemp?: number
  sensor: string
}

interface Outlets {
  lan?: number[]
  standard?: number[] | string | number
  usb?: number[] | string
  wan?: number[]
}

interface Rps {
  diagram?: string[]
  primaryPortGroupCount: number
}

interface Protect {
  fov: number
  suggestedDistance: number
}

export interface DeviceIcon {
  id: string
  resolutions?: (number[] | undefined)[]
}

interface DeviceImages {
  default: string
  nopadding: string
  topology: string
}

export interface Device {
  guids?: string[]
  icon: DeviceIcon
  id: string
  images: DeviceImages
  line: Line
  product: Product
  shortnames?: string[]
  sku: string
  sysid?: string
  sysids?: (string | undefined)[]
  triplets?: (TripletsEntity | undefined)[]
  uisp?: Uisp
  videos: Record<string, unknown>
  btle?: Btle
  jrf?: string[]
  jpa?: string[]
  compliance?: Compliance
  deviceType?: string
  minAdoptVersion?: MinAdoptVersion
  unifi?: Unifi
  fcc?: string
  ic?: string
}

export interface DevicesResponse {
  devices: Device[]
  version: string
}
