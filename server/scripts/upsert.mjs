import Knex from "knex";

export async function upsert(connection, table, pk, fields) {
  const origem = Knex(connection.origem);
  const destino = Knex(connection.destino);
  const limit = 100000;
  let updated = 0;

  const list = await origem
    .from(table)
    .select(pk)
    .limit(limit)
    .orderBy(pk, "desc");

  for (const linha of list) {
    const key = linha[pk];
    const dataOrigem = await origem
      .select(fields || "*")
      .from(table)
      .where(pk, key);

    const dataDestino = await destino.select(pk).from(table).where(pk, key);
    if (dataDestino.length === 0) {
      await destino.from(table).insert(dataOrigem[0]).where(pk, key);
      console.log("inserted", key);
      updated = 0;
    } else {
      await destino.from(table).update(dataOrigem[0]).where(pk, key);
      console.log("updated ", updated, key);
      updated++;
    }
    if (updated >= 5000) {
      console.log("Updated:", updated);
      break;
    }
  }

  console.log(table, "FINISH");
  process.exit(0);
}
