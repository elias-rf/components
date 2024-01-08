import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const date = new Date()

console.log(format(date, 'yyyy-MM-dd'))
console.log(format(date, 'EEEEEE', { locale: ptBR }))
console.log(format(date, 'iiiiii', { locale: ptBR }))
console.log(format(date, 'eeeeee', { locale: ptBR }))
console.log(format(date, 'cccccc', { locale: ptBR }))
console.log(format(date, 'PPP', { locale: ptBR }))
console.log(format(date, 'PPP', { locale: ptBR }))
