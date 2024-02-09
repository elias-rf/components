import { parse } from 'date-fns'

console.log(parse('2022-01-01', 'yyyy-MM-dd', new Date()))

const rsp = parse('01/01/2022', 'dd-MM-yyyy', new Date())
console.log(rsp.toString() === 'Invalid Date')
console.log(rsp.toString())
