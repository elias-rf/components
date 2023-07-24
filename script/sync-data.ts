import Knex from "knex";
const source = Knex({
  client: "mssql",
  debug: false,
  useNullAsDefault: true,
  connection: {
    database: "OftalmoXPProducao",
    host: "192.168.192.10",
    user: "sa",
    password: "#$3pol3-3",
    options: {
      trustServerCertificate: true,
      enableArithAbort: true,
      tdsVersion: "7_3_B",
    },
  },
});
const dest = Knex({
  client: "mssql",
  debug: false,
  useNullAsDefault: true,
  connection: {
    database: "OftalmoXPProducao",
    host: "localhost",
    user: "sa",
    password: "1qaz@WSX",
    options: {
      trustServerCertificate: true,
      enableArithAbort: true,
      tdsVersion: "7_3_B",
    },
  },
});

async function copy(table: string, key: string) {
  console.log(table);
  const data = await source(table)
    .select("*")
    .limit(10000)
    .orderBy(key, "desc");
  for (const row of data) {
    const resp = await dest(table).where(key, row[key]);
    if (resp.length === 0) {
      await dest(table).insert(row);
      console.log(table, row[key]);
    }
  }
}

async function main() {
  await copy("phonebook", "id");
  await copy("tEsterilizacaoExterna", "kLoteEstExt");
  await copy("tEsterilizacaoInterna", "kLoteEstInt");
  await copy("tEtiqueta", "controle");
  await copy("tbl_producao_Etiqueta", "NumControle");
  // await copy("tOrdemProducao", "kOp");
  await copy("tOperacaoOrdemProducao", "kOperacaoOp");
  console.log("OK");
  process.exit(0);
}

main();
