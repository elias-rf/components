import { NfEntrada } from "@/database";
import {
  estoqueModel,
  nfEntradaControleModel,
  nfEntradaItemModel,
  nfEntradaLogModel,
  ordemProducaoModel,
  produtoControleModel,
  produtoEstatisticaModel,
} from "@/models";
import { CrudObjection } from "@/models/utils/crud-objection";
import { day } from "@/utils/date/day";
import { isEmpty } from "@/utils/identify/is-empty";

class NfEntradaModel extends CrudObjection {
  constructor() {
    super(NfEntrada);
  }

  async transferenciaCreate({ controles }: { controles: string[] }) {
    if (controles.length === 0)
      throw new Error(`Controles não foram enviados para a transferência`);

    const kOp = await ordemProducaoModel.fromControle({
      controle: controles[0],
    });

    // todos controles são válidos e da mesma ordem de produção
    for (const ctrl of controles) {
      const valid = await ordemProducaoModel.ehControleValido({
        controle: ctrl,
      });
      if (!valid) throw new Error(`Controle ${ctrl} inválido`);
      const op_id = await ordemProducaoModel.fromControle({
        controle: ctrl,
      });
      if (kOp !== op_id)
        throw new Error(`Controle ${ctrl} pertence a outra ordem de produção`);
    }

    const { CdProduto }: any = await ordemProducaoModel.produtoPlano({
      id: { kOp },
      select: ["CdProduto"],
    });

    if (isEmpty(CdProduto)) {
      throw new Error(`Ordem de produção ${kOp} não possui vinculo com Plano`);
    }

    const fabricacao = await ordemProducaoModel
      .dataFabricacao({ id: { kOp } })
      .then((dt: any) => {
        if (isEmpty(dt)) {
          throw new Error(
            `Ordem de produção ${kOp} não possui data de fabricação`
          );
        }
        return day(dt).format("YYYY-MM-DD");
      });

    const expiracao = await ordemProducaoModel.dataValidade({
      id: { kOp },
    });

    const quantidade = controles.length;

    const hoje = day().format("YYYY-MM-DD");
    const agora = day().format("HH:mm:ss");

    const nf = await this.read({
      id: {
        CdEmpresa: 1,
        NroNf: kOp,
        Serie: "XX",
        Modelo: "1",
      },

      select: ["NroNf"],
    });

    if (!isEmpty(nf)) {
      throw new Error(`Ordem de produção ${kOp} já está cadastrada`);
    }

    await this.create({
      data: {
        CdEmpresa: 1,
        NroNf: parseInt(kOp),
        Serie: "XX",
        Modelo: "1",
        CdFornecedor: 1,
        DtEmi: `${hoje} ${agora}`,
        DtEntr: `${hoje} ${agora}`,
        Nop: 1102,
        NopFiscal: 1102,
        TotNF: quantidade * 2,
        BaseSubstituicao: 0,
        IPIBasCalc: 0,
        IPIVlr: 0,
        IPIFrete: 0,
        ICMSBasCalc: 0,
        ICMSVlr: 0,
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

    await nfEntradaItemModel.create({
      data: {
        CdBaseCalculoCreditoPISCOFINS: 0,
        CdContribuicaoApuradaPISCOFINS: 0,
        CdEmpresa: 1,
        CdFornecedor: 1,
        CdProduto: CdProduto,
        CdTipoCreditoPISCOFINS: 0,
        DtEntr: `${hoje} ${agora}`,
        FgCompoeBaseSub: "S",
        FgConferido: " ",
        FgCusto: "S",
        FgEstoque: "S",
        FgEtiqueta: "N",
        FgICMSJaRecolhido: "0",
        Modelo: "1",
        Nop: 0,
        NopfiscalItem: 0,
        NroNF: parseInt(kOp),
        PercICMS: 0,
        PercIPI: 0,
        PrecPMC: 0,
        Quantidade: quantidade,
        Sequencia: 1,
        Serie: "XX",
        TipoMovimentacao: "N",
        TipoTributacao: "T",
        VlAcrescItem: 0,
        VlBaseCalculoICMS: 0,
        VlBaseCalculoIPI: 0,
        VlBaseSub: 0,
        VlBrutoUnitario: 2,
        VlDescItem: 0,
        VlICMSSub: 0,
        VlLiquidoUnitario: 2,
        VlRelacionado: 0,
        VlRepasseICMSItem: 0,
        VlrICMS: 0,
        VlrIPI: 0,
        VlTotItem: quantidade * 2,
      },
    });

    await estoqueModel.increment({
      filter: {
        CdEmpresa: "1",
        CdProduto: CdProduto.toString() || "",
      },
      increment: { EstAtual: quantidade },
    });

    await produtoEstatisticaModel.increment({
      filter: {
        CdEmpresa: "1",
        MesRef: day().format("MM"),
        AnoRef: day().format("YY"),
        CdProduto: CdProduto.toString() || "",
      },
      increment: { quantidade_compra: quantidade },
    });

    for (const ctrl of controles) {
      await produtoControleModel.create({
        data: {
          CdFilial: 1,
          NumNfEntrada: parseInt(CdProduto || "0"),
          SerieNfEntrada: "XX",
          Modelo: "1",
          CdFornecedor: 1,
          Aspecto: " ",
          CdLote: ctrl,
          CdNRA: " ",
          CdProduto: CdProduto || "",
          Densidade: 0,
          DtAnalise: fabricacao || "",
          DtEntrada: hoje,
          DtFabricacao: fabricacao || "",
          DtLimiteUso: expiracao || "",
          DtValidade: expiracao || "",
          FatorCorrecao: 0,
          PercentualDiluicao: 0,
          QtdeAdquirida: 1,
          SaldoPeso: 1,
          SituacaoLote: "A",
          TipoLote: "C",
        },
      });
      await nfEntradaControleModel.create({
        data: {
          CdFilial: 1,
          NumNota: parseInt(kOp),
          Serie: "XX",
          CdFornecedor: 1,
          Modelo: "1",
          NumLote: ctrl,
          CdProduto: CdProduto || "",
          Quantidade: 1,
        },
      });
    }

    await nfEntradaLogModel.create({
      data: {
        CdFilial: 1,
        NumNota: parseInt(kOp),
        Serie: "XX",
        Modelo: "1",
        CdFornecedor: 1,
        Data: `${hoje} ${agora}`,
        Usuario: "ERIBEIRO",
        Operacao: "INCLUSAO DA CONFERENCIA",
      },
    });

    return true;
  }
}

export const nfEntradaModel = new NfEntradaModel();
