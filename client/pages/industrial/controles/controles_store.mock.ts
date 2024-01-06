import { fetcherMock } from '@/utils/mocks/fetcher-mock.js'

fetcherMock({
  'esterilizacaoExterna/mensal': () => {
    return [
      {
        mes: '2020-01',
        quantidade: 10,
      },
    ]
  },
  'esterilizacaoExterna/diario': () => {
    return [
      {
        dia: '2020-01-01',
        quantidade: 10,
        dia_semana: 'qua',
      },
    ]
  },
  'esterilizacaoExterna/produto': () => {
    return [
      {
        produto: 'Produto 1',
        quantidade: 10,
      },
    ]
  },
  'esterilizacaoExterna/modelo': () => {
    return [
      {
        modelo: 'Modelo 1',
        quantidade: 10,
      },
      {
        modelo: 'Modelo 2',
        quantidade: 20,
      },
    ]
  },
  'esterilizacaoInterna/mensal': () => {
    return [
      {
        mes: '2020-01',
        quantidade: 10,
      },
    ]
  },
  'esterilizacaoInterna/diario': () => {
    return [
      {
        dia: '2020-01-01',
        quantidade: 10,
        dia_semana: 'qua',
      },
    ]
  },
  'esterilizacaoInterna/produto': () => {
    return [
      {
        produto: 'Produto 1',
        quantidade: 10,
      },
    ]
  },
  'esterilizacaoInterna/modelo': () => {
    return [
      {
        modelo: 'Modelo 1',
        quantidade: 10,
      },
      {
        modelo: 'Modelo 2',
        quantidade: 20,
      },
    ]
  },
  'ordemProducaoOperacao/mensal': () => {
    return [
      {
        mes: '2020-01',
        quantidade: 10,
      },
    ]
  },
  'ordemProducaoOperacao/diario': () => {
    return [
      {
        dia: '2020-01-01',
        quantidade: 10,
        dia_semana: 'qua',
      },
    ]
  },
  'ordemProducaoOperacao/produto': () => {
    return [
      {
        produto: 'Produto 1',
        quantidade: 10,
      },
    ]
  },
  'ordemProducaoOperacao/modelo': () => {
    return [
      {
        modelo: 'Modelo 1',
        quantidade: 10,
      },
      {
        modelo: 'Modelo 2',
        quantidade: 20,
      },
    ]
  },
  'ordemProducaoOperacao/turno': () => {
    return [
      {
        turno: 'T1',
        quantidade: 10,
      },
      {
        turno: 'T2',
        quantidade: 10,
      },
    ]
  },
  'nfSaida/transferenciaMensal': () => {
    return [
      {
        mes: '2020-01',
        LITEFLEX: 10,
        ENLITE: 5,
      },
    ]
  },
  'nfSaida/transferenciaDiario': () => {
    return [
      {
        dia: '2020-01-01',
        LITEFLEX: 10,
        ENLITE: 5,
      },
    ]
  },
  'nfSaida/transferenciaModelo': () => {
    return [
      {
        modelo: 'liteflex 1',
        quantidade: 10,
      },
    ]
  },
})
