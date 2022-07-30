import Knex from "knex";

const origem = Knex({
  client: "mssql",
  connection: {
    host: "192.168.0.10",
    user: "sa",
    password: "#$3pol3-3",
    database: "Visiontech",
    options: {
      enableArithAbort: true,
      trustServerCertificate: true,
    },
  },
  debug: false,
  useNullAsDefault: true,
});

const destino = Knex({
  client: "mssql",
  connection: {
    host: "localhost",
    user: "sa",
    password: "1qaz@WSX",
    database: "Visiontech",
    options: {
      enableArithAbort: true,
      trustServerCertificate: true,
    },
  },
  debug: false,
  useNullAsDefault: true,
});

async function copyTable(table, fields) {
  return new Promise((resolve, reject) => {
  await destino(table).truncate();
  console.log(table);
  const readableStream = origem.select("*").from(table).stream();
  let count = 1;
  readableStream
    .on("data", async (data) => {
      readableStream.pause(); // pause stream
      try {
        if (fields) {
          for (const field of fields) {
            delete data[field];
          }
        }
        await destino(table).insert(data);
        console.log(table, "CREATED ", count);
        count++;
        readableStream.resume(); // resume stream
      } catch (e) {
        console.log(table, "ERROR", e);
      }

      readableStream.resume(); // resume stream
    })
    .on("finish", () => {
      console.log(table, "FINISH");
      resolve()
      // process.exit(0);
    })
    .on("error", (err) => {
      console.log(table, "ERROR", err);
      reject(err)
      // process.exit(1);
    });
  },)
}

await copyTable("diamante"); // ok
await copyTable("groupSubject"); // ok
await copyTable("phonebook"); // ok
await copyTable("tbl_Produto"); // ok
await copyTable("tbl_Produto_item"); // ok
await copyTable("tbl_Seguranca_Usuario"); // ok not autoincrement
await copyTable("tEsterilizacaoExterna"); // ok
await copyTable("tEsterilizacaoInterna");
await copyTable("tMaquina");
await copyTable("tOperacaoDeProducao");
await copyTable("tOperacaoOrdemProducao", [
  "DataInicio",
  "HoraInicio",
  "DataFim",
  "HoraFim",
]);
await copyTable("tOrdemProducao", ["ts"]);
console.log("finished");
