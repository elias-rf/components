import { inteiro, moeda } from '../../../../lib/text-box-formats.mjs'

export function listVenda(data) {
  const quantidade = []
  const valor = []
  const valormedio = []
  let idx = 0
  data.forEach((item) => {
    idx = quantidade.findIndex((it) => it.NmCategoria === item.NmCategoria)
    if (idx < 0) {
      quantidade.push({ NmCategoria: item.NmCategoria })
      valormedio.push({ NmCategoria: item.NmCategoria })
      idx = valor.push({ NmCategoria: item.NmCategoria }) - 1
    }
    quantidade[idx][item.anoMes] = inteiro.format(item.quantidade) || '0'
    valor[idx][item.anoMes] = moeda.format(item.valor) || '0'
    valormedio[idx][item.anoMes] =
      moeda.format(item.valor / item.quantidade) || '0'
  })
  return { quantidade, valor, valormedio }
}
