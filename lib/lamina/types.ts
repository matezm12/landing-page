import { LayerProps } from 'lamina/types'

export const NoiseTypes: {
  [key: string]: string
} = {
  perlin: 'perlin',
  simplex: 'simplex',
  cell: 'cell',
  curl: 'curl',
  white: 'white',
}

export type NoiseType = 'perlin' | 'simplex' | 'cell' | 'curl' | 'white'

export const MappingTypes: {
  [key: string]: string
} = {
  local: 'local',
  world: 'world',
  uv: 'uv',
}

export type MappingType = 'local' | 'world' | 'uv'

export interface DisplaceProps extends LayerProps {
  strength?: number
  scale?: number
  mapping?: MappingType
  type?: NoiseType
  offset?: [number, number, number] | any
}
