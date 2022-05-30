import type { Order, Where, GenericObject, CurrentUser, ListArgs } from "../..";
import knexPlano from "../dal/plano.connection";
import knexWhere from "../lib/knex/knex-where";
import knexOrder from "../lib/knex/knex-order";

import { Id } from "../../../index";

type Record = {
  CdCliente?: string;
  RzSocial?: string;
  Cidade?: string;
  Uf?: string;
  CGC?: string;
  CdVendedor?: string;
  FgAtivo?: string;
};

const table = "CadCli";
const pk = ["CdCliente"];

export async function list(
  { where, orderBy, limit = 50 }: ListArgs,
  { currentUser }: { currentUser: CurrentUser }
): Promise<GenericObject[]> {
  const qry = await knexPlano(table)
    .limit(limit)
    .where(knexWhere(where))
    .orderBy(knexOrder(orderBy));
  return qry;
}

export async function read(
  { id }: { id: Id },
  { currentUser }: { currentUser: CurrentUser }
): Promise<GenericObject> {
  if (!id || !id.length || !Array.isArray(id)) {
    throw new Error("[CdCliente] is required");
  }
  const qry = await knexPlano(table).where("CdCliente", id[0]);
  if (Array.isArray(qry) && qry.length > 0) {
    return qry[0];
  }
  return qry;
}

export async function del(
  { id }: { id: Id },
  { currentUser }: { currentUser: CurrentUser }
): Promise<number> {
  if (!id || !id.length || !Array.isArray(id)) {
    throw new Error("[CdCliente] is required");
  }
  const qry = await knexPlano(table).del().where("CdCliente", id[0]);
  if (Array.isArray(qry) && qry.length > 0) {
    return qry[0];
  }
  return qry;
}

export async function create(
  { rec }: { rec: Record },
  { currentUser }: { currentUser: CurrentUser }
): Promise<string[]> {
  const qry = await knexPlano(table).insert(rec).returning(["CdCliente"]);
  return qry;
}

export async function update(
  {
    id,
    rec,
  }: {
    id: Id;
    rec: Record;
  },
  { currentUser }: { currentUser: CurrentUser }
): Promise<any> {
  if (!id || !id.length || !Array.isArray(id)) {
    throw new Error("[CdCliente] is required");
  }
  const qry = await knexPlano(table)
    .update(rec)
    .where("CdCliente", id[0])
    .returning(["CdCliente"]);
  return qry;
}
