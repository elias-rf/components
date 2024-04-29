import { round } from '@/utils/number/round.mjs'
import { format, parse, subDays } from 'date-fns'
import { flow } from 'lodash-es'

function getSum(lista, produto, data) {
  const dataInicial = flow([
    ($) => subDays($, 30),
    ($) => format($, 'yyyy-MM-dd'),
  ])(data)
  const dataFinal = format(data, 'yyyy-MM-dd')

  const produtoArray = lista.filter((item) => {
    return (
      item.NmCategoria === produto &&
      item.DtEmissao >= dataInicial &&
      item.DtEmissao <= dataFinal
    )
  })

  const sum = produtoArray.reduce(
    (accumulator, currentValue) => {
      accumulator.quantidade = accumulator.quantidade + currentValue.quantidade
      accumulator.valor = accumulator.valor + currentValue.valor
      return accumulator
    },
    { quantidade: 0, valor: 0 }
  )

  return {
    dia: format(data, 'yyyy-MM-dd'),
    quantidade: sum.quantidade,
    fat: sum.valor,
    valor: round(sum.valor / sum.quantidade, 2), // valor médio
  }
}

export function formatDiario(origem, fim) {
  const destino = {
    liteflex: [],
    metil: [],
    enlite: [],
    hilite: [],
    anel: [],
    enliteLiteflex: [],
  }

  for (let dia = 45; dia >= 0; dia--) {
    const diaFinal = flow([
      ($) => parse($, 'yyyy-MM-dd', new Date()),
      ($) => subDays($, dia),
    ])(fim)

    destino.liteflex.push(getSum(origem, 'LITEFLEX', diaFinal))
    destino.metil.push(getSum(origem, 'METILCELULOSE', diaFinal))
    destino.enlite.push(getSum(origem, 'ENLITE', diaFinal))
    destino.hilite.push(getSum(origem, 'HILITE', diaFinal))
    destino.anel.push(getSum(origem, 'CORNEAL RING', diaFinal))
  }
  destino.enliteLiteflex = destino.liteflex.map((item, idx) => {
    return {
      dia: item.dia,
      quantidade: item.quantidade + destino.enlite[idx].quantidade,
      fat: item.fat + destino.enlite[idx].fat,
      valor: round(
        (item.fat + destino.enlite[idx].fat) /
          (item.quantidade + destino.enlite[idx].quantidade),
        2
      ), // valor médio
    }
  })

  return destino
}
