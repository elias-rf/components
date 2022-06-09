import { ListArgs } from "../..";
import { Id } from "../../../index.d";
import knexOftalmo from "../dal/oftalmo.connection";
import knexOrder from "../lib/knex/knex-order";
import knexWhere from "../lib/knex/knex-where";

type Record = {
  idSubject?: string;
  idGroup?: string;
};

const table = "groupSubject";
const pk = ["idSubject", "idGroup"];

export async function list({
  where,
  orderBy,
  limit = 1000,
}: ListArgs): Promise<Record[]> {
  const qry = await knexOftalmo(table)
    .limit(limit)
    .where(knexWhere(where))
    .orderBy(knexOrder(orderBy));
  return qry;
}

export async function read({ id }: { id: Id }): Promise<Record> {
  if (!id || !id.length || !Array.isArray(id)) {
    throw new Error("[id] is required");
  }
  const qry = await knexOftalmo(table).where(pk[0], id[0]).where(pk[1], id[1]);
  if (Array.isArray(qry) && qry.length > 0) {
    return qry[0];
  }
  return {};
}

export async function del({ id }: { id: Id }): Promise<number> {
  const qry = await knexOftalmo(table)
    .del()
    .where(pk[0], id[0])
    .where(pk[1], id[1]);
  if (Array.isArray(qry) && qry.length > 0) {
    return qry[0];
  }
  return qry;
}

export async function create({ rec }: { rec: Record }): Promise<string[]> {
  const qry = await knexOftalmo(table)
    .insert(rec)
    .returning([...pk]);
  return qry;
}

export async function update({
  id,
  rec,
}: {
  id: Id;
  rec: Record;
}): Promise<any> {
  const qry = await knexOftalmo(table)
    .update(rec)
    .where(pk[0], id[0])
    .where(pk[1], id[1])
    .returning([...pk]);
  return qry;
}
