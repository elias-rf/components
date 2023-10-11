import { getTracker } from '@/mocks/database.mock'
import { knexMockHistory } from '@/mocks/knex-mock-history'
import { describe, expect, it, vi } from 'vitest'
import { nfEntradaController } from './nf-entrada.controller'
import { knexMockMsql } from '@/mocks/connections.mock'
import { dbPlano } from '@/controllers/db-plano.db'
import { dbOftalmo } from '@/controllers/db-oftalmo.db'

describe('nfEntradaController', () => {
  const tracker = getTracker()
  dbPlano.knex = knexMockMsql
  dbOftalmo.knex = knexMockMsql

  it('list', async () => {
    tracker.reset()
    tracker.on.select('NfMestre').response([{ NroNf: 1 }])

    const rsp = await nfEntradaController.list({
      where: [['NroNf', 1]],
      orderBy: [['NroNf', 'asc']],
      select: ['NroNf'],
    })

    expect(rsp).toEqual([{ NroNf: 1 }])
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, 1],
        sql: 'select top (@p0) [NroNf] from [NfMestre] where [NroNf] = @p1 order by [NroNf] asc',
      },
    ])
  })

  it('read', async () => {
    tracker.reset()
    tracker.on.select('NfMestre').response([{ NroNf: '1' }])

    const rsp = await nfEntradaController.read({
      id: [
        ['CdEmpresa', 1],
        ['Modelo', '1'],
        ['NroNf', 1],
        ['Serie', 'a'],
      ],
      select: ['NroNf'],
    })

    expect(rsp).toEqual({ NroNf: '1' })

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, 1, '1', 1, 'a'],
        sql: 'select top (@p0) [NroNf] from [NfMestre] where [CdEmpresa] = @p1 and [Modelo] = @p2 and [NroNf] = @p3 and [Serie] = @p4',
      },
    ])
  })

  it('transferenciaCreate', async () => {
    tracker.reset()
    tracker.on
      .select('tbl_Produto_Item')
      .response([{ kProdutoItem: 2, IdVisiontech: '3 ' }])
    tracker.on.select('tOrdemProducao').response([{ fkProdutoItem: 1 }])
    tracker.on.select('CadPro').response([{ CdProduto: 1 }])
    tracker.on
      .select('tOperacaoOrdemProducao')
      .response([{ DataHoraInicio: '2020-01-01 00:00:00' }])
    tracker.on.select('NfMestre').response([])
    tracker.on.insert('NfMestre').response([])
    tracker.on.insert('NFItem').response([])
    tracker.on.update('Estoque').response([])
    tracker.on.update('EstatPro').response([])
    tracker.on.insert('Lotes').response([])
    tracker.on.insert('NfLogConferencia').response([])

    const rsp = await nfEntradaController.transferenciaCreate({
      controles: ['000001000017'],
    })

    expect(rsp).toEqual(true)
    expect(knexMockHistory(tracker, ['sql'])).toEqual([
      {
        sql: 'select top (@p0) [fkProdutoItem] from [tOrdemProducao] where [kOp] = @p1',
      },
      {
        sql: 'select top (@p0) [kProdutoItem] from [tbl_Produto_Item] where [kProdutoItem] = @p1',
      },
      {
        sql: 'select top (@p0) [IdVisiontech] from [tbl_Produto_Item] where [kProdutoItem] = @p1',
      },
      {
        sql: 'select top (@p0) [CdProduto] from [CadPro] where [CdProduto] = @p1',
      },
      {
        sql: 'select top (@p0) [DataHoraInicio] from [tOperacaoOrdemProducao] where [fkOperacao] = @p1 and [fkOp] = @p2 order by [DataHoraInicio] desc',
      },
      {
        sql: 'select top (@p0) [DataHoraInicio] from [tOperacaoOrdemProducao] where [fkOperacao] = @p1 and [fkOp] = @p2 order by [DataHoraInicio] desc',
      },
      {
        sql: 'select top (@p0) [NroNf] from [NfMestre] where [CdEmpresa] = @p1 and [NroNf] = @p2 and [Serie] = @p3 and [Modelo] = @p4',
      },
      {
        sql: 'insert into [NfMestre] ([BaseSubstituicao], [CdEmpresa], [CdFornecedor], [ConPag], [DtConferencia], [DtEmi], [DtEntr], [DtValidacao], [FgConferencia], [FgDespesasCompoeBaseICMS], [FgDespesasCompoeBaseIPI], [FgDespesasCompoeTotal], [FgDespesasCompoeVlProdutos], [FgEstoque], [FgFreteCompoeBaseICMS], [FgFreteCompoeBaseIPI], [FgFreteCompoeTotal], [FgFreteCompoeVlProdutos], [FgGNRE], [FgIPICompoeBase], [FgIPICompoeBaseSub], [FgSeguroCompoeBaseICMS], [FgSeguroCompoeBaseIPI], [FgSeguroCompoeTotal], [FgSeguroCompoeVlProdutos], [FgSomaICMSSub], [FgUtilizaPercRedBCIcms], [FgXML], [Frete], [GrupoFiscal], [Horario], [ICMSBasCalc], [ICMSFrete], [ICMSOperPropria], [ICMSRetido], [ICMSVlr], [IPIBasCalc], [IPIFrete], [IPIVlr], [IdParametro], [Modelo], [Nop], [NopFiscal], [NroNf], [NumChaveNfe], [NumNotaRelacionada], [Seguro], [Serie], [SgUsuario], [Tipo], [TotNF], [VlDespAcessorias], [VlMercadorias], [VlNfComplementar], [VlNotaRelacionada], [VlRepasseICMS], [dsObservacao]) values (@p0, @p1, @p2, @p3, @p4, @p5, @p6, @p7, @p8, @p9, @p10, @p11, @p12, @p13, @p14, @p15, @p16, @p17, @p18, @p19, @p20, @p21, @p22, @p23, @p24, @p25, @p26, @p27, @p28, @p29, @p30, @p31, @p32, @p33, @p34, @p35, @p36, @p37, @p38, @p39, @p40, @p41, @p42, @p43, @p44, @p45, @p46, @p47, @p48, @p49, @p50, @p51, @p52, @p53, @p54, @p55, @p56)',
      },
      {
        sql: 'insert into [NFItem] ([CdBaseCalculoCreditoPISCOFINS], [CdContribuicaoApuradaPISCOFINS], [CdEmpresa], [CdFornecedor], [CdProduto], [CdTipoCreditoPISCOFINS], [DtEntr], [FgCompoeBaseSub], [FgConferido], [FgCusto], [FgEstoque], [FgEtiqueta], [FgICMSJaRecolhido], [Modelo], [Nop], [NopfiscalItem], [NroNF], [PercICMS], [PercIPI], [PrecPMC], [Quantidade], [Sequencia], [Serie], [TipoMovimentacao], [TipoTributacao], [VlAcrescItem], [VlBaseCalculoICMS], [VlBaseCalculoIPI], [VlBaseSub], [VlBrutoUnitario], [VlDescItem], [VlICMSSub], [VlLiquidoUnitario], [VlRelacionado], [VlRepasseICMSItem], [VlTotItem], [VlrICMS], [VlrIPI]) values (@p0, @p1, @p2, @p3, @p4, @p5, @p6, @p7, @p8, @p9, @p10, @p11, @p12, @p13, @p14, @p15, @p16, @p17, @p18, @p19, @p20, @p21, @p22, @p23, @p24, @p25, @p26, @p27, @p28, @p29, @p30, @p31, @p32, @p33, @p34, @p35, @p36, @p37)',
      },
      {
        sql: 'update [Estoque] set [EstAtual] = [EstAtual] + @p0 where [CdEmpresa] = @p1 and [CdProduto] = @p2;select @@rowcount',
      },
      {
        sql: 'update [EstatPro] set [QtdCompras] = [QtdCompras] + @p0 where [CdEmpresa] = @p1 and [MesRef] = @p2 and [AnoRef] = @p3 and [CdProduto] = @p4;select @@rowcount',
      },
      {
        sql: 'insert into [Lotes] ([Aspecto], [CdFilial], [CdFornecedor], [CdLote], [CdNRA], [CdProduto], [Densidade], [DtAnalise], [DtEntrada], [DtFabricacao], [DtLimiteUso], [DtValidade], [FatorCorrecao], [Modelo], [NumNfEntrada], [PercentualDiluicao], [QtdeAdquirida], [SaldoPeso], [SerieNfEntrada], [SituacaoLote], [TipoLote]) values (@p0, @p1, @p2, @p3, @p4, @p5, @p6, @p7, @p8, @p9, @p10, @p11, @p12, @p13, @p14, @p15, @p16, @p17, @p18, @p19, @p20)',
      },
      {
        sql: 'insert into [LotesNotaEntrada] ([CdFilial], [CdFornecedor], [CdProduto], [Modelo], [NumLote], [NumNota], [Quantidade], [Serie]) values (@p0, @p1, @p2, @p3, @p4, @p5, @p6, @p7)',
      },
      {
        sql: 'insert into [NfLogConferencia] ([CdFilial], [CdFornecedor], [Data], [Modelo], [NumNota], [Operacao], [Serie], [Usuario]) values (@p0, @p1, @p2, @p3, @p4, @p5, @p6, @p7)',
      },
    ])
    vi.useRealTimers()
  })
})
