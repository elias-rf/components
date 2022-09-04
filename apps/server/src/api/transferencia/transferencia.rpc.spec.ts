import { afterEach, beforeEach, describe, expect, test } from "@jest/globals";
import Knex from "knex";
import { getTracker, MockClient, Tracker } from "knex-mock-client";
import { TConnections } from "../../dal/connections";
import { transferenciaRpc } from "./transferencia.rpc";

describe("venda", () => {
  const knexDb = Knex({ client: MockClient });
  const rpc = transferenciaRpc({
    plano: knexDb,
  } as TConnections);
  let tracker: Tracker;

  beforeEach(() => {
    tracker = getTracker();
  });

  afterEach(() => {
    tracker.reset();
  });

  test("diario", async () => {
    tracker.on
      .select("MestreNota")
      .response([{ dia: "2020-01-01", NmCategoria: "ok", quantidade: 1 }]);

    const rsp = await rpc.transferenciaDiario({
      inicio: "2020-01-01",
      fim: "2020-01-31",
    });

    expect(rsp).toEqual([{ dia: "2020-01-01", ok: 1 }]);
    expect(tracker.history.select[0].bindings).toEqual([
      "2020-01-01",
      "2020-01-31",
    ]);

    expect(tracker.history.select[0].sql).toEqual(
      "select CONVERT(CHAR(10),[mestrenota].[DtEmissao],120) AS dia, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade from NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop) where [mestrenota].[DtEmissao] between ? and ? and MestreNota.CdFilial= 1 AND NatOpe.Nop= 5151 AND MestreNota.Tipo<> 'C' AND MestreNota.NotadeComplemento= 'N' group by [mestrenota].[DtEmissao], CategPro.NmCategoria order by [mestrenota].[DtEmissao] desc"
    );
  });

  test("mensal", async () => {
    tracker.on
      .select("MestreNota")
      .response([{ mes: "2020-01", NmCategoria: "ok", quantidade: 1 }]);

    const rsp = await rpc.transferenciaMensal({
      mes: "2020-01",
    });

    expect(rsp).toEqual([{ mes: "2020-01", ok: 1 }]);
    expect(tracker.history.select[0].bindings).toEqual(["2020-01"]);

    expect(tracker.history.select[0].sql).toEqual(
      "select CONVERT(CHAR(7),[mestrenota].[DtEmissao],120) AS mes, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade from NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop) where CONVERT(CHAR(7),[mestrenota].[DtEmissao],120)>=? and MestreNota.CdFilial= 1 AND NatOpe.Nop= 5151 AND MestreNota.Tipo<> 'C' AND MestreNota.NotadeComplemento= 'N' group by CONVERT(CHAR(7),[mestrenota].[DtEmissao],120), CategPro.NmCategoria order by CONVERT(CHAR(7),[mestrenota].[DtEmissao],120) desc"
    );
  });

  test("modelo", async () => {
    tracker.on
      .select("MestreNota")
      .response([{ mes: "2020-01", NmCategoria: "ok", quantidade: 1 }]);

    const rsp = await rpc.transferenciaModelo({
      data: "2020-01-01",
    });

    expect(rsp).toEqual([{ mes: "2020-01", NmCategoria: "ok", quantidade: 1 }]);
    expect(tracker.history.select[0].bindings).toEqual(["2020-01-01"]);

    expect(tracker.history.select[0].sql).toEqual(
      "select CadPro.Descricao as modelo, Sum(ItemNota.Quantidade) AS quantidade from NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop) where MestreNota.DtEmissao = ? and MestreNota.CdFilial=1 AND NatOpe.Nop=5151 AND MestreNota.Tipo<>'C' AND MestreNota.NotadeComplemento='N' group by CadPro.Descricao order by CadPro.Descricao asc"
    );
  });
});
