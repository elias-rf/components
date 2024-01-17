import { cache } from '@/client/lib/cache.js'
import { createSelectors } from '@/client/lib/create-selectors.js'
import { rpc } from '@/client/lib/rpc.js'
import { getFieldId } from '@/utils/query/get-field-id.js'
import { isIdEqual } from '@/utils/query/is-id-equal.js'
import { endOfMonth, format, parse, startOfMonth, subMonths } from 'date-fns/fp'
import { flowRight } from 'lodash-es'
import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'

type TState = {
  mes: ['mes', string][]
  dia: ['dia', string][]
  operacao: ['operacao', string][]
  produto: ['produto', string][]
  mesInicio: ['mes', string][]
  esterilizacaoExternaDiario: any[]
  esterilizacaoExternaMensal: any[]
  esterilizacaoExternaModelo: any[]
  esterilizacaoExternaProduto: any[]
  esterilizacaoInternaDiario: any[]
  esterilizacaoInternaMensal: any[]
  esterilizacaoInternaModelo: any[]
  esterilizacaoInternaProduto: any[]
  operacaoDiario: any[]
  operacaoMensal: any[]
  operacaoProduto: any[]
  operacaoModelo: any[]
  operacaoTurno: any[]
  transferenciaDiario: any[]
  transferenciaMensal: any[]
  transferenciaModelo: any[]
}

const initialState: TState = {
  mes: [] as ['mes', string][],
  dia: [] as ['dia', string][],
  operacao: [['operacao', '3058']],
  produto: [] as ['produto', string][],
  mesInicio: [
    ['mes', flowRight([format('yyyy-MM'), subMonths(13)])(new Date())],
  ],
  esterilizacaoExternaDiario: [],
  esterilizacaoExternaMensal: [],
  esterilizacaoExternaModelo: [],
  esterilizacaoExternaProduto: [],
  esterilizacaoInternaDiario: [],
  esterilizacaoInternaMensal: [],
  esterilizacaoInternaModelo: [],
  esterilizacaoInternaProduto: [],
  operacaoDiario: [],
  operacaoMensal: [],
  operacaoProduto: [],
  operacaoModelo: [],
  operacaoTurno: [],
  transferenciaDiario: [],
  transferenciaMensal: [],
  transferenciaModelo: [],
}

const state = proxy(initialState)
devtools(state, {
  name: 'controles',
  enabled: true,
})

const setMes = (mes: ['mes', string][]) => {
  if (isIdEqual(state.mes, mes)) {
    state.mes = []
    return
  }
  state.mes = mes
}

const setDia = (dia: ['dia', string][]) => {
  if (isIdEqual(state.dia, dia)) {
    state.dia = []
    return
  }
  state.dia = dia
}

const setOperacao = (operacao: ['operacao', string][]) => {
  state.operacao = operacao
}

const setProduto = (produto: ['produto', string][]) => {
  if (isIdEqual(state.produto, produto)) {
    state.produto = []
    return
  }
  state.produto = produto
}

const setMesInicio = (mes: ['mes', string][]) => {
  state.mesInicio = mes
}

const fetchEsterilizacaoExternaDiario = async () => {
  const inicio = flowRight([
    format('yyyy-MM-dd'),
    startOfMonth(),
    parse('yyyy-MM-dd'),
  ])(getFieldId('mes', state.mes) + '-01')
  const fim = flowRight([
    format('yyyy-MM-dd'),
    endOfMonth,
    parse('yyyy-MM-dd'),
  ])(getFieldId('mes', state.mes) + '-01')
  const data = (await cache.memo(
    {
      inicio,
      fim,
    },
    () =>
      rpc.request('esterilizacaoExterna_diario', {
        inicio,
        fim,
      })
  )) as any[]
  state.esterilizacaoExternaDiario = data
  return data
}

const fetchEsterilizacaoExternaMensal = async () => {
  const data = (await cache.memo(
    {
      mes: getFieldId('mes', state.mesInicio),
    },
    () =>
      rpc.request('esterilizacaoExterna_mensal', {
        mes: getFieldId('mes', state.mesInicio),
      })
  )) as any[]
  state.esterilizacaoExternaMensal = data
  return data
}

const fetchEsterilizacaoExternaModelo = async () => {
  const data = (await cache.memo(
    {
      data: getFieldId('dia', state.dia),
      produto: getFieldId('produto', state.produto),
    },
    () =>
      rpc.request('esterilizacaoExterna_modelo', {
        data: getFieldId('dia', state.dia),
        produto: getFieldId('produto', state.produto),
      })
  )) as any[]
  state.esterilizacaoExternaModelo = data
  return data
}

const fetchEsterilizacaoExternaProduto = async () => {
  const data = (await cache.memo(
    {
      data: getFieldId('dia', state.dia),
    },
    () =>
      rpc.request('esterilizacaoExterna_produto', {
        data: getFieldId('dia', state.dia),
      })
  )) as any[]
  state.esterilizacaoExternaProduto = data
  return data
}

const fetchEsterilizacaoInternaDiario = async () => {
  const inicio = flowRight([
    format('yyyy-MM-dd'),
    startOfMonth(),
    parse('yyyy-MM-dd'),
  ])(getFieldId('mes', state.mes) + '-01')
  const fim = flowRight([
    format('yyyy-MM-dd'),
    endOfMonth,
    parse('yyyy-MM-dd'),
  ])(getFieldId('mes', state.mes) + '-01')
  const data = (await cache.memo(
    {
      inicio,
      fim,
    },
    () =>
      rpc.request('esterilizacaoInterna_diario', {
        inicio,
        fim,
      })
  )) as any[]
  state.esterilizacaoInternaDiario = data
  return data
}

const fetchEsterilizacaoInternaMensal = async () => {
  const data = (await cache.memo(
    {
      mes: getFieldId('mes', state.mesInicio),
    },
    () =>
      rpc.request('esterilizacaoInterna_mensal', {
        mes: getFieldId('mes', state.mesInicio),
      })
  )) as any[]
  state.esterilizacaoInternaMensal = data
  return data
}

const fetchEsterilizacaoInternaModelo = async () => {
  const data = (await cache.memo(
    {
      data: getFieldId('dia', state.dia),
      produto: getFieldId('produto', state.produto),
    },
    () =>
      rpc.request('esterilizacaoInterna_modelo', {
        data: getFieldId('dia', state.dia),
        produto: getFieldId('produto', state.produto),
      })
  )) as any[]
  state.esterilizacaoInternaModelo = data
  return data
}

const fetchEsterilizacaoInternaProduto = async () => {
  const data = (await cache.memo(
    {
      data: getFieldId('dia', state.dia),
    },
    () =>
      rpc.request('esterilizacaoInterna_produto', {
        data: getFieldId('dia', state.dia),
      })
  )) as any[]
  state.esterilizacaoInternaProduto = data
  return data
}

const fetchOperacaoDiario = async () => {
  const inicio = flowRight([
    format('yyyy-MM-dd'),
    startOfMonth(),
    parse('yyyy-MM-dd'),
  ])(getFieldId('mes', state.mes) + '-01')
  const fim = flowRight([
    format('yyyy-MM-dd'),
    endOfMonth,
    parse('yyyy-MM-dd'),
  ])(getFieldId('mes', state.mes) + '-01')

  const data = (await cache.memo(
    {
      operacao: getFieldId('operacao', state.operacao) || '',
      inicio,
      fim,
    },
    () =>
      rpc.request('ordemProducaoOperacao_diario', {
        operacao: getFieldId('operacao', state.operacao) || '',
        inicio,
        fim,
      })
  )) as any[]
  state.operacaoDiario = data
  return data
}

const fetchOperacaoMensal = async () => {
  const data = (await cache.memo(
    {
      operacao: getFieldId('operacao', state.operacao) || '',
      mes: getFieldId('mes', state.mesInicio),
    },
    () =>
      rpc.request('ordemProducaoOperacao_mensal', {
        operacao: getFieldId('operacao', state.operacao) || '',
        mes: getFieldId('mes', state.mesInicio),
      })
  )) as any[]
  state.operacaoMensal = data
  return data
}

const fetchOperacaoProduto = async () => {
  const data = (await cache.memo(
    {
      operacao: getFieldId('operacao', state.operacao) || '',
      data: getFieldId('dia', state.dia),
    },
    () =>
      rpc.request('ordemProducaoOperacao_produto', {
        operacao: getFieldId('operacao', state.operacao) || '',
        data: getFieldId('dia', state.dia),
      })
  )) as any[]
  state.operacaoProduto = data
  return data
}

const fetchOperacaoModelo = async () => {
  const data = (await cache.memo(
    {
      operacao: getFieldId('operacao', state.operacao) || '',
      data: getFieldId('dia', state.dia),
      produto: getFieldId('produto', state.produto),
    },
    () =>
      rpc.request('ordemProducaoOperacao_modelo', {
        operacao: getFieldId('operacao', state.operacao) || '',
        data: getFieldId('dia', state.dia),
        produto: getFieldId('produto', state.produto),
      })
  )) as any[]
  state.operacaoModelo = data
  return data
}

const fetchOperacaoTurno = async () => {
  const data = (await cache.memo(
    {
      operacao: getFieldId('operacao', state.operacao) || '',
      data: getFieldId('dia', state.dia),
    },
    () =>
      rpc.request('ordemProducaoOperacao_turno', {
        operacao: getFieldId('operacao', state.operacao) || '',
        data: getFieldId('dia', state.dia),
      })
  )) as any[]
  state.operacaoTurno = data
  return data
}

const fetchTransferenciaDiario = async () => {
  const inicio = flowRight([
    format('yyyy-MM-dd'),
    startOfMonth(),
    parse('yyyy-MM-dd'),
  ])(getFieldId('mes', state.mes) + '-01')
  const fim = flowRight([
    format('yyyy-MM-dd'),
    endOfMonth,
    parse('yyyy-MM-dd'),
  ])(getFieldId('mes', state.mes) + '-01')
  const data = (await cache.memo(
    {
      inicio,
      fim,
    },
    () =>
      rpc.request('nfSaida_transferenciaDiario', {
        inicio,
        fim,
      })
  )) as any[]
  state.transferenciaDiario = data
  return data
}

const fetchTransferenciaMensal = async () => {
  const data = (await cache.memo(
    {
      mes: getFieldId('mes', state.mesInicio),
    },
    () =>
      rpc.request('nfSaida_transferenciaMensal', {
        mes: getFieldId('mes', state.mesInicio),
      })
  )) as any[]
  state.transferenciaMensal = data
  return data
}

const fetchTransferenciaModelo = async () => {
  const data = (await cache.memo(
    {
      data: getFieldId('dia', state.dia),
    },
    () =>
      rpc.request('nfSaida_transferenciaModelo', {
        data: getFieldId('dia', state.dia),
      })
  )) as any[]
  state.transferenciaModelo = data
  return data
}

export const controlesStore = {
  state,
  fetchOperacaoDiario,
  fetchOperacaoMensal,
  fetchOperacaoProduto,
  fetchOperacaoModelo,
  fetchOperacaoTurno,
}
