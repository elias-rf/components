import createError from "http-errors";
import { Knex } from "knex";

import knexPlano from "../dal/plano.connection";
import { CurrentUser } from "../..";

export async function diario(
  { inicio, fim }: { inicio: string; fim: string },
  { currentUser }: { currentUser: CurrentUser },
  { knexDb = knexPlano }: { knexDb: Knex }
) {
  if (!inicio) throw new createError.BadRequest("Início não informado");
  if (!fim) throw new createError.BadRequest("Fim não informado");
  const aux = {};
  const rsp = [];
  const qry = await knexDb(
    knexDb.raw(
      "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)"
    )
  )
    .select(
      knexDb.raw(
        "CONVERT(CHAR(10),[mestrenota].[DtEmissao],120) AS dia, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade"
      )
    )
    .orderByRaw("[mestrenota].[DtEmissao] desc")
    .groupByRaw("[mestrenota].[DtEmissao], CategPro.NmCategoria")
    .where(
      knexDb.raw("[mestrenota].[DtEmissao] between ? and ?", [inicio, fim])
    )
    .andWhere(
      knexDb.raw(
        "MestreNota.CdFilial= 1 AND NatOpe.Nop= 5151 AND MestreNota.Tipo<> 'C' AND MestreNota.NotadeComplemento= 'N'"
      )
    );

  for (const item of qry) {
    aux[item.dia] = {
      ...aux[item.dia],
      ...{ [item.NmCategoria]: item.quantidade },
    };
  }

  for (const [key, value] of Object.entries(aux)) {
    const item = { dia: key, ...value };
    rsp.push(item);
  }

  return rsp;
}

export async function mensal(
  { mes }: { mes: string },
  { currentUser }: { currentUser: CurrentUser },
  { knexDb = knexPlano }: { knexDb: Knex }
) {
  if (!mes) throw new createError.BadRequest("Mês não informado");
  const aux = {};
  const rsp = [];
  const qry = await knexDb(
    knexDb.raw(
      "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)"
    )
  )
    .select(
      knexDb.raw(
        "CONVERT(CHAR(7),[mestrenota].[DtEmissao],120) AS mes, CategPro.NmCategoria, Sum(ItemNota.Quantidade) AS quantidade"
      )
    )
    .orderByRaw("CONVERT(CHAR(7),[mestrenota].[DtEmissao],120) desc")
    .groupBy(
      knexDb.raw(
        "CONVERT(CHAR(7),[mestrenota].[DtEmissao],120), CategPro.NmCategoria"
      )
    )
    .where(
      knexDb.raw("CONVERT(CHAR(7),[mestrenota].[DtEmissao],120)>=?", [mes])
    )
    .andWhere(
      knexDb.raw(
        "MestreNota.CdFilial= 1 AND NatOpe.Nop= 5151 AND MestreNota.Tipo<> 'C' AND MestreNota.NotadeComplemento= 'N'"
      )
    );

  for (const item of qry) {
    aux[item.mes] = {
      ...aux[item.mes],
      ...{ [item.NmCategoria]: item.quantidade },
    };
  }

  for (const [key, value] of Object.entries(aux)) {
    const item = { mes: key, ...value };
    rsp.push(item);
  }

  return rsp;
}

export async function modelo(
  { data }: { data: string },
  { currentUser }: { currentUser: CurrentUser },
  { knexDb = knexPlano }: { knexDb: Knex }
) {
  if (!data) throw new createError.BadRequest("Data não informada");
  // const aux = {};
  // const rsp = [];
  if (!data) {
    throw new createError.BadRequest("Data não informada");
  }

  const qry = await knexDb(
    knexDb.raw(
      "NatOpe INNER JOIN (CategPro INNER JOIN (CadPro INNER JOIN (MestreNota INNER JOIN ItemNota ON (MestreNota.Serie = ItemNota.Serie) AND (MestreNota.NumNota = ItemNota.NumNota) AND (MestreNota.CdFilial = ItemNota.CdFilial)) ON CadPro.CdProduto = ItemNota.CdProduto) ON CategPro.CdCategoria = CadPro.CdCategoria) ON (ItemNota.Nop = NatOpe.Nop) AND (NatOpe.Nop = MestreNota.Nop)"
    )
  )
    .select(
      knexDb.raw(
        "CadPro.Descricao as modelo, Sum(ItemNota.Quantidade) AS quantidade"
      )
    )
    .orderByRaw("CadPro.Descricao asc")
    .groupBy(knexDb.raw("CadPro.Descricao"))
    .where(knexDb.raw("MestreNota.DtEmissao = ?", [data]))
    .andWhere(
      knexDb.raw(
        "MestreNota.CdFilial=1 AND NatOpe.Nop=5151 AND MestreNota.Tipo<>'C' AND MestreNota.NotadeComplemento='N'"
      )
    );

  return qry;
}
