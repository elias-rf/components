import { createTracker } from "knex-mock-client";
import { connectionsMock } from "../../mocks/connections.mock";
import { container } from "../../mocks/container.mock";
import { knexMockHistory } from "../../utils/data/knex-mock-history";

describe("clienteRpc", () => {
  const tracker = createTracker(connectionsMock.plano);

  const clienteRpc = container.resolve("clienteRpc");

  beforeEach(() => {
    tracker.reset();
  });

  it("schema", async () => {
    const schema = await clienteRpc.query.schema();
    expect(schema.length).toEqual(10);
  });

  it("vendaMensalQuantidadeSchema", async () => {
    const schema = await clienteRpc.query.vendaMensalQuantidadeSchema({
      inicio: "2020-01-01",
      fim: "2020-01-01",
    });
    expect(schema.length).toEqual(2);
  });

  it("vendaMensalValorSchema", async () => {
    const schema = await clienteRpc.query.vendaMensalValorSchema({
      inicio: "2020-01-01",
      fim: "2020-01-01",
    });
    expect(schema.length).toEqual(2);
  });

  it("vendaMensalValorMedioSchema", async () => {
    const schema = await clienteRpc.query.vendaMensalValorMedioSchema({
      inicio: "2020-01-01",
      fim: "2020-01-01",
    });
    expect(schema.length).toEqual(2);
  });

  it("vendaMensalQuantidade", async () => {
    tracker.on.select("MestreNota").response([]);
    const resp = await clienteRpc.query.vendaMensalQuantidade({
      inicio: "2020-01-01",
      fim: "2020-01-01",
      cliente: 1,
    });
    expect(resp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
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
          sql: `select [CategPro].[NmCategoria], [MestreNota].[CdCliente], CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor from [MestreNota] inner join [ItemNota] on [MestreNota].[CdFilial] = [ItemNota].[CdFilial] and [MestreNota].[Serie] = [ItemNota].[Serie] and [MestreNota].[Modelo] = [ItemNota].[Modelo] and [MestreNota].[NumNota] = [ItemNota].[NumNota] inner join [NatOpe] on [NatOpe].[Nop] = [MestreNota].[Nop] inner join [CadVen] on [CadVen].[CdVendedor] = [MestreNota].[CdVendedor] inner join [CadPro] on [CadPro].[CdProduto] = [ItemNota].[CdProduto] inner join [CategPro] on [CadPro].[CdCategoria] = [CategPro].[CdCategoria] where [MestreNota].[FgEstatistica] = @p0 and [MestreNota].[CdFilial] = @p1 and [CadPro].[FgEstatistica] = @p2 and [CadVen].[FgControle] = @p3 and [ItemNota].[ImprimeComponentes] = @p4 and [ItemNota].[Sequencia] > @p5 and [MestreNota].[Tipo] <> @p6 and [MestreNota].[DtEmissao] between @p7 and @p8 and [MestreNota].[CdCliente] = @p9 group by [CdCliente], [NmCategoria], CONVERT(char(7), dbo.MestreNota.DtEmissao, 126)`,
        },
      ],
    });
  });

  it("vendaMensalValor", async () => {
    tracker.on.select("MestreNota").response([]);
    const resp = await clienteRpc.query.vendaMensalValor({
      inicio: "2020-01-01",
      fim: "2020-01-01",
      cliente: 1,
    });
    expect(resp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
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
          sql: `select [CategPro].[NmCategoria], [MestreNota].[CdCliente], CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor from [MestreNota] inner join [ItemNota] on [MestreNota].[CdFilial] = [ItemNota].[CdFilial] and [MestreNota].[Serie] = [ItemNota].[Serie] and [MestreNota].[Modelo] = [ItemNota].[Modelo] and [MestreNota].[NumNota] = [ItemNota].[NumNota] inner join [NatOpe] on [NatOpe].[Nop] = [MestreNota].[Nop] inner join [CadVen] on [CadVen].[CdVendedor] = [MestreNota].[CdVendedor] inner join [CadPro] on [CadPro].[CdProduto] = [ItemNota].[CdProduto] inner join [CategPro] on [CadPro].[CdCategoria] = [CategPro].[CdCategoria] where [MestreNota].[FgEstatistica] = @p0 and [MestreNota].[CdFilial] = @p1 and [CadPro].[FgEstatistica] = @p2 and [CadVen].[FgControle] = @p3 and [ItemNota].[ImprimeComponentes] = @p4 and [ItemNota].[Sequencia] > @p5 and [MestreNota].[Tipo] <> @p6 and [MestreNota].[DtEmissao] between @p7 and @p8 and [MestreNota].[CdCliente] = @p9 group by [CdCliente], [NmCategoria], CONVERT(char(7), dbo.MestreNota.DtEmissao, 126)`,
        },
      ],
    });
  });

  it("vendaMensalValorMedio", async () => {
    tracker.on.select("MestreNota").response([]);
    const resp = await clienteRpc.query.vendaMensalValorMedio({
      inicio: "2020-01-01",
      fim: "2020-01-01",
      cliente: 1,
    });
    expect(resp).toEqual([]);
    expect(knexMockHistory(tracker)).toEqual({
      select: [
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
          sql: `select [CategPro].[NmCategoria], [MestreNota].[CdCliente], CONVERT(char(7), MestreNota.DtEmissao, 126) AS anoMes, sum(case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end) as quantidade, sum(itemNota.VlLiquido * (case MestreNota.tipo when 'E' then ItemNota.Quantidade * -1 when 'S' then ItemNota.Quantidade end)) AS valor from [MestreNota] inner join [ItemNota] on [MestreNota].[CdFilial] = [ItemNota].[CdFilial] and [MestreNota].[Serie] = [ItemNota].[Serie] and [MestreNota].[Modelo] = [ItemNota].[Modelo] and [MestreNota].[NumNota] = [ItemNota].[NumNota] inner join [NatOpe] on [NatOpe].[Nop] = [MestreNota].[Nop] inner join [CadVen] on [CadVen].[CdVendedor] = [MestreNota].[CdVendedor] inner join [CadPro] on [CadPro].[CdProduto] = [ItemNota].[CdProduto] inner join [CategPro] on [CadPro].[CdCategoria] = [CategPro].[CdCategoria] where [MestreNota].[FgEstatistica] = @p0 and [MestreNota].[CdFilial] = @p1 and [CadPro].[FgEstatistica] = @p2 and [CadVen].[FgControle] = @p3 and [ItemNota].[ImprimeComponentes] = @p4 and [ItemNota].[Sequencia] > @p5 and [MestreNota].[Tipo] <> @p6 and [MestreNota].[DtEmissao] between @p7 and @p8 and [MestreNota].[CdCliente] = @p9 group by [CdCliente], [NmCategoria], CONVERT(char(7), dbo.MestreNota.DtEmissao, 126)`,
        },
      ],
    });
  });
});
