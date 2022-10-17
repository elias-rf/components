import { beforeEach, describe, expect, it } from "vitest";
import { fetchMockRpc } from "../../utils/api/fetch-mock-rpc";
import { ordemProducaoService } from "./ordem-producao.service";

globalThis.fetch = fetchMockRpc.fetch;

const RECORD_OP = {
  kOp: 1,
  fkProdutoItem: 12,
};

const RECORD_PI = { idVisiontech: "22 ", fkProduto: 25 };

describe("ordemProducaoService", () => {
  beforeEach(() => {
    fetchMockRpc.reset();
  });

  it("deve ler registro", async () => {
    fetchMockRpc.mock("ordemProducaoRead", {
      body: {
        result: RECORD_OP,
      },
    });
    const rsp = await ordemProducaoService.read(["1"]);
    expect(rsp).toEqual(RECORD_OP);
  });

  it("deve baixar schema", async () => {
    fetchMockRpc.mock("ordemProducaoSchema", {
      body: {
        result: ["kOp"],
      },
    });
    const schema = await ordemProducaoService.schema();
    expect(schema).toEqual(["kOp"]);
  });

  it("deve retornar um produto item", async () => {
    fetchMockRpc.mock("ordemProducaoProdutoItem", {
      body: { result: RECORD_PI },
    });
    const produtoItem = await ordemProducaoService.getProdutoItem(["1"]);
    expect(produtoItem).toEqual(RECORD_PI);
  });

  it("deve retornar um produto plano", async () => {
    fetchMockRpc.mock("ordemProducaoProdutoPlano", {
      body: { result: RECORD_PI },
    });

    const produtoItem = await ordemProducaoService.getProdutoPlano(["1"]);

    expect(produtoItem).toEqual(RECORD_PI);
  });

  it("deve retornar um produto", async () => {
    fetchMockRpc.mock("ordemProducaoProduto", {
      body: { result: RECORD_PI },
    });
    const produtoItem = await ordemProducaoService.getProduto(["1"]);
    expect(produtoItem).toEqual(RECORD_PI);
  });

  it("deve retornar um numero de controle", async () => {
    fetchMockRpc.mock("ordemProducaoControle", {
      body: { result: "000001000017" },
    });
    const produtoItem = await ordemProducaoService.getControle(["100"], "1");
    expect(produtoItem).toEqual("000001000017");
  });

  it("deve validar numero de controle", async () => {
    fetchMockRpc.mock("ordemProducaoControleValido", {
      body: { result: true },
    });
    const produtoItem = await ordemProducaoService.isControleValid(
      "000001000017"
    );
    expect(produtoItem).toEqual(true);
  });
});
