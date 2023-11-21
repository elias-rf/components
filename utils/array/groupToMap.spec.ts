import { describe, expect, it } from 'vitest'
import { groupToMap } from './groupToMap.js'

const data = [
  { id: 1, uf: 'ES', value: 1 },
  { id: 2, uf: 'MG', value: 2 },
  { id: 3, uf: 'ES', value: 3 },
  { id: 4, uf: 'MG', value: 4 },
]

describe('groupBy', () => {
  it('group by 1 feld', () => {
    const cb = (vlr: any) => vlr.uf
    expect(groupToMap(data, cb)).toEqual(
      new Map([
        [
          'ES',
          [
            { id: 1, uf: 'ES', value: 1 },
            { id: 3, uf: 'ES', value: 3 },
          ],
        ],
        [
          'MG',
          [
            { id: 2, uf: 'MG', value: 2 },
            { id: 4, uf: 'MG', value: 4 },
          ],
        ],
      ])
    )
  })
})
