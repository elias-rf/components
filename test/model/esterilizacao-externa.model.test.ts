import { describe, expect, it } from "vitest";
import { container } from "../../model/container";

describe("esterilizacaoExterna model", () => {
  const model = container.resolve("esterilizacaoExternaModel");

  it("schemaDiario", async () => {
    const rsp = await model.query.schemaDiario();
    expect(rsp).toEqual([
      {
        name: "dia",
        label: "Dia",
        type: "string",
        primaryKey: true,
      },
      {
        name: "dia_semana",
        label: "Dia Semana",
        type: "string",
      },
      {
        name: "quantidade",
        label: "Quantidade",
        type: "int",
      },
    ]);
  });

  it("schemaMensal", async () => {
    const rsp = await model.query.schemaMensal();
    expect(rsp).toEqual([
      {
        name: "mes",
        label: "Mês",
        type: "string",
        primaryKey: true,
      },
      {
        name: "quantidade",
        label: "Quantidade",
        type: "int",
      },
    ]);
  });

  it("schemaProduto", async () => {
    const rsp = await model.query.schemaProduto();
    expect(rsp).toEqual([
      {
        name: "produto",
        label: "Produto",
        type: "string",
        primaryKey: true,
      },
      {
        name: "quantidade",
        label: "Quantidade",
        type: "int",
      },
    ]);
  });

  it("schemaModelo", async () => {
    const rsp = await model.query.schemaModelo();
    expect(rsp).toEqual([
      {
        name: "modelo",
        label: "Modelo",
        type: "string",
        primaryKey: true,
      },
      {
        name: "quantidade",
        label: "Quantidade",
        type: "int",
      },
    ]);
  });

  it("produto", async () => {
    const rsp = await model.query.produto({ data: "2020-01-01" });
    expect(rsp).toEqual([
      {
        produto: "cat1",
        quantidade: 10,
      },
    ]);
  });

  it("modelo", async () => {
    const rsp = await model.query.modelo({
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
