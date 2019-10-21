import { GunGraphData, GunNode } from './Gun'

export interface GunGraphAdapter {
  readonly close?: () => void
  readonly get: (soul: string) => Promise<GunNode | null>
  readonly getJsonString: (soul: string) => Promise<string>
  readonly getJsonStringSync?: (soul: string) => string
  readonly getSync?: (soul: string) => GunNode | null
  readonly put: (graphData: GunGraphData) => Promise<GunGraphData | null>
  readonly putSync: (graphData: GunGraphData) => GunGraphData | null
}
