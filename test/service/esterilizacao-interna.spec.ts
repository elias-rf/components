import { describe, expect, it } from "vitest";
import { esterilizacaoInternaService } from "../../model/esterilizacao-interna/esterilizacao-interna.service";

describe("esterilizacaoInternaService", () => {
  it("esterilizacaoInternaSchema", async () => {
    const rsp = await esterilizacaoInternaService.query.schema();
    expect(rsp.length).toEqual(9);
  });

  it("esterilizacaoInternaClear", async () => {
    const rsp = await esterilizacaoInternaService.query.clear();
    expect(rsp).toEqual({
      esterilizacao_interna_id: null,
      resultado: null,
      observacao: null,
      data_autoclave: null,
      data_envio: null,
      data_fechamento: null,
      eh_fechado: null,
      usuario_id_fechamento: null,
      usuario_id_resultado: null,
    });
  });

  it("esterilizacaoInternaList", async () => {
    const rsp = await esterilizacaoInternaService.query.list({
      where: [["esterilizacao_interna_id", "=", 1]],
      select: ["esterilizacao_interna_id"],
    });
    expect(rsp).toEqual([{ esterilizacao_interna_id: 1 }]);
  });

  it("esterilizacaoInternaRead", async () => {
    const rsp = await esterilizacaoInternaService.query.read({
      id: { esterilizacao_interna_id: 1 },
      select: ["esterilizacao_interna_id"],
    });
    expect(rsp).toEqual({ esterilizacao_interna_id: 1 });
  });

  it("esterilizacaoInternaSchemaDiario", async () => {
    const rsp = await esterilizacaoInternaService.query.schemaDiario();
    expect(rsp).toEqual([
      { label: "Dia", name: "dia", primaryKey: true, typeField: "string" },
      {
        label: "Dia Semana",
        name: "dia_semana",
        typeField: "string",
      },
      {
        label: "Quantidade",
        name: "quantidade",
        typeField: "int",
      },
    ]);
  });

  it("esterilizacaoInternaDiario", async () => {
    const rsp = await esterilizacaoInternaService.query.diario({
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

  it("esterilizacaoInternaSchemaMensal", async () => {
    const rsp = await esterilizacaoInternaService.query.schemaMensal();
    expect(rsp).toEqual([
      { label: "Mês", name: "mes", primaryKey: true, typeField: "string" },
      {
        label: "Quantidade",
        name: "quantidade",
        typeField: "int",
      },
    ]);
  });

  it("esterilizacaoInternaMensal", async () => {
    const rsp = await esterilizacaoInternaService.query.mensal({
      mes: "2020-01",
    });
    expect(rsp).toEqual([
      {
        mes: "2020-01",
        quantidade: 10,
      },
    ]);
  });

  it("esterilizacaoInternaSchemaProduto", async () => {
    const rsp = await esterilizacaoInternaService.query.schemaProduto();
    expect(rsp).toEqual([
      {
        label: "Produto",
        name: "produto",
        primaryKey: true,
        typeField: "string",
      },
      {
        label: "Quantidade",
        name: "quantidade",
        typeField: "int",
      },
    ]);
  });

  it("esterilizacaoInternaProduto", async () => {
    const rsp = await esterilizacaoInternaService.query.produto({
      data: "2020-01-01",
    });
    expect(rsp).toEqual([
      {
        produto: "cat1",
        quantidade: 10,
      },
    ]);
  });

  it("esterilizacaoInternaSchemaModelo", async () => {
    const rsp = await esterilizacaoInternaService.query.schemaModelo();
    expect(rsp).toEqual([
      {
        label: "Modelo",
        name: "modelo",
        primaryKey: true,
        typeField: "string",
      },
      {
        label: "Quantidade",
        name: "quantidade",
        typeField: "int",
      },
    ]);
  });

  it("esterilizacaoInternaModelo", async () => {
    const rsp = await esterilizacaoInternaService.query.modelo({
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
