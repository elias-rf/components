import Knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { knexMockHistory } from "../../../utils/knex-mock-history";
import { TConnections } from "../../dal/connections";
import { setTracker } from "../../lib/set-tracker";
import { NfEntradaModel } from "./nf-entrada.model";

describe("nfEntradaModel", () => {
  const knexDb = Knex({ client: MockClient });
  const nfEntrada = new NfEntradaModel({
    oftalmo: knexDb,
    plano: knexDb,
    fullvision: knexDb,
  } as TConnections);
  let tracker: Tracker;

  beforeAll(() => {
    tracker = getTracker();
    setTracker(tracker);
  });

  afterEach(() => {
    tracker.resetHistory();
  });

  afterAll(() => {
    tracker.reset();
  });

  it("nfEntradaSchema", async () => {
    const rsp = await nfEntrada.schema();
    expect(rsp).toEqual(expect.anything());
  });

  it("nfEntradaRead", async () => {
    const rsp = await nfEntrada.read({
      id: { filial_id: 1, nota_id: "-100", serie_id: "X", modelo_id: 1 },
      select: ["nota_id"],
    });
    expect(rsp).toEqual({
      filial_id: 1,
      nota_id: "-100",
      serie_id: "X",
      modelo_id: 1,
    });
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [1, "-100", "X", 1],
          sql: `select "NroNf" from "NfMestre" where "CdEmpresa" = ? and "NroNf" = ? and "Serie" = ? and "Modelo" = ?`,
        },
      ],
    });
  });

  it("nfEntradaList", async () => {
    const rsp = await nfEntrada.list({
      where: [["nota_id", "=", "-100"]],
      select: ["nota_id"],
    });
    expect(rsp).toEqual([
      {
        filial_id: 1,
        nota_id: "-100",
        serie_id: "X",
        modelo_id: 1,
      },
    ]);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["-100", 50],
          sql: `select "NroNf" from "NfMestre" where ("NroNf" = ?) limit ?`,
        },
      ],
    });
  });

  it("nfEntradaDel", async () => {
    const rsp = await nfEntrada.del({
      id: { filial_id: 1, nota_id: "-100", serie_id: "X", modelo_id: 1 },
    });
    expect(rsp).toEqual(1);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: [1, "-100", "X", 1],
          sql: `delete from "NfMestre" where "CdEmpresa" = ? and "NroNf" = ? and "Serie" = ? and "Modelo" = ?`,
        },
      ],
    });
  });

  it("nfEntradaCreate", async () => {
    const rsp = await nfEntrada.create({
      data: { nota_id: "-100" },
    });
    expect(rsp).toEqual({
      filial_id: 1,
      nota_id: "-100",
      serie_id: "X",
      modelo_id: 1,
    });
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["-100"],
          sql: `insert into "NfMestre" ("NroNf") values (?)`,
        },
      ],
    });
  });

  it("nfEntradaUpdate", async () => {
    const rsp = await nfEntrada.update({
      id: { filial_id: 1, nota_id: "-100", serie_id: "X", modelo_id: 1 },
      data: { nota_id: "100" },
    });
    expect(rsp).toEqual({
      filial_id: 1,
      nota_id: "-100",
      serie_id: "X",
      modelo_id: 1,
    });
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["100", 1, "-100", "X", 1],
          sql: `update "NfMestre" set "NroNf" = ? where "CdEmpresa" = ? and "NroNf" = ? and "Serie" = ? and "Modelo" = ?`,
        },
      ],
    });
  });

  it("nfEntradaTransferenciaCreate", async () => {
    const rsp = await nfEntrada.nfEntradaTransferenciaCreate({
      controle: ["180076000124", "180076000033"],
    });
    expect(rsp).toEqual(true);
    expect(knexMockHistory(tracker)).toEqual({
      any: [
        {
          bindings: ["18007600"],
          sql: `select "fkProdutoItem" from "tOrdemProducao" where "kOp" = ?`,
        },
        {
          bindings: [1],
          sql: `select "IdVisiontech" from "tbl_Produto_Item" where "kProdutoItem" = ?`,
        },
        {
          bindings: ["1"],
          sql: `select "CdProduto" from "CadPro" where "CdProduto" = ?`,
        },
        {
          bindings: ["3059", "18007600", 50],
          sql: `select "DataHoraInicio" from "tOperacaoOrdemProducao" where ("fkOperacao" = ? and "fkOp" = ?) order by "DataHoraInicio" desc limit ?`,
        },
        {
          bindings: ["3059", "18007600", 50],
          sql: `select "DataHoraInicio" from "tOperacaoOrdemProducao" where ("fkOperacao" = ? and "fkOp" = ?) order by "DataHoraInicio" desc limit ?`,
        },
        {
          bindings: ["0", "18007600", "XX", "1"],
          sql: `select "NroNf" from "NfMestre" where "CdEmpresa" = ? and "NroNf" = ? and "Serie" = ? and "Modelo" = ?`,
        },
        {
          bindings: [
            0,
            -1,
            1,
            "P",
            "1900-01-01 00:00:00",
            expect.anything(),
            expect.anything(),
            expect.anything(),
            "P",
            "N",
            "N",
            "N",
            "N",
            "S",
            "N",
            "N",
            "N",
            "N",
            "A",
            "N",
            "N",
            "N",
            "N",
            "N",
            "N",
            "S",
            "N",
            "N",
            0,
            0,
            expect.anything(),
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "1",
            1102,
            1102,
            "18007600",
            " ",
            0,
            0,
            "XX",
            "ERIBEIRO",
            "N",
            4,
            0,
            4,
            0,
            0,
            0,
            " ",
          ],
          sql: `insert into "NfMestre" ("BaseSubstituicao", "CdEmpresa", "CdFornecedor", "ConPag", "DtConferencia", "DtEmi", "DtEntr", "DtValidacao", "FgConferencia", "FgDespesasCompoeBaseICMS", "FgDespesasCompoeBaseIPI", "FgDespesasCompoeTotal", "FgDespesasCompoeVlProdutos", "FgEstoque", "FgFreteCompoeBaseICMS", "FgFreteCompoeBaseIPI", "FgFreteCompoeTotal", "FgFreteCompoeVlProdutos", "FgGNRE", "FgIPICompoeBase", "FgIPICompoeBaseSub", "FgSeguroCompoeBaseICMS", "FgSeguroCompoeBaseIPI", "FgSeguroCompoeTotal", "FgSeguroCompoeVlProdutos", "FgSomaICMSSub", "FgUtilizaPercRedBCIcms", "FgXML", "Frete", "GrupoFiscal", "Horario", "ICMSBasCalc", "ICMSFrete", "ICMSOperPropria", "ICMSRetido", "ICMSVlr", "IPIBasCalc", "IPIFrete", "IPIVlr", "IdParametro", "Modelo", "Nop", "NopFiscal", "NroNf", "NumChaveNfe", "NumNotaRelacionada", "Seguro", "Serie", "SgUsuario", "Tipo", "TotNF", "VlDespAcessorias", "VlMercadorias", "VlNfComplementar", "VlNotaRelacionada", "VlRepasseICMS", "dsObservacao") values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        },
        {
          bindings: [
            0,
            0,
            1,
            1,
            1,
            0,
            expect.anything(),
            "S",
            " ",
            "S",
            "S",
            "N",
            0,
            "1",
            0,
            0,
            "18007600",
            0,
            0,
            0,
            2,
            1,
            "XX",
            "N",
            "T",
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            2,
            0,
            0,
            4,
            0,
            0,
          ],
          sql: `insert into "NFItem" ("CdBaseCalculoCreditoPISCOFINS", "CdContribuicaoApuradaPISCOFINS", "CdEmpresa", "CdFornecedor", "CdProduto", "CdTipoCreditoPISCOFINS", "DtEntr", "FgCompoeBaseSub", "FgConferido", "FgCusto", "FgEstoque", "FgEtiqueta", "FgICMSJaRecolhido", "Modelo", "Nop", "NopFiscalItem", "NroNF", "PercIcms", "PercIpi", "PrecPMC", "Quantidade", "Sequencia", "Serie", "TipoMovimentacao", "TipoTributacao", "VlAcrescItem", "VlBaseCalculoICMS", "VlBaseCalculoIPI", "VlBaseSub", "VlBrutoUnitario", "VlDescItem", "VlIcmsSub", "VlLiquidoUnitario", "VlRelacionado", "VlRepasseICMSItem", "VlTotItem", "VlrIcms", "VlrIpi") values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        },
        {
          bindings: [2, "1", 1],
          sql: `update "Estoque" set "EstAtual" = "EstAtual" + ? where "CdEmpresa" = ? and "CdProduto" = ?`,
        },
        {
          bindings: [2, "1", expect.anything(), expect.anything(), 1],
          sql: `update "EstatPro" set "Entradas" = "Entradas" + ? where "CdEmpresa" = ? and "MesRef" = ? and "AnoRef" = ? and "CdProduto" = ?`,
        },
        {
          bindings: [
            " ",
            1,
            1,
            "180076000124",
            " ",
            1,
            0,
            "2020-02-01",
            expect.anything(),
            "2020-02-01",
            "2025-02-01",
            "2025-02-01",
            0,
            "1",
            1,
            0,
            1,
            1,
            "XX",
            "A",
            "C",
          ],
          sql: `insert into "Lotes" ("Aspecto", "CdFilial", "CdFornecedor", "CdLote", "CdNRA", "CdProduto", "Densidade", "DtAnalise", "DtEntrada", "DtFabricacao", "DtLimiteUso", "DtValidade", "FatorCorrecao", "Modelo", "NumNfEntrada", "PercentualDiluicao", "QtdeAdquirida", "SaldoPeso", "SerieNfEntrada", "SituacaoLote", "TipoLote") values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        },
        {
          bindings: ["1", "1", 1, "1", "180076000124", "18007600", "1", "XX"],
          sql: `insert into "LotesNotaEntrada" ("CdFilial", "CdFornecedor", "CdProduto", "Modelo", "NumLote", "NumNota", "Quantidade", "Serie") values (?, ?, ?, ?, ?, ?, ?, ?)`,
        },
        {
          bindings: [
            " ",
            1,
            1,
            "180076000033",
            " ",
            1,
            0,
            "2020-02-01",
            expect.anything(),
            "2020-02-01",
            "2025-02-01",
            "2025-02-01",
            0,
            "1",
            1,
            0,
            1,
            1,
            "XX",
            "A",
            "C",
          ],
          sql: `insert into "Lotes" ("Aspecto", "CdFilial", "CdFornecedor", "CdLote", "CdNRA", "CdProduto", "Densidade", "DtAnalise", "DtEntrada", "DtFabricacao", "DtLimiteUso", "DtValidade", "FatorCorrecao", "Modelo", "NumNfEntrada", "PercentualDiluicao", "QtdeAdquirida", "SaldoPeso", "SerieNfEntrada", "SituacaoLote", "TipoLote") values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        },
        {
          bindings: ["1", "1", 1, "1", "180076000033", "18007600", "1", "XX"],
          sql: `insert into "LotesNotaEntrada" ("CdFilial", "CdFornecedor", "CdProduto", "Modelo", "NumLote", "NumNota", "Quantidade", "Serie") values (?, ?, ?, ?, ?, ?, ?, ?)`,
        },
        {
          bindings: [
            "1",
            "1",
            expect.anything(),
            "1",
            "18007600",
            "INCLUSAO DA CONFERENCIA",
            "XX",
            "ERIBEIRO",
          ],
          sql: `insert into "NfLogConferencia" ("CdFilial", "CdFornecedor", "Data", "Modelo", "NumNota", "Operacao", "Serie", "Usuario") values (?, ?, ?, ?, ?, ?, ?, ?)`,
        },
      ],
    });
  });
});
