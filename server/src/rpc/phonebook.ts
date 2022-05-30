import type { Order, Where, GenericObject, CurrentUser } from "../..";
import knexOftalmo from "../dal/oftalmo.connection";
import knexWhere from "../lib/knex/knex-where";
import knexOrder from "../lib/knex/knex-order";

import { Id } from "../../../index";

type Record = {
  id?: string;
  name?: string;
  department?: string;
  email?: string;
};

const table = "phonebook";
const pk = ["id"];

export async function list(
  {
    where,
    orderBy,
    limit = 50,
  }: {
    where?: Where[];
    orderBy?: Order[];
    limit?: number;
  },
  { currentUser }: { currentUser: CurrentUser }
): Promise<GenericObject[]> {
  const qry = await knexOftalmo(table)
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
    throw new Error("[id] is required");
  }
  const qry = await knexOftalmo(table).where("id", id[0]);
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
    throw new Error("[id] is required");
  }
  const qry = await knexOftalmo(table).del().where("id", id[0]);
  if (Array.isArray(qry) && qry.length > 0) {
    return qry[0];
  }
  return qry;
}

export async function create(
  { rec }: { rec: Record },
  { currentUser }: { currentUser: CurrentUser }
): Promise<string[]> {
  const qry = await knexOftalmo(table).insert(rec).returning(["id"]);
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
    throw new Error("[id] is required");
  }
  const qry = await knexOftalmo(table)
    .update(rec)
    .where("id", id[0])
    .returning(["id"]);
  return qry;
}
