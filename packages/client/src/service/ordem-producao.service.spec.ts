import { it, describe, expect } from "vitest";

import ordemProducaoService from "./ordem-producao.service";
import knexRequestMock from "../lib/knex/knex-request.mock";

describe("ordemProducao", () => {
  it("deve baixar schema", async () => {
    const op = ordemProducaoService(knexRequestMock([{}]));
    expect(op.schema).toBeDefined();
    const schema = await op.schema();
    expect(schema.pk).toEqual(["kOp"]);
  });

  it("deve validar num série", () => {
    const op = ordemProducaoService(knexRequestMock([{}]));
    expect(op.isSerieValida("180076000025")).toBe(true);
    expect(op.isSerieValida("180076000026")).toBe(false);
    expect(op.isSerieValida("")).toBe(false);
    expect(op.isSerieValida(undefined)).toBe(false);
    expect(op.isSerieValida(null)).toBe(false);
    expect(op.isSerieValida("abcdefghijkl")).toBe(false);
  });

  it("deve retornar um produto item", async () => {
    const op = ordemProducaoService(knexRequestMock([{ fkProdutoItem: 1 }]));
    const produtoItem = await op.getProdutoItem(1);
    expect(produtoItem).toEqual(1);
  });

  it("deve retornar um produto plano", async () => {
    const op = ordemProducaoService(
      knexRequestMock([{ idVisiontech: "1    " }])
    );
    const produtoItem = await op.getProdutoPlano("1");
    expect(produtoItem).toEqual("1");
  });

  it("deve retornar um produto", async () => {
    const op = ordemProducaoService(knexRequestMock([{ fkProduto: 1 }]));
    const produtoItem = await op.getProduto(1);
    expect(produtoItem).toEqual(1);
  });

  it("deve retornar um numero de controle", async () => {
    const op = ordemProducaoService(knexRequestMock([{ fkProduto: 1 }]));
    const produtoItem = await op.getControle(100, 1);
    expect(produtoItem).toEqual("000001000017");
  });

  it("deve validar numero de controle", async () => {
    const op = ordemProducaoService(knexRequestMock([{ fkProduto: 1 }]));
    const produtoItem = await op.isSerieValida("000001000017");
    expect(produtoItem).toEqual(true);
  });
});
