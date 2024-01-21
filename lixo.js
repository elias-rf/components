import { endOfMonth, format, parse, startOfMonth, subMonths } from 'date-fns'
import { flow } from 'lodash-es'

const inicio = flow([
  ($) => parse($, 'yyyy-MM-dd', new Date()),
  startOfMonth,
  ($) => format($, 'yyyy-MM-dd'),
])('2022-12-01')

console.log(inicio.toString())
