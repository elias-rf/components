import { describe, expect, it } from "vitest";
import { esterilizacaoExternaService } from "../../client/service/esterilizacao-externa.service";

describe("esterilizacaoExternaService", () => {
  it("esterilizacaoExternaSchema", async () => {
    const rsp = await esterilizacaoExternaService.query.schema();
    expect(rsp.length).toEqual(10);
  });

  it("esterilizacaoExternaClear", async () => {
    const rsp = await esterilizacaoExternaService.query.clear();
    expect(rsp).toEqual({
      esterilizacao_externa_id: null,
      data_envio: "",
      data_retorno: "",
      quantidade: null,
      quantidade_caixa: null,
      eh_fechado: 0,
      resultado: null,
      usuario_id: null,
      observacao: null,
      lote: null,
    });
  });

  it("esterilizacaoExternaList", async () => {
    const rsp = await esterilizacaoExternaService.query.list({
      where: [["esterilizacao_externa_id", "=", 1]],
      select: ["esterilizacao_externa_id"],
    });
    expect(rsp).toEqual([{ esterilizacao_externa_id: 1 }]);
  });

  it("esterilizacaoExternaRead", async () => {
    const rsp = await esterilizacaoExternaService.query.read({
      id: { esterilizacao_externa_id: 1 },
      select: ["esterilizacao_externa_id"],
    });
    expect(rsp).toEqual({ esterilizacao_externa_id: 1 });
  });

  it("esterilizacaoExternaSchemaDiario", async () => {
    const rsp = await esterilizacaoExternaService.query.schemaDiario();
    expect(rsp).toEqual([
      { label: "Dia", name: "dia", primaryKey: true, type: "string" },
      {
        label: "Dia Semana",
        name: "dia_semana",
        type: "string",
      },
      {
        label: "Quantidade",
        name: "quantidade",
        type: "int",
      },
    ]);
  });

  it("esterilizacaoExternaDiario", async () => {
    const rsp = await esterilizacaoExternaService.query.diario({
      inicio: "2020-01-01",
      fim: "2020-01-31",
    });
    expect(rsp).toEqual([
      {
        dia: "2020-01-01",
        diaSemana: "qua",
        quantidade: 10,
      },
    ]);
  });

  it("esterilizacaoExternaSchemaMensal", async () => {
    const rsp = await esterilizacaoExternaService.query.schemaMensal();
    expect(rsp).toEqual([
      { label: "Mês", name: "mes", primaryKey: true, type: "string" },
      {
        label: "Quantidade",
        name: "quantidade",
        type: "int",
      },
    ]);
  });

  it("esterilizacaoExternaMensal", async () => {
    const rsp = await esterilizacaoExternaService.query.mensal({
      mes: "2020-01",
    });
    expect(rsp).toEqual([
      {
        mes: "2020-01",
        quantidade: 10,
      },
    ]);
  });

  it("esterilizacaoExternaSchemaProduto", async () => {
    const rsp = await esterilizacaoExternaService.query.schemaProduto();
    expect(rsp).toEqual([
      { label: "Produto", name: "produto", primaryKey: true, type: "string" },
      {
        label: "Quantidade",
        name: "quantidade",
        type: "int",
      },
    ]);
  });

  it("esterilizacaoExternaProduto", async () => {
    const rsp = await esterilizacaoExternaService.query.produto({
      data: "2020-01-01",
    });
    expect(rsp).toEqual([
      {
        produto: "cat1",
        quantidade: 10,
      },
    ]);
  });

  it("esterilizacaoExternaSchemaModelo", async () => {
    const rsp = await esterilizacaoExternaService.query.schemaModelo();
    expect(rsp).toEqual([
      { label: "Modelo", name: "modelo", primaryKey: true, type: "string" },
      {
        label: "Quantidade",
        name: "quantidade",
        type: "int",
      },
    ]);
  });

  it("esterilizacaoExternaModelo", async () => {
    const rsp = await esterilizacaoExternaService.query.modelo({
      data: "2020-01-01",
      produto: "cat1",
    });
    expect(rsp).toEqual([
      {
        modelo: "proditem1",
        quantidade: 10,
      },
    ]);
  });
});
