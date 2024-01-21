import { calculadora } from '@/client/pages/comercial/precos/components/calculadora.js'

const value = 49.0
let response = 0
for (let ct = 1; Math.abs(calculadora.liteflex(ct) - value) > 0.01; ct++) {
  response = ct
}

console.log(response)

console.log(calculadora.liteflex(260))
console.log(calculadora.liteflex(312))
console.log(calculadora.liteflex(510))
console.log(calculadora.liteflex(700))
