import { Cliente, NfSaida } from "@/database";
import { connectionsMock } from "@/mocks/connections.mock";
import { knexMockHistory } from "@/mocks/knex-mock-history";
import { createTracker } from "knex-mock-client";
import { describe, expect, it, beforeEach } from "vitest";
import { clienteModel } from "./cliente-model";

describe("rpc de cliente", () => {
  const tracker = createTracker(connectionsMock.plano);
  Cliente.knex(connectionsMock.plano);
  NfSaida.knex(connectionsMock.plano);

  beforeEach(() => {
    tracker.reset();
  });

  it("lista sem argumentos", async () => {
    tracker.on.select("CadCli").response([{ CdCliente: 1 }]);
    const rsp = await clienteModel.list({});
    expect(rsp).toEqual([
      {
        CdCliente: 1,
      },
    ]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50],
        sql: "select top (@p0) * from [CadCli]",
      },
    ]);
  });

  it("lista com argumentos", async () => {
    tracker.on.select("CadCli").response([{ CdCliente: 1 }]);
    const rsp = await clienteModel.list({
      filter: { CdCliente: "=1" },
      select: ["CdCliente"],
    });
    expect(rsp).toEqual([
      {
        CdCliente: 1,
      },
    ]);

    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [50, "1"],
        sql: "select top (@p0) [CdCliente] from [CadCli] where ([CdCliente] = @p1)",
      },
    ]);
  });

  it("read", async () => {
    tracker.on.select("CadCli").response([{ CdCliente: 1 }]);
    const rsp = await clienteModel.read({
      id: { CdCliente: 1 },
      select: ["CdCliente"],
    });
    expect(rsp).toEqual({ CdCliente: 1 });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1],
        sql: "select [CdCliente] from [CadCli] where [CadCli].[CdCliente] = @p0",
      },
    ]);
  });

  it("create e del", async () => {
    tracker.on.insert("CadCli").response([{ CdCliente: 1 }]);
    tracker.on.delete("CadCli").response([1]);
    tracker.on.select("CadCli").response([{ CdCliente: 1 }]);
    const crt = await clienteModel.create({
      data: {
        CdCliente: 1,
        DtCadastro: "2020-01-01",
        EMail: "",
        NumIdentidade: "",
      },
      select: ["CdCliente"],
    });
    expect(crt).toEqual({
      CdCliente: 1,
      DtCadastro: "2020-01-01",
      EMail: "",
      NumIdentidade: "",
    });

    const dlt = await clienteModel.del({
      id: { CdCliente: "10" },
    });
    expect(dlt).toEqual(1);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [1, "2020-01-01", "", ""],
        sql: "insert into [CadCli] ([CdCliente], [DtCadastro], [EMail], [NumIdentidade]) output inserted.[CdCliente] values (@p0, @p1, @p2, @p3)",
      },
      {
        bindings: [1],
        sql: "select [CadCli].* from [CadCli] where [CadCli].[CdCliente] in (@p0)",
      },
      {
        bindings: ["10"],
        sql: "delete from [CadCli] where [CadCli].[CdCliente] = @p0;select @@rowcount",
      },
    ]);
  });

  it("update", async () => {
    tracker.on.update("CadCli").response(1);
    tracker.on.select("CadCli").response([{ CdCliente: 1 }]);
    const rsp = await clienteModel.update({
      id: { CdCliente: 1 },
      data: { EMail: "" },
      select: ["CdCliente"],
    });
    expect(rsp).toEqual({ CdCliente: 1, EMail: "" });
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: ["", 1],
        sql: "update [CadCli] set [EMail] = @p0 where [CadCli].[CdCliente] = @p1;select @@rowcount",
      },
      {
        bindings: [1],
        sql: "select [CadCli].* from [CadCli] where [CadCli].[CdCliente] = @p0",
      },
    ]);
  });

  it("vendaMensalQuantidade", async () => {
    tracker.on
      .select("MestreNota")
      .response([{ NmCategoria: "cat1", anoMes: "2020-01", quantidade: 10 }]);
    const rsp = await clienteModel.vendaMensalQuantidade({
      inicio: "2020-01-01",
      fim: "2020-01-01",
      cliente: 1,
    });
    expect(rsp).toEqual([{ "2020-01": 10, categoria: "cat1" }]);
    expect(knexMockHistory(tracker)).toEqual([
      {
        bindings: [
          "S",
          2,
          "S",
          "S",
          "N",
          0,
          "C",
          "2020-01-01",
          "2020-01-01",
          1,
        ],
        sql: "select [CategPro].[NmCategoria], [MestreNota].[CdCliente], CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor from [MestreNota] inner join [ItemNota] on [MestreNota].[CdFilial] = [ItemNota].[CdFilial] and [MestreNota].[Serie] = [ItemNota].[Serie] and [MestreNota].[Modelo] = [ItemNota].[Modelo] and [MestreNota].[NumNota] = [ItemNota].[NumNota] inner join [NatOpe] on [NatOpe].[Nop] = [MestreNota].[Nop] inner join [CadVen] on [CadVen].[CdVendedor] = [MestreNota].[CdVendedor] inner join [CadPro] on [CadPro].[CdProduto] = [ItemNota].[CdProduto] inner join [CategPro] on [CadPro].[CdCategoria] = [CategPro].[CdCategoria] where [MestreNota].[FgEstatistica] = @p0 and [MestreNota].[CdFilial] = @p1 and [CadPro].[FgEstatistica] = @p2 and [CadVen].[FgControle] = @p3 and [ItemNota].[ImprimeComponentes] = @p4 and [ItemNota].[Sequencia] > @p5 and [MestreNota].[Tipo] <> @p6 and [MestreNota].[DtEmissao] between @p7 and @p8 and [MestreNota].[CdCliente] = @p9 group by [CdCliente], [NmCategoria], CONVERT(char(7), dbo.MestreNota.DtEmissao, 126)",
      },
    ]);
  });
});
