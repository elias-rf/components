import * as v from 'valibot'

const dt = (args) => {
  v.parse(
    v.object({
      inicio: v.string('deve ser string', [
        v.isoDate(`inicio deve ser uma data mas foi passado`),
      ]),

      fim: v.string([v.isoDate(`fim deve ser uma string mas foi passado`)]),
    }),
    args
  )
  return args
}

console.log(dt({ inicio: '2020-01-01', fim: '2020-01-01' }))
console.log(dt({ inicio: 2020, fim: '2020-01-01' }))
console.log(dt({ inicio: '20-01-01', fim: '2020-01-01' }))
