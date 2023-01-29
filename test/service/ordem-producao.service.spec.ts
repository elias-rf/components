import { describe, expect, it } from "vitest";
import { ordemProducaoService } from "../../client/service/ordem-producao.service";

describe("ordemProducaoService", () => {
  it("ordemProducaoRead", async () => {
    const rsp = await ordemProducaoService.query.read({
      id: { ordem_producao_id: 1 },
      select: ["ordem_producao_id"],
    });
    expect(rsp).toEqual({ ordem_producao_id: 1 });
  });

  it("ordemProducaoList", async () => {
    const rsp = await ordemProducaoService.query.list({
      where: [["ordem_producao_id", "=", 1]],
      select: ["ordem_producao_id"],
    });
    expect(rsp).toEqual([{ ordem_producao_id: 1 }]);
  });

  it("ordemProducaoSchema", async () => {
    const schema = await ordemProducaoService.query.schema();
    expect(schema.length).toEqual(48);
  });

  it("ordemProducaoProdutoItem", async () => {
    const produtoItem = await ordemProducaoService.query.produtoItem({
      id: { ordem_producao_id: 1 },
      select: ["produto_item_id"],
    });
    expect(produtoItem).toEqual({ produto_item_id: 1 });
  });

  it("ordemProducaoProdutoPlano", async () => {
    const produtoItem = await ordemProducaoService.query.produtoPlano({
      id: { ordem_producao_id: 1 },
      select: ["produto_plano_id"],
    });
    expect(produtoItem).toEqual({ produto_plano_id: "1" });
  });

  it("ordemProducaoControle", async () => {
    const produtoItem = await ordemProducaoService.query.controle({
      id: { ordem_producao_id: "100" },
      serie: "1",
    });
    expect(produtoItem).toEqual("000001000017");
  });

  it("ehControleValido", async () => {
    const produtoItem = await ordemProducaoService.query.ehControleValido({
      controle: "000001000017",
    });
    expect(produtoItem).toEqual(true);
  });
});
