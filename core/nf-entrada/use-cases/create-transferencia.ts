import { TEstoqueController } from '@/core/estoque/estoque_controller.js'
import { TNfEntradaControleController } from '@/core/nf-entrada-controle/nf-entrada-controle_controller.js'
import { TNfEntradaItemController } from '@/core/nf-entrada-item/nf-entrada-item_controller.js'
import { nfEntradaLogController } from '@/core/nf-entrada-log/nf-entrada-log_controller.js'
import { TOrdemProducaoController } from '@/core/ordem-producao/ordem-producao_controller.js'
import { produtoPlanoControleController } from '@/core/produto-plano-controle/produto-plano-controle_controller.js'
import { produtoEstatisticaController } from '@/core/produto-plano-estatistica/produto-estatistica_controller.js'
import { TDataSource } from '@/data/index.js'
import { TProdutoDtoFields } from '@/data/plano/produto/produto.type.js'
import { now } from '@/utils/date/now.js'
import { isEmpty } from '@/utils/identify/is-empty.js'
import { format } from 'date-fns'
import { create } from './create.js'
import { read } from './read.js'

export const createTransferencia = (
  dataSource: TDataSource,
  {
    estoqueController,
    nfEntradaControleController,
    nfEntradaItemController,
    ordemProducaoController,
  }: {
    ordemProducaoController: TOrdemProducaoController
    nfEntradaItemController: TNfEntradaItemController
    nfEntradaControleController: TNfEntradaControleController
    estoqueController: TEstoqueController
  }
) =>
  async function createTransferencia({ controles }: { controles: string[] }) {
    if (controles.length === 0)
      throw new Error(`Controles não foram enviados para a transferência`)

    const kOp = await ordemProducaoController.ordemProducao_fromControle({
      controle: controles[0],
    })

    // todos controles são válidos e da mesma ordem de produção
    for (const ctrl of controles) {
      const valid =
        await ordemProducaoController.ordemProducao_ehControleValido({
          controle: ctrl,
        })
      if (!valid) throw new Error(`Controle ${ctrl} inválido`)
      const op_id = await ordemProducaoController.ordemProducao_fromControle({
        controle: ctrl,
      })
      if (kOp !== op_id)
        throw new Error(`Controle ${ctrl} pertence a outra ordem de produção`)
    }

    const cdProduto = (await ordemProducaoController.ordemProducao_produtoPlano(
      {
        id: [['id', kOp]],
        select: ['id'],
      }
    )) as Record<TProdutoDtoFields, any>

    if (isEmpty(cdProduto.id)) {
      throw new Error(`Ordem de produção ${kOp} não possui vinculo com Plano`)
    }

    const fabricacao = await ordemProducaoController
      .ordemProducao_dataFabricacao({ id: [['id', kOp]] })
      .then((dt: any) => {
        if (isEmpty(dt)) {
          throw new Error(
            `Ordem de produção ${kOp} não possui data de fabricação`
          )
        }
        return format(dt, 'yyyy-MM-dd')
      })

    const expiracao = await ordemProducaoController.ordemProducao_dataValidade({
      id: [['id', kOp]],
    })

    const quantidade = controles.length

    const hoje = format(now(), 'yyyy-MM-dd')
    const agora = format(now(), 'HH:mm:ss')

    const readUseCase = read(dataSource)

    const nf = await readUseCase({
      where: [
        ['empresaId', 1],
        ['numero', kOp],
        ['serie', 'XX'],
        ['modelo', '1'],
      ],
      select: ['numero'],
    })

    if (!isEmpty(nf)) {
      throw new Error(`Ordem de produção ${kOp} já está cadastrada`)
    }

    const createUseCase = create(dataSource)
    await createUseCase({
      data: {
        empresaId: 1,
        numero: kOp,
        serie: 'XX',
        modelo: '1',
        fornecedorId: 1,
        cfop: 1102,
        cfopFiscal: 1102,
        valorTotal: quantidade * 2,
        baseSubstituicao: 0,
        baseCalculoIpi: 0,
        valorIpi: 0,
        freteIpi: 0,
        baseCalculoIcms: 0,
        valorIcms: 0,
        retidoIcms: 0,
        operacaoPropriaIcms: 0,
        freteIcms: 0,
        frete: 0,
        seguro: 0,
        valorMercadorias: quantidade * 2,
        conPag: 'P',
        tipo: 'N',
        horario: agora,
        flagIpiCompoeBase: 'N',
        valorNfComplementar: 0,
        flagIpiCompoeBaseSubstituicao: 'N',
        flagEstoque: 'S',
        parametroId: 0,
        grupoFiscal: 0,
        flagConferencia: 'P',
        valorRepasseIcms: 0,
        flagSomaIcmsSubstituicao: 'S',
        conferenciaData: '1900-01-01 00:00:00',
        usuario: 'ERIBEIRO',
        observacao: ' ',
        flagUtilizaPercentualReduzidoBCIcms: 'N',
        valorDespesasAcessorias: 0,
        numNotaRelacionada: 0,
        valorNotaRelacionada: 0,
        flagDespesasCompoeTotal: 'N',
        numChaveNfe: ' ',
        flagXml: 'N',
        flagGnre: 'A',
        flagFreteCompoeBaseIcms: 'N',
        flagFreteCompoeBaseIpi: 'N',
        flagFreteCompoeValorProdutos: 'N',
        flagFreteCompoeTotal: 'N',
        flagDespesasCompoeBaseIcms: 'N',
        flagDespesasCompoeBaseIpi: 'N',
        flagDespesasCompoeValorProdutos: 'N',
        flagSeguroCompoeValorProdutos: 'N',
        flagSeguroCompoeBaseIcms: 'N',
        flagSeguroCompoeBaseIpi: 'N',
        flagSeguroCompoeTotal: 'N',
        validacaoData: hoje,
        emissaoData: `${hoje} ${agora}`,
        entradaData: `${hoje} ${agora}`,
      },
    })

    await nfEntradaItemController.nfEntradaItem_create({
      data: {
        baseCalculoCreditoPisCofinsId: 0,
        contribuicaoApuradaPisCofinsId: 0,
        empresaId: 1,
        fornecedorId: 1,
        produtoId: cdProduto.id.toString(),
        tipoCreditoPisCofinsId: 0,
        entradaData: `${hoje} ${agora}`,
        flagCompoeBaseSub: 'S',
        flagConferido: ' ',
        flagCusto: 'S',
        flagEstoque: 'S',
        flagEtiqueta: 'N',
        flagIcmsJaRecolhido: '0',
        modelo: '1',
        cfop: 0,
        cfopFiscalItem: 0,
        numero: kOp,
        percentualIcms: 0,
        percentualIpi: 0,
        precoPmc: 0,
        quantidade: quantidade,
        sequencia: 1,
        serie: 'XX',
        tipoMovimentacao: 'N',
        tipoTributacao: 'T',
        valorAcrescimoItem: 0,
        valorBaseCalculoIcms: 0,
        valorBaseCalculoIpi: 0,
        valorBaseSub: 0,
        valorBrutoUnitario: 2,
        valorDescontoItem: 0,
        valorIcmsSubstituicao: 0,
        valorLiquidoUnitario: 2,
        valorRelacionado: 0,
        valorRepasseIcmsItem: 0,
        valorIcms: 0,
        valorIpi: 0,
        valorTotalItem: quantidade * 2,
      },
    })

    await estoqueController.estoque_increment({
      where: [
        ['empresaId', 1],
        ['produtoId', cdProduto.id.toString() || ''],
      ],
      increment: ['estoqueAtual', quantidade],
    })

    await produtoEstatisticaController.produtoEstatistica_increment({
      where: [
        ['CdEmpresa', 1],
        ['MesRef', parseInt(format(now(), 'MM'))],
        ['AnoRef', parseInt(format(now(), 'yy'))],
        ['CdProduto', cdProduto.id.toString() || ''],
      ],
      increment: ['QtdCompras', quantidade],
    })

    for (const ctrl of controles) {
      await produtoPlanoControleController.produtoPlanoControle_create({
        data: {
          empresaId: 1,
          numero: cdProduto.id,
          serie: 'XX',
          modelo: '1',
          fornecedorId: 1,
          aspecto: ' ',
          loteId: ctrl,
          nraId: ' ',
          produtoId: cdProduto.id.toString(),
          densidade: 0,
          analiseData: fabricacao || '',
          entradaData: hoje,
          fabricacaoData: fabricacao || '',
          limiteUsoData: expiracao || '',
          validadeData: expiracao || '',
          fatorCorrecao: 0,
          percentualDiluicao: 0,
          quantidadeAdquirida: 1,
          saldoPeso: 1,
          situacaoLote: 'A',
          tipoLote: 'C',
        },
      })
      await nfEntradaControleController.nfEntradaControle_create({
        data: {
          empresaId: 1,
          numero: kOp,
          serie: 'XX',
          fornecedorId: 1,
          modelo: '1',
          loteId: ctrl,
          produtoId: cdProduto.id.toString(),
          quantidade: 1,
        },
      })
    }

    await nfEntradaLogController.nfEntradaLog_create({
      data: {
        empresaId: 1,
        numero: kOp,
        serie: 'XX',
        modelo: '1',
        fornecedorId: 1,
        data: `${hoje} ${agora}`,
        usuario: 'ERIBEIRO',
        operacao: 'INCLUSAO DA CONFERENCIA',
      },
    })

    return true
  }
