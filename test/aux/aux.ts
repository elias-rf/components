import { tables } from "../../model/tables";
import { connections } from "../../server/dal/connections";
import { TGenericObject } from "../../types";
import { recordClear } from "../../utils/schema/record-clear";
import { renameToFieldArrayObject } from "../../utils/schema/rename-fields";

export async function delCreateAux(
  table: string,
  { create = [], del = [] }: { del?: any[]; create?: any[] }
) {
  if (del[0] === "*") {
    await deleteAll(table);
  } else {
    await deleteAux(table, del);
  }
  await createAux(table, createRecord(table, create));
}

export function createRecord(table: string, recs: TGenericObject[]) {
  return renameToFieldArrayObject(
    recs.map((rec: TGenericObject) => ({
      ...recordClear(tables[table].fields),
      ...rec,
    })),
    tables[table].fields
  );
}

export async function createAux(table: string, recs: TGenericObject[]) {
  const tableDef = tables[table];
  const cnn = tableDef.database;
  const knex = connections[cnn];
  for (const rec of recs) {
    const [{ ttl }] = await knex(tableDef.table).where(rec).count({ ttl: "*" });
    if (ttl === 0) {
      // sendLog({ created: rec });
      await knex(tableDef.table).insert(rec);
    }
  }
}

export async function deleteAux(table: string, records: TGenericObject[]) {
  const tableDef = tables[table];
  const cnn = tableDef.database;
  const knex = connections[cnn];
  const recs = renameToFieldArrayObject(records, tables[table].fields);
  for (const rec of recs) {
    await knex(tableDef.table).del().where(rec);
  }
}

export async function deleteAll(table: string) {
  const tableDef = tables[table];
  const cnn = tableDef.database;
  const knex = connections[cnn];
  await knex(tableDef.table).del();
}

export async function readAux(table: string, where: any) {
  const tableDef = tables[table];
  const cnn = tableDef.database;
  const knex = connections[cnn];
  return knex(tableDef.table).where(where);
}
