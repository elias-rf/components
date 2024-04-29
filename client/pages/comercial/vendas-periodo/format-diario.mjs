import { round } from '@/utils/number/round.mjs'

export function formatDiario(origem) {
  let destino = {
    liteflex: { quantidade: 0, valor: 0, valorMedio: 0 },
    metil: { quantidade: 0, valor: 0, valorMedio: 0 },
    enlite: { quantidade: 0, valor: 0, valorMedio: 0 },
    hilite: { quantidade: 0, valor: 0, valorMedio: 0 },
    anel: { quantidade: 0, valor: 0, valorMedio: 0 },
  }
  destino = origem.reduce((acc, item) => {
    acc[item.NmCategoria].valor += item.valor
    acc[item.NmCategoria].quantidade += item.quantidade
  }, destino)

  for (const prod in destino) {
    destino[prod].valorMedio = round(
      destino[prod].valor / destino[prod].quantidade,
      2
    )
  }

  return destino
}
