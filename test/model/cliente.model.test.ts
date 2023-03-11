import { describe, expect, it } from "vitest";
import { container } from "../../model/container";

describe("rpc de cliente", () => {
  const model = container.resolve("clienteModel");

  it("lista sem argumentos", async () => {
    const rsp = await model.query.list({});
    expect(rsp).toEqual([
      {
        cidade: "cid1",
        cliente_id: 1,
        cnpj: null,
        data_cadastro: new Date("1900-01-01"),
        email: "",
        identidade: "",
        is_ativo: null,
        nome: null,
        uf: null,
        vendedor_id: null,
      },
    ]);
  });

  it("lista com argumentos", async () => {
    const rsp = await model.query.list({
      where: [["cliente_id", "=", 1]],
      select: ["cliente_id"],
    });
    expect(rsp).toEqual([
      {
        cliente_id: 1,
      },
    ]);
  });

  it("read", async () => {
    const rsp = await model.query.read({
      id: { cliente_id: 1 },
      select: ["cliente_id"],
    });
    expect(rsp).toEqual({ cliente_id: 1 });
  });

  it("create e del", async () => {
    const crt = await model.mutation.create({
      data: {
        cliente_id: 10,
        data_cadastro: "2020-01-01",
        email: "",
        identidade: "",
      },
      select: ["cliente_id"],
    });
    expect(crt).toEqual({ cliente_id: 10 });

    const dlt = await model.mutation.del({
      id: { cliente_id: "10" },
    });
    expect(dlt).toEqual(1);
  });

  it("clienteUpdate no params", async () => {
    // @ts-expect-error teste para ausencia de parametros
    await expect(model.mutation.update({ table: "cliente" })).rejects.toThrow(
      "Id deve ser informado"
    );
  });

  it("update", async () => {
    const rsp = await model.mutation.update({
      id: { cliente_id: 1 },
      data: { email: "" },
      select: ["cliente_id"],
    });
    expect(rsp).toEqual({ cliente_id: 1 });
  });

  it("vendaMensalQuantidade", async () => {
    const rsp = await model.query.vendaMensalQuantidade({
      inicio: "2020-01-01",
      fim: "2020-01-01",
      cliente: 1,
    });
    expect(rsp).toEqual([{ "2020-01": 10, categoria: "cat1" }]);
  });
});
