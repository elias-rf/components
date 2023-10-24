import day from 'dayjs'
import 'dayjs/locale/pt-br.js'
import advancedFormat from 'dayjs/plugin/advancedFormat.js'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import utc from 'dayjs/plugin/utc.js'

day.extend(customParseFormat)
day.extend(advancedFormat)
day.extend(utc)
day.locale('pt-br')

export { day }
