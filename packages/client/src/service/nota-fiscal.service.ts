import type { KnexRequest } from "@/lib/knex/knex-request";
import day from "../utils/date/day";

export default function notaFiscalService(client: KnexRequest) {
  const resp = {
    /**
     * Existe nota fiscal cadastrada com o numero informado?
     *
     * @param {string} NumNota
     * @param {string} CdFilial
     */
    async includes(NumNota: string, CdFilial: string) {
      const response = await client("plano", {
        from: "NfMestre",
        select: ["NroNf"],
        where: [
          ["NroNf", "=", NumNota],
          ["CdEmpresa", "=", CdFilial],
        ],
      });

      return response.length > 0;
    },

    /**
     * Cria nota de transferência de estoque da Matriz para Filial
     */
    async transferir(
      kOp: string,
      produto: string,
      fabricacao: string,
      expiracao: string,
      controles: string[]
    ) {
      const quantidade = controles.length;
      const hoje = day().format("YYYY-MM-DD");
      const agora = day().format("HH:mm:ss");

      // Cria nota fiscal mestre
      await client("plano", {
        from: "NfMestre",
        insert: {
          CdEmpresa: 1,
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

      // cria o item relativo ao produto da NF
      await client("plano", {
        from: "NfItem",
        insert: {
          CdEmpresa: 1,
          CdFornecedor: 1,
          NroNF: kOp,
          Serie: "XX",
          Modelo: "1",
          CdProduto: produto,
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

      // aumenta o estoque com a quantidade de seriais
      await client("plano", {
        from: "Estoque",
        increment: [["EstAtual", quantidade]],
        update: { DtUltMovimento: hoje },
        where: [
          ["CdEmpresa", "=", 1],
          ["CdProduto", "=", produto],
        ],
      });

      // aumenta a estatística mensal do produto
      await client("plano", {
        from: "EstatPro",
        increment: [["Entradas", quantidade]],
        where: [
          ["CdEmpresa", "=", 1],
          ["MesRef", "=", day().format("MM")],
          ["AnoRef", "=", day().format("YY")],
          ["CdProduto", "=", produto],
        ],
      });

      // registra cada serial no cadastro de seriais
      for (const ctrl of controles) {
        await client("plano", {
          from: "Lotes",
          insert: {
            Aspecto: " ",
            CdFilial: 1,
            CdFornecedor: 1,
            CdLote: ctrl,
            CdNRA: " ",
            CdProduto: produto,
            Densidade: 0,
            DtAnalise: fabricacao,
            DtEntrada: hoje,
            DtFabricacao: fabricacao,
            DtLimiteUso: expiracao,
            DtValidade: expiracao,
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

        // registra cada serial na NF de entrada
        await client("plano", {
          from: "LotesNotaEntrada",
          insert: {
            NumNota: kOp,
            Serie: "XX",
            Modelo: "1",
            CdFornecedor: 1,
            NumLote: ctrl,
            CdProduto: produto,
            Quantidade: 1,
            CdFilial: 1,
          },
        });
      }

      // registra log de alterações
      await client("plano", {
        from: "NfLogConferencia",
        insert: {
          CdFilial: 1,
          NumNota: kOp,
          Serie: "XX",
          Modelo: "1",
          CdFornecedor: 1,
          Data: `${hoje} ${agora}`,
          Usuario: "ERIBEIRO",
          Operacao: "INCLUSAO DA CONFERENCIA",
        },
      });
      return true;
    },
  };
  return resp;
}
