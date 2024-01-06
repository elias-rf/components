import {
  endOfMonth,
  format,
  isEqual,
  startOfMonth,
  subMonths,
  subYears,
} from 'date-fns/fp'
import { flowRight } from 'lodash'
import { describe, expect, test } from 'vitest'
import { day } from './day.js'

describe('dayjs', () => {
  test('deve calcular inicio do ano passado', () => {
    const calc = day().subtract(1, 'year').startOf('month').format('YYYY-MM-DD')
    const esp = flowRight([format('yyyy-MM-dd'), startOfMonth(), subYears(1)])(
      new Date()
    )
    expect(calc).toEqual(esp)
  })
  test('deve calcular final do mes passado', () => {
    const calc = day().subtract(1, 'month').endOf('month').format('YYYY-MM-DD')
    const esp = flowRight([format('yyyy-MM-dd'), endOfMonth(), subMonths(1)])(
      new Date()
    )
    expect(calc).toEqual(esp)
  })
})
