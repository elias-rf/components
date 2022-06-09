import { Knex } from "knex";
import { CurrentUser, GenericObject, Order, Where } from "../..";
import knexOftalmo from "../dal/oftalmo.connection";
import knexOrder from "../lib/knex/knex-order";
import knexWhere from "../lib/knex/knex-where";

type Id = string[];
type Record = {
  kUsuario: string;
  nome: string;
  NomeUsuario: string;
  idGroup: string;
  Ativo: string;
};

const table = "tbl_seguranca_usuario";
const pk = "kUsuario";

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
  { currentUser }: { currentUser: CurrentUser },
  { knexDb = knexOftalmo }: { knexDb: Knex }
): Promise<GenericObject[]> {
  const qry = await knexDb(table)
    .limit(limit)
    .where(knexWhere(where))
    .orderBy(knexOrder(orderBy));
  return qry;
}

export async function read(
  { id }: { id: Id },
  { currentUser }: { currentUser: CurrentUser },
  { knexDb = knexOftalmo }: { knexDb: Knex }
): Promise<GenericObject> {
  const qry = await knexDb(table).where(pk, id);
  if (Array.isArray(qry) && qry.length > 0) {
    return qry[0];
  }
  return qry;
}

export async function del(
  { id }: { id: Id },
  { currentUser }: { currentUser: CurrentUser },
  { knexDb = knexOftalmo }: { knexDb: Knex }
): Promise<number> {
  const qry = await knexDb(table).del().where(pk, id);
  if (Array.isArray(qry) && qry.length > 0) {
    return qry[0];
  }
  return qry;
}

export async function create(
  { rec }: { rec: Record },
  { currentUser }: { currentUser: CurrentUser },
  { knexDb = knexOftalmo }: { knexDb: Knex }
): Promise<string[]> {
  const qry = await knexDb(table).insert(rec).returning([pk]);
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
  { currentUser }: { currentUser: CurrentUser },
  { knexDb = knexOftalmo }: { knexDb: Knex }
): Promise<any> {
  const qry = await knexDb(table)
    .update(rec)
    .where("kUsuario", id)
    .returning(["kUsuario"]);
  return qry;
}
