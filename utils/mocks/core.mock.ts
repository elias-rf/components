import { mockedFetch } from '@/utils/mocks/mocked-fetch/mocked-fetch.js'

const core: { [method: string]: any } = {
  agendaTelefone_list: [
    {
      id: 100,
      name: 'Brenda Gomes',
      department: 'Comercial',
      email: 'brenda.gomes@visiontech.com.br',
    },
    {
      id: 102,
      name: 'Ana Ferreira',
      department: 'Comercial',
      email: 'ana.ferreira@visiontech.com.br',
    },
  ],
  cliente_list: [
    {
      CdCliente: 100,
      RzSocial: 'Fulano de tal',
      Cidade: 'São Paulo',
      Uf: 'SP',
      CGC: '10.100.100/0001-01',
      CdVendedor: '10',
      FgAtivo: 'S',
      EMail: 'fulano@example.com',
      NumIdentidade: '123456789',
      DtCadastro: '2020-01-01',
    },
    {
      CdCliente: 200,
      RzSocial: 'Cicrano de tal',
      Cidade: 'Belo Horizonte',
      Uf: 'BH',
      CGC: '20.200.200/0001-01',
      CdVendedor: '10',
      FgAtivo: 'S',
      EMail: 'cicrano@example.com',
      NumIdentidade: '123456789',
      DtCadastro: '2021-01-01',
    },
  ],
  cliente_vendaMensalQuantidade: (params: any) => [
    {
      categoria: 'produto 1',
      [params.inicio.substring(0, 7)]: params.cliente * 1,
    },
    {
      categoria: 'produto 2',
      [params.fim.substring(0, 7)]: params.cliente * 2,
    },
  ],
  cliente_vendaMensalValor: (params: any) => [
    {
      categoria: 'produto 1',
      [params.inicio.substring(0, 7)]: params.cliente * 10 + ',10',
    },
    {
      categoria: 'produto 2',
      [params.fim.substring(0, 7)]: params.cliente * 20 + ',20',
    },
  ],
  cliente_vendaMensalValorMedio: (params: any) => [
    {
      categoria: 'produto 1',
      [params.inicio.substring(0, 7)]: params.cliente * 1 + ',10',
    },
    {
      categoria: 'produto 2',
      [params.fim.substring(0, 7)]: params.cliente * 2 + ',20',
    },
  ],
  cliente_read: (params: any) => {
    return {
      CdCliente: params.where[0][1],
      RzSocial: 'Fulano de tal',
      Cidade: 'São Paulo',
      Uf: 'SP',
      CGC: '10.100.100/0001-01',
      CdVendedor: '10',
      FgAtivo: 'S',
      EMail: 'fulano@example.com',
      NumIdentidade: '123456789',
      DtCadastro: '2020-01-01',
    }
  },
  esterilizacaoExterna_diario: (params: any) => [
    {
      dia: params.inicio,
      dia_semana: 'qua',
      quantidade: 10,
    },
  ],
  esterilizacaoExterna_mensal: (params: any) => [
    {
      mes: params.mes,
      quantidade: 10,
    },
  ],
  esterilizacaoExterna_modelo: (params: any) => [
    {
      modelo: 'Modelo 1',
      quantidade: 10,
    },
    {
      modelo: 'Modelo 2',
      quantidade: 20,
    },
  ],
  esterilizacaoExterna_produto: (params: any) => [
    {
      produto: 'Produto 1',
      quantidade: 10,
    },
  ],
  esterilizacaoInterna_diario: (params: any) => [
    {
      dia: params.inicio,
      dia_semana: 'qua',
      quantidade: 10,
    },
  ],
  esterilizacaoInterna_mensal: (params: any) => [
    {
      mes: params.mes,
      quantidade: 10,
    },
  ],
  esterilizacaoInterna_modelo: (params: any) => [
    {
      modelo: 'Modelo 1',
      quantidade: 10,
    },
    {
      modelo: 'Modelo 2',
      quantidade: 20,
    },
  ],
  esterilizacaoInterna_produto: (params: any) => [
    {
      produto: 'Produto 1',
      quantidade: 10,
    },
  ],
  group_list: [
    { kGrupo: 38, NomeGrupo: 'Analista Qualidade' },
    { kGrupo: 51, NomeGrupo: 'Auxiliar Manutenção' },
  ],
  groupSubject_list: [{ idSubject: 'teste1' }, { idSubject: 'teste2' }],

  nfSaida_transferenciaDiario: (params: any) => [
    {
      dia: params.fim,
      dia_semana: 'qua',
      LITEFLEX: 10,
    },
  ],
  nfSaida_transferenciaMensal: (params: any) => [
    {
      mes: params.mes,
      LITEFLEX: 10,
    },
  ],
  nfSaida_transferenciaModelo: (params: any) => [
    {
      modelo: 'Modelo 1',
      quantidade: 10,
    },
    {
      modelo: 'Modelo 2',
      quantidade: 20,
    },
  ],

  nfSaida_vendaDiario: (params: any) => [
    {
      DtEmissao: params.fim,
      NmCategoria: 'LITEFLEX',
      quantidade: 10,
      valor: 1000,
    },
    {
      DtEmissao: params.fim,
      NmCategoria: 'ENLITE',
      quantidade: 20,
      valor: 3000,
    },
  ],

  ordemProducaoOperacao_diario: (params: any) => [
    {
      dia: params.inicio,
      dia_semana: 'qua',
      quantidade: 10,
    },
  ],
  ordemProducaoOperacao_mensal: (params: any) => [
    {
      mes: params.mes,
      quantidade: 10,
    },
  ],
  ordemProducaoOperacao_modelo: (params: any) => [
    {
      modelo: 'Modelo 1',
      quantidade: 10,
    },
    {
      modelo: 'Modelo 2',
      quantidade: 20,
    },
  ],
  ordemProducaoOperacao_produto: (params: any) => [
    {
      produto: 'Produto 1',
      quantidade: 10,
    },
  ],
  ordemProducaoOperacao_turno: (params: any) => [
    {
      turno: 'Manha',
      quantidade: 10,
    },
    {
      turno: 'Tarde',
      quantidade: 20,
    },
  ],

  usuario_login: {
    usuario_id: 1,
    nome_login: 'fulano',
    nome: 'FULANO',
    group_ids: '42,20,0',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
  },
}

mockedFetch.addRpc(async (rpc) => {
  if (Object.hasOwn(core, rpc.method)) {
    let response
    if (typeof core[rpc.method] === 'function') {
      response = core[rpc.method](rpc.params)
    } else {
      response = core[rpc.method]
    }
    console.groupCollapsed(rpc.method)
    console.log(rpc.params)
    console.log(response)
    console.groupEnd()
    return response
  } else {
    console.error('method not found', rpc)
  }
})

console.log('mocked core loaded')
