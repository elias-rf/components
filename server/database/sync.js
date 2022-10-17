const origem = require("./origem");
const destino = require("./destino");

async function sync(db, table, key, initial) {
  if (!initial) {
    initial = await origem[db](table).max(key, { as: "id" });
    initial = initial[0].id;
  }
  let response;
  do {
    response = await origem[db](table)
      .where(key, ">", initial)
      .orderBy(key)
      .limit(2);
    if (response.length > 0) {
      destino[db](table).insert(data);
      initial = response[response.length - 1][key];
    }
  } while (response.length > 0);
  console.log(`${table} syncronized`);
}

sync("oftalmo", "phonebook", "id");
sync("plano", "MestreNota", "DtUltAlteracao");
