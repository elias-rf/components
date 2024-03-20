import { estoqueController } from '@/core/estoque/estoque_controller.js'
import { nfEntradaControleController } from '@/core/nf-entrada-controle/nf-entrada-controle_controller.js'
import { nfEntradaItemController } from '@/core/nf-entrada-item/nf-entrada-item_controller.js'
import { ordemProducaoController } from '@/core/ordem-producao/ordem-producao_controller.js'
import { dataSource } from '@/data/index.js'
import { oftalmoDb } from '@/data/oftalmo/oftalmo.db.js'
import { planoDb } from '@/data/plano/plano.db.js'
import { knexMockMsql } from '@/utils/mocks/connections.mock.js'
import { getTracker } from '@/utils/mocks/database.mock.js'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { createTransferencia } from './create-transferencia.js'

describe('createTransferencia', () => {
  const tracker = getTracker()
  oftalmoDb.setDriver(knexMockMsql)
  planoDb.setDriver(knexMockMsql)
  const useCase = createTransferencia(dataSource, {
    estoqueController,
    nfEntradaControleController,
    nfEntradaItemController,
    ordemProducaoController,
  })

  beforeEach(() => {
    planoDb.startLog()
    oftalmoDb.startLog()
    tracker.reset()
  })

  test('transferenciaCreate', async () => {
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

    const rsp = await useCase({
      controles: ['000001000017'],
    })

    expect(rsp).toEqual(true)
    const logOftalmo = oftalmoDb.log()
    expect(logOftalmo.length).toBe(5)
    expect(logOftalmo[0]).toEqual(
      'select top (1) [fkProdutoItem] from [tOrdemProducao] where [kOp] = 100'
    )
    expect(logOftalmo[1]).toEqual(
      'select top (1) [kProdutoItem] from [tbl_Produto_Item] where [kProdutoItem] = 1'
    )
    expect(logOftalmo[2]).toEqual(
      'select top (1) [IdVisiontech] from [tbl_Produto_Item] where [kProdutoItem] = 2'
    )
    expect(logOftalmo[3]).toEqual(
      'select [DataHoraInicio] from [tOperacaoOrdemProducao] where [fkOperacao] = 3059 and [fkOp] = 100 order by [DataHoraInicio] desc'
    )
    expect(logOftalmo[4]).toEqual(
      'select [DataHoraInicio] from [tOperacaoOrdemProducao] where [fkOperacao] = 3059 and [fkOp] = 100 order by [DataHoraInicio] desc'
    )

    const logPlano = planoDb.log()
    expect(logPlano.length).toBe(9)
    expect(logPlano[0]).toEqual(
      "select top (1) [CdProduto] from [CadPro] where [CdProduto] = '3'"
    )
    expect(logPlano[1]).toEqual(
      "select top (1) [NroNf] from [NfMestre] where [CdEmpresa] = 1 and [NroNf] = 100 and [Serie] = 'XX' and [Modelo] = '1'"
    )
    expect(
      logPlano[2]
        .replaceAll(/\d\d\d\d-\d\d-\d\d/g, '1900-01-01')
        .replaceAll(/\d\d:\d\d:\d\d/g, '00:00:00')
    ).toBe(
      "insert into [NfMestre] ([BaseSubstituicao], [CdEmpresa], [CdFornecedor], [ConPag], [DtConferencia], [DtEmi], [DtEntr], [DtValidacao], [FgConferencia], [FgDespesasCompoeBaseICMS], [FgDespesasCompoeBaseIPI], [FgDespesasCompoeTotal], [FgDespesasCompoeVlProdutos], [FgEstoque], [FgFreteCompoeBaseICMS], [FgFreteCompoeBaseIPI], [FgFreteCompoeTotal], [FgFreteCompoeVlProdutos], [FgGNRE], [FgIPICompoeBase], [FgIPICompoeBaseSub], [FgSeguroCompoeBaseICMS], [FgSeguroCompoeBaseIPI], [FgSeguroCompoeTotal], [FgSeguroCompoeVlProdutos], [FgSomaICMSSub], [FgUtilizaPercRedBCIcms], [FgXML], [Frete], [GrupoFiscal], [Horario], [ICMSBasCalc], [ICMSFrete], [ICMSOperPropria], [ICMSRetido], [ICMSVlr], [IPIBasCalc], [IPIFrete], [IPIVlr], [IdParametro], [Modelo], [Nop], [NopFiscal], [NroNf], [NumChaveNfe], [NumNotaRelacionada], [Seguro], [Serie], [SgUsuario], [Tipo], [TotNF], [VlDespAcessorias], [VlMercadorias], [VlNfComplementar], [VlNotaRelacionada], [VlRepasseICMS], [dsObservacao]) values (0, 1, 1, 'P', '1900-01-01 00:00:00', '1900-01-01 00:00:00', '1900-01-01 00:00:00', '1900-01-01', 'P', 'N', 'N', 'N', 'N', 'S', 'N', 'N', 'N', 'N', 'A', 'N', 'N', 'N', 'N', 'N', 'N', 'S', 'N', 'N', 0, 0, '00:00:00', 0, 0, 0, 0, 0, 0, 0, 0, 0, '1', 1102, 1102, 100, ' ', 0, 0, 'XX', 'ERIBEIRO', 'N', 2, 0, 2, 0, 0, 0, ' ')"
    )
    expect(
      logPlano[3]
        .replaceAll(/\d\d\d\d-\d\d-\d\d/g, '1900-01-01')
        .replaceAll(/\d\d:\d\d:\d\d/g, '00:00:00')
    ).toEqual(
      "insert into [NFItem] ([CdBaseCalculoCreditoPISCOFINS], [CdContribuicaoApuradaPISCOFINS], [CdEmpresa], [CdFornecedor], [CdProduto], [CdTipoCreditoPISCOFINS], [DtEntr], [FgCompoeBaseSub], [FgConferido], [FgCusto], [FgEstoque], [FgEtiqueta], [FgICMSJaRecolhido], [Modelo], [Nop], [NopfiscalItem], [NroNF], [PercICMS], [PercIPI], [PrecPMC], [Quantidade], [Sequencia], [Serie], [TipoMovimentacao], [TipoTributacao], [VlAcrescItem], [VlBaseCalculoICMS], [VlBaseCalculoIPI], [VlBaseSub], [VlBrutoUnitario], [VlDescItem], [VlICMSSub], [VlLiquidoUnitario], [VlRelacionado], [VlRepasseICMSItem], [VlTotItem], [VlrICMS], [VlrIPI]) values (0, 0, 1, 1, '1', 0, '1900-01-01 00:00:00', 'S', ' ', 'S', 'S', 'N', '0', '1', 0, 0, 100, 0, 0, 0, 1, 1, 'XX', 'N', 'T', 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0)"
    )
    expect(logPlano[4]).toEqual(
      "update [Estoque] set [EstAtual] = [EstAtual] + 1 where [CdEmpresa] = 1 and [CdProduto] = '1';select @@rowcount"
    )
    expect(logPlano[5]).toEqual(
      "update [EstatPro] set [QtdCompras] = [QtdCompras] + 1 where [CdEmpresa] = 1 and [MesRef] = 3 and [AnoRef] = 24 and [CdProduto] = '1';select @@rowcount"
    )
    expect(
      logPlano[6]
        .replaceAll(/\d\d\d\d-\d\d-\d\d/g, '1900-01-01')
        .replaceAll(/\d\d:\d\d:\d\d/g, '00:00:00')
    ).toEqual(
      "insert into [Lotes] ([Aspecto], [CdFilial], [CdFornecedor], [CdLote], [CdNRA], [CdProduto], [Densidade], [DtAnalise], [DtEntrada], [DtFabricacao], [DtLimiteUso], [DtValidade], [FatorCorrecao], [Modelo], [NumNfEntrada], [PercentualDiluicao], [QtdeAdquirida], [SaldoPeso], [SerieNfEntrada], [SituacaoLote], [TipoLote]) values (' ', 1, 1, '000001000017', ' ', '1', 0, '1900-01-01', '1900-01-01', '1900-01-01', '1900-01-01', '1900-01-01', 0, '1', 1, 0, 1, 1, 'XX', 'A', 'C')"
    )
    expect(logPlano[7]).toEqual(
      "insert into [LotesNotaEntrada] ([CdFilial], [CdFornecedor], [CdProduto], [Modelo], [NumLote], [NumNota], [Quantidade], [Serie]) values (1, 1, '1', '1', '000001000017', 100, 1, 'XX')"
    )
    expect(
      logPlano[8]
        .replaceAll(/\d\d\d\d-\d\d-\d\d/g, '1900-01-01')
        .replaceAll(/\d\d:\d\d:\d\d/g, '00:00:00')
    ).toEqual(
      "insert into [NfLogConferencia] ([CdFilial], [CdFornecedor], [Data], [Modelo], [NumNota], [Operacao], [Serie], [Usuario]) values (1, 1, '1900-01-01 00:00:00', '1', 100, 'INCLUSAO DA CONFERENCIA', 'XX', 'ERIBEIRO')"
    )
  })
})
