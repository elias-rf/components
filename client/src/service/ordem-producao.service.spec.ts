import { beforeEach, describe, expect, it } from "vitest";
import { fetchMock } from "../../../utils";
import { ordemProducaoService } from "./ordem-producao.service";

global.fetch = fetchMock.fetch;

describe("ordemProducao", () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  it("deve baixar schema", async () => {
    fetchMock.reset();
    fetchMock.mock("/api/rpc", {
      status: 200,
      body: {
        jsonrpc: "2.0",
        id: 1,
        result: {
          pk: ["kOp"],
          fields: [],
        },
      },
    });
    const schema = await ordemProducaoService.schema();
    expect(schema.pk).toEqual(["kOp"]);
  });

  it("deve retornar um produto item", async () => {
    fetchMock.mock("/api/rpc", {
      status: 200,
      body: {
        jsonrpc: "2.0",
        id: 2,
        result: 123,
      },
    });
    const produtoItem = await ordemProducaoService.getProdutoItem(["1"]);
    expect(produtoItem).toEqual(123);
  });

  it("deve retornar um produto plano", async () => {
    fetchMock.mock("/api/rpc", {
      status: 200,
      body: {
        jsonrpc: "2.0",
        id: 1,
        result: "123",
      },
    });

    const produtoItem = await ordemProducaoService.getProdutoPlano(["1"]);
    expect(produtoItem).toEqual("123");
  });

  it("deve retornar um produto", async () => {
    fetchMock.mock("/api/rpc", {
      status: 200,
      body: {
        jsonrpc: "2.0",
        id: 1,
        result: 123,
      },
    });
    const produtoItem = await ordemProducaoService.getProduto(["1"]);
    expect(produtoItem).toEqual(123);
  });

  it("deve retornar um numero de controle", async () => {
    fetchMock.mock("/api/rpc", {
      status: 200,
      body: {
        jsonrpc: "2.0",
        id: 1,
        result: "000001000017",
      },
    });
    const produtoItem = await ordemProducaoService.getControle(["100"], 1);
    expect(produtoItem).toEqual("000001000017");
  });

  it("deve validar numero de controle", async () => {
    fetchMock.mock("/api/rpc", {
      status: 200,
      body: {
        jsonrpc: "2.0",
        id: 1,
        result: true,
      },
    });
    const produtoItem = await ordemProducaoService.isControleValid(
      "000001000017"
    );
    expect(produtoItem).toEqual(true);
  });
});
