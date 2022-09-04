import { day } from "@er/utils/src/day";
import { isEmpty } from "@er/utils/src/is-empty";
import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";
import { EstoqueModel } from "../estoque/estoque.model";
import { NfEntradaControleModel } from "../nf-entrada-controle/nf-entrada-controle.model";
import { NfEntradaItemModel } from "../nf-entrada-item/nf-entrada-item.model";
import { NfEntradaLogModel } from "../nf-entrada-log/nf-entrada-log.model";
import { OrdemProducaoModel } from "../ordem-producao/ordem-producao.model";
import { ProdutoControleModel } from "../produto-controle/produto-controle.model";
import { ProdutoEstatisticaModel } from "../produto-estatistica/produto-estatistica.model";

export class NfEntradaModel extends Entity {
  ordemProducao: OrdemProducaoModel;
  nfEntradaControle: NfEntradaControleModel;
  nfEntradaItem: NfEntradaItemModel;
  nfEntradaLog: NfEntradaLogModel;
  estoque: EstoqueModel;
  produtoEstatistica: ProdutoEstatisticaModel;
  produtoControle: ProdutoControleModel;

  constructor(connections: TConnections) {
    super(connections, "nf_entrada");
    this.ordemProducao = new OrdemProducaoModel(connections);
    this.nfEntradaControle = new NfEntradaControleModel(connections);
    this.nfEntradaItem = new NfEntradaItemModel(connections);
    this.nfEntradaLog = new NfEntradaLogModel(connections);
    this.estoque = new EstoqueModel(connections);
    this.produtoEstatistica = new ProdutoEstatisticaModel(connections);
    this.produtoControle = new ProdutoControleModel(connections);
  }

  // Transfere produtos acabados da matriz para filial
  async nfEntradaTransferenciaCreate({
    controles,
  }: {
    controles: string[];
  }): Promise<boolean> {
    // validateIsThrow(isNonEmptyArray(controles), "Controles devem ser array");
    const kOp = await this.ordemProducao.fromControle({
      controle: controles[0],
    });

    for (const controle of controles) {
      const valid = await this.ordemProducao.isControleValid({ controle });
      if (!valid) throw new Error(`Controle ${controle} inválido`);
      const op = await this.ordemProducao.fromControle({ controle });
      if (kOp !== op)
        throw new Error(
          `Controle ${controle} pertence a outra ordem de produção`
        );
    }

    const produto = await this.ordemProducao.produtoPlano({ op_id: kOp });
    if (isEmpty(produto)) {
      throw new Error(`Ordem de produção ${kOp} não possui vinculo com Plano`);
    }

    const fabricacao = await this.ordemProducao
      .dataFabricacao([kOp])
      .then((dt) => {
        if (isEmpty(dt)) {
          throw new Error(
            `Ordem de produção ${kOp} não possui data de fabricação`
          );
        }
        return day(dt).format("YYYY-MM-DD");
      });

    const expiracao = await this.ordemProducao
      .dataValidade([kOp])
      .then((dt: any) => dt?.format("YYYY-MM-DD"));

    const quantidade = controles.length;

    const hoje = day().format("YYYY-MM-DD");
    const agora = day().format("HH:mm:ss");

    const nf = await this.read({
      id: { filial_id: "1", nota_id: kOp, serie_id: "XX", modelo_id: "1" },
    });

    if (!isEmpty(nf)) {
      throw new Error(`Ordem de produção ${kOp} já está cadastrada`);
    }

    this.create({
      data: {
        filial_id: 1,
        NroNf: kOp,
        Serie: "XX",
        Modelo: "1",
        CdFornecedor: 1,
        DtEmi: `${hoje} ${agora}`,
        DtEntr: `${hoje} ${agora}`,
        Nop: 1102,
        NopFiscal: 1102,
        TotNf: quantidade * 2,
        BaseSubstituicao: 0,
        IPIBasCalc: 0,
        IPIVlr: 0,
        IPIFrete: 0,
        ICMSBasCalc: 0,
        IcmsVlr: 0,
        ICMSRetido: 0,
        ICMSOperPropria: 0,
        ICMSFrete: 0,
        Frete: 0,
        Seguro: 0,
        DtValidacao: hoje,
        VlMercadorias: quantidade * 2,
        ConPag: "P",
        Tipo: "N",
        Horario: agora,
        FgIPICompoeBase: "N",
        VlNfComplementar: 0,
        FgIPICompoeBaseSub: "N",
        FgEstoque: "S",
        IdParametro: 0,
        GrupoFiscal: 0,
        FgConferencia: "P",
        VlRepasseICMS: 0,
        FgSomaICMSSub: "S",
        DtConferencia: "1900-01-01 00:00:00",
        SgUsuario: "ERIBEIRO",
        dsObservacao: " ",
        FgUtilizaPercRedBCIcms: "N",
        VlDespAcessorias: 0,
        NumNotaRelacionada: 0,
        VlNotaRelacionada: 0,
        FgDespesasCompoeTotal: "N",
        NumChaveNfe: " ",
        FgXML: "N",
        FgGNRE: "A",
        FgFreteCompoeBaseICMS: "N",
        FgFreteCompoeBaseIPI: "N",
        FgFreteCompoeVlProdutos: "N",
        FgFreteCompoeTotal: "N",
        FgDespesasCompoeBaseICMS: "N",
        FgDespesasCompoeBaseIPI: "N",
        FgDespesasCompoeVlProdutos: "N",
        FgSeguroCompoeVlProdutos: "N",
        FgSeguroCompoeBaseICMS: "N",
        FgSeguroCompoeBaseIPI: "N",
        FgSeguroCompoeTotal: "N",
      },
    });

    await this.nfEntradaItem.create({
      data: {
        CdEmpresa: 1,
        NroNF: kOp,
        Serie: "XX",
        Modelo: "1",
        CdFornecedor: 1,
        CdProduto: produto.CdProduto,
        FgCusto: "S",
        FgEtiqueta: "N",
        PercIcms: 0,
        PercIpi: 0,
        Quantidade: quantidade,
        TipoMovimentacao: "N",
        VlAcrescItem: 0,
        VlDescItem: 0,
        VlrIcms: 0,
        VlrIpi: 0,
        VlTotItem: quantidade * 2,
        TipoTributacao: "T",
        VlBaseSub: 0,
        VlIcmsSub: 0,
        DtEntr: `${hoje} ${agora}`,
        FgEstoque: "S",
        VlRepasseICMSItem: 0,
        FgICMSJaRecolhido: 0,
        PrecPMC: 0,
        VlRelacionado: 0,
        FgCompoeBaseSub: "S",
        Nop: 0,
        NopFiscalItem: 0,
        VlBaseCalculoICMS: 0,
        VlBrutoUnitario: 2,
        VlLiquidoUnitario: 2,
        CdBaseCalculoCreditoPISCOFINS: 0,
        CdTipoCreditoPISCOFINS: 0,
        CdContribuicaoApuradaPISCOFINS: 0,
        Sequencia: 1,
        VlBaseCalculoIPI: 0,
        FgConferido: " ",
      },
    });

    await this.estoque.increment(["1", produto.CdProduto || ""], quantidade);

    await this.produtoEstatistica.increment(
      ["1", day().format("MM"), day().format("YY"), produto.CdProduto || ""],
      quantidade
    );

    for (const ctrl of controles) {
      await this.produtoControle.create({
        data: {
          Aspecto: " ",
          CdFilial: 1,
          CdFornecedor: 1,
          CdLote: ctrl,
          CdNRA: " ",
          CdProduto: produto.CdProduto || "",
          Densidade: 0,
          DtAnalise: fabricacao || "",
          DtEntrada: hoje,
          DtFabricacao: fabricacao || "",
          DtLimiteUso: expiracao || "",
          DtValidade: expiracao || "",
          FatorCorrecao: 0,
          Modelo: "1",
          NumNfEntrada: kOp,
          PercentualDiluicao: 0,
          QtdeAdquirida: 1,
          SaldoPeso: 1,
          SerieNfEntrada: "XX",
          SituacaoLote: "A",
          TipoLote: "C",
        },
      });
      await this.nfEntradaControle.create({
        data: {
          NumNota: kOp,
          Serie: "XX",
          Modelo: "1",
          CdFornecedor: "1",
          NumLote: ctrl,
          CdProduto: produto.CdProduto || "",
          Quantidade: "1",
          CdFilial: "1",
        },
      });
    }
    await this.nfEntradaLog.create({
      data: {
        CdFilial: "1",
        NumNota: kOp,
        Serie: "XX",
        Modelo: "1",
        CdFornecedor: "1",
        Data: `${hoje} ${agora}`,
        Usuario: "ERIBEIRO",
        Operacao: "INCLUSAO DA CONFERENCIA",
      },
    });

    return true;
  }
}
