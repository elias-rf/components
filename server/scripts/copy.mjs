import Knex from "knex";

export async function copy(connection, table, pk, fields) {
  const origem = Knex(connection.origem);
  const destino = Knex(connection.destino);
  const limit = 1000;
  let offset = 0;
  let count = 0;
  let data = [];
  await destino(table).truncate();

  do {
    data = await origem
      .select(fields || "*")
      .from(table)
      .limit(1000)
      .offset(offset)
      .orderBy(pk, "desc");

    count = count + data.length;
    offset = offset + limit;
    try {
      await destino.batchInsert(table, data, 100);

      console.log(table, "CREATED ", count);

      // if ( queue.size >= 90) readableStream.resume(); // resume stream
    } catch (e) {
      console.log(table, "ERROR", e);
      process.exit(1);
    }
  } while (data.length === limit);

  console.log(table, "FINISH");
  process.exit(0);
}
