import { CurrentUser } from "@vt/types";
import { day, isEmpty, validator, z } from "@vt/utils";
import { Connections } from "dal/connections";
import { Estoque } from "./estoque";
import { NfEntrada } from "./nf-entrada";
import { NfEntradaControle } from "./nf-entrada-controle";
import { NfEntradaItem } from "./nf-entrada-item";
import { NfEntradaLog } from "./nf-entrada-log";
import { OrdemProducao } from "./ordem-producao";
import { ProdutoControle } from "./produto-controle";
import { ProdutoEstatistica } from "./produto-estatistica";

export function Transferencia(connections: Connections) {
  const knexPlano = connections.plano;

  return {
    // SCHEMA DIARIO
    async transferenciaSchemaDiario(): Promise<any> {
      return {
        pk: ["dia"],
        fields: [
          {
            field: "dia",
            label: "Dia",
            labelClass: "text-center",
            fieldClass: "text-left",
            type: "string",
          },
          {
            field: "LITEFLEX",
            label: "LiteFlex",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            field: "HILITE",
            label: "HiLite",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            field: "ENLITE",
            label: "EnLite",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            field: "METILCELULOSE",
            label: "Metil",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            field: "CORNEAL RING",
            label: "Corneal Ring",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            field: "ANEL CAPSULAR",
            label: "Anel Capsular",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
        ],
      };
    },

    // SCHEMA MENSAL
    async transferenciaSchemaMensal(): Promise<any> {
      return {
        pk: ["mes"],
        fields: [
          {
            field: "mes",
            label: "Mês",
            labelClass: "text-center",
            fieldClass: "text-left",
            type: "string",
          },
          {
            field: "LITEFLEX",
            label: "LiteFlex",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            field: "HILITE",
            label: "HiLite",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            field: "ENLITE",
            label: "EnLite",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            field: "METILCELULOSE",
            label: "Metil",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            field: "CORNEAL RING",
            label: "Corneal Ring",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
          {
            field: "ANEL CAPSULAR",
            label: "Anel Capsular",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
        ],
      };
    },

    // SCHEMA MODELO
    async transferenciaSchemaModelo(): Promise<any> {
      return {
        pk: ["modelo"],
        fields: [
          {
            field: "modelo",
            label: "Modelo",
            labelClass: "text-center",
            fieldClass: "text-left",
            type: "string",
          },
          {
            field: "quantidade",
            label: "Quantidade",
            labelClass: "text-right",
            fieldClass: "text-right",
          },
        ],
      };
    },

    // DIARIO
    async transferenciaDiario(
      { inicio, fim }: { inicio: string; fim: string },
      ctx?: { currentUser: CurrentUser }
    ) {
      // if (!inicio) throw new createError.BadRequest("Início não informado");
      // if (!fim) throw new createError.BadRequest("Fim não informado");
      validator(inicio, "inicio", z.string());
      validator(fim, "fim", z.string());
      const aux: any = {};
      const rsp = [];
      const qry = await knexPlano(
        knexPlano.raw(
          "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)"
        )
      )
        .select(
          knexPlano.raw(
            "CONVERT(CHAR(10),[mestrenota].[DtEmissao],120) AS dia, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade"
          )
        )
        .orderByRaw("[mestrenota].[DtEmissao] desc")
        .groupByRaw("[mestrenota].[DtEmissao], CategPro.NmCategoria")
        .where(
          knexPlano.raw("[mestrenota].[DtEmissao] between ? and ?", [
            inicio,
            fim,
          ])
        )
        .andWhere(
          knexPlano.raw(
            "MestreNota.CdFilial= 1 AND NatOpe.Nop= 5151 AND MestreNota.Tipo<> 'C' AND MestreNota.NotadeComplemento= 'N'"
          )
        );

      for (const item of qry) {
        aux[item.dia] = {
          ...aux[item.dia],
          ...{ [item.NmCategoria]: item.quantidade },
        };
      }

      for (const [key, value] of Object.entries(aux)) {
        const item = { dia: key, ...(<any>value) };
        rsp.push(item);
      }

      return rsp;
    },

    // MENSAL
    async transferenciaMensal(
      { mes }: { mes: string },
      ctx?: { currentUser: CurrentUser }
    ) {
      // if (!mes) throw new createError.BadRequest("Mês não informado");
      validator(mes, "mes", z.string());

      const aux: any = {};
      const rsp = [];
      const qry = await knexPlano(
        knexPlano.raw(
          "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)"
        )
      )
        .select(
          knexPlano.raw(
            "CONVERT(CHAR(7),[mestrenota].[DtEmissao],120) AS mes, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade"
          )
        )
        .orderByRaw("CONVERT(CHAR(7),[mestrenota].[DtEmissao],120) desc")
        .groupBy(
          knexPlano.raw(
            "CONVERT(CHAR(7),[mestrenota].[DtEmissao],120), CategPro.NmCategoria"
          )
        )
        .where(
          knexPlano.raw("CONVERT(CHAR(7),[mestrenota].[DtEmissao],120)>=?", [
            mes,
          ])
        )
        .andWhere(
          knexPlano.raw(
            "MestreNota.CdFilial= 1 AND NatOpe.Nop= 5151 AND MestreNota.Tipo<> 'C' AND MestreNota.NotadeComplemento= 'N'"
          )
        );

      for (const item of qry) {
        aux[item.mes] = {
          ...aux[item.mes],
          ...{ [item.NmCategoria]: item.quantidade },
        };
      }

      for (const [key, value] of Object.entries(aux)) {
        const item = { mes: key, ...(<any>value) };
        rsp.push(item);
      }

      return rsp;
    },

    // MODELO
    async transferenciaModelo(
      { data }: { data: string },
      ctx?: { currentUser: CurrentUser }
    ) {
      // if (!data) throw new createError.BadRequest("Data não informada");

      validator(data, "data", z.string());

      const qry = await knexPlano(
        knexPlano.raw(
          "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)"
        )
      )
        .select(
          knexPlano.raw(
            "CadPro.Descricao as modelo, Sum(ItemNota.Quantidade) AS quantidade"
          )
        )
        .orderByRaw("CadPro.Descricao asc")
        .groupBy(knexPlano.raw("CadPro.Descricao"))
        .where(knexPlano.raw("MestreNota.DtEmissao = ?", [data]))
        .andWhere(
          knexPlano.raw(
            "MestreNota.CdFilial=1 AND NatOpe.Nop=5151 AND MestreNota.Tipo<>'C' AND MestreNota.NotadeComplemento='N'"
          )
        );

      return qry;
    },

    async transferenciaDel(
      { controles }: { controles: string[] },
      ctx?: { currentUser: CurrentUser }
    ) {
      const ordemProducao = OrdemProducao(connections);
      const nfEntrada = NfEntrada(connections);
      const nfEntradaControle = NfEntradaControle(connections);
      const nfEntradaItem = NfEntradaItem(connections);
      const nfEntradaLog = NfEntradaLog(connections);
      const produtoControle = ProdutoControle(connections);

      validator(controles, "controles", z.string().array());

      const kOp = await ordemProducao.ordemProducaoFromControle({
        controle: controles[0],
      });
      const produto = await ordemProducao.ordemProducaoProdutoPlano({
        id: [kOp],
      });

      await nfEntrada.nfEntradaDel({ id: ["1", kOp, "XX", "1"] });
      await nfEntradaItem.nfEntradaItemDel({ id: ["1", kOp, "XX", "1", "1"] });
      for (let ctrl of controles) {
        await produtoControle.produtoControleDel({
          id: ["1", produto, ctrl],
        });
        await nfEntradaControle.nfEntradaControleDel({
          id: ["1", kOp, "XX", "1"],
        });
      }
      await nfEntradaLog.nfEntradaLogDel({
        id: ["1", kOp, "XX", "1"],
      });
      return true;
    },

    // Transfere produtos acabados da matriz para filial
    async transferenciaCreate(
      { controles }: { controles: string[] },
      ctx?: { currentUser: CurrentUser }
    ): Promise<boolean> {
      validator(controles, "controles", z.string().array());

      const ordemProducao = OrdemProducao(connections);
      const nfEntrada = NfEntrada(connections);
      const nfEntradaControle = NfEntradaControle(connections);
      const nfEntradaItem = NfEntradaItem(connections);
      const nfEntradaLog = NfEntradaLog(connections);
      const estoque = Estoque(connections);
      const produtoEstatistica = ProdutoEstatistica(connections);
      const produtoControle = ProdutoControle(connections);

      const kOp = await ordemProducao.ordemProducaoFromControle({
        controle: controles[0],
      });

      for (let controle of controles) {
        const valid = await ordemProducao.ordemProducaoControleValido({
          controle,
        });
        if (!valid) throw new Error(`Controle ${controle} inválido`);
        const op = await ordemProducao.ordemProducaoFromControle({ controle });
        if (kOp !== op)
          throw new Error(
            `Controle ${controle} pertence a outra ordem de produção`
          );
      }

      const produto = await ordemProducao.ordemProducaoProdutoPlano({
        id: [kOp],
      });
      if (isEmpty(produto)) {
        throw new Error(
          `Ordem de produção ${kOp} não possui vinculo com Plano`
        );
      }

      const fabricacao = await ordemProducao
        .ordemProducaoDataFabricacao({
          id: [kOp],
        })
        .then((dt) => {
          if (isEmpty(dt)) {
            throw new Error(
              `Ordem de produção ${kOp} não possui data de fabricação`
            );
          }
          return dt?.format("YYYY-MM-DD");
        });

      const expiracao = await ordemProducao
        .ordemProducaoDataValidade({
          id: [kOp],
        })
        .then((dt) => dt.format("YYYY-MM-DD"));

      const quantidade = controles.length;

      const hoje = day().format("YYYY-MM-DD");
      const agora = day().format("HH:mm:ss");

      const nf = await nfEntrada.nfEntradaRead({ id: ["1", kOp, "XX", "1"] });

      if (!isEmpty(nf)) {
        throw new Error(`Ordem de produção ${kOp} já está cadastrada`);
      }

      nfEntrada.nfEntradaCreate({
        rec: {
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

      await nfEntradaItem.nfEntradaItemCreate({
        rec: {
          CdEmpresa: 1,
          NroNF: kOp,
          Serie: "XX",
          Modelo: "1",
          CdFornecedor: 1,
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

      await estoque.estoqueIncrement({
        id: ["1", produto],
        quantidade: quantidade,
      });

      await produtoEstatistica.produtoEstatisticaIncrement({
        id: ["1", day().format("MM"), day().format("YY"), produto],
        quantidade: quantidade,
      });

      for (let ctrl of controles) {
        await produtoControle.produtoControleCreate({
          rec: {
            Aspecto: " ",
            CdFilial: 1,
            CdFornecedor: 1,
            CdLote: ctrl,
            CdNRA: " ",
            CdProduto: produto,
            Densidade: 0,
            DtAnalise: fabricacao || "",
            DtEntrada: hoje,
            DtFabricacao: fabricacao || "",
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
        await nfEntradaControle.nfEntradaControleCreate({
          rec: {
            NumNota: kOp,
            Serie: "XX",
            Modelo: "1",
            CdFornecedor: "1",
            NumLote: ctrl,
            CdProduto: produto,
            Quantidade: "1",
            CdFilial: "1",
          },
        });
      }
      await nfEntradaLog.nfEntradaLogCreate({
        rec: {
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
}
