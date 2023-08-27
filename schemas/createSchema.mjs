import fs from "fs";
import knex from "knex";
import { SchemaInspector } from "knex-schema-inspector";
import { connections } from "./connections.mjs";

// function convertType(type) {
//   switch (type) {
//     case "tinyint":
//     case "bit":
//     case "tCodigoEmpresa":
//     case "smallint":
//     case "numeric":
//       return "int";
//     case "char":
//     case "tNomePessoa":
//     case "text":
//     case "tMemo":
//     case "tSmallMemo":
//     case "varchar":
//       return "string";
//     case "real":
//     case "decimal":
//     case "money":
//     case "smallmoney":
//       return "float";
//     case "smalldatetime":
//       return "date";
//     default:
//       return type;
//   }
// }

const rsp = { database: "", table: "", primary: [] };

const db = process.argv[2];
let schemaTable = "";

if (db !== "oftalmo" && db !== "plano") {
  console.log("use plano|oftalmo.table");
  process.exit(1);
}

const server = knex(connections[db]);

const inspector = await SchemaInspector(server);

const tables = await inspector.tables();
for (const table of tables) {
  const infoFields = await inspector.columnInfo(table);
  schemaTable = table;
  rsp.database = db;
  rsp.table = table;
  rsp.primary = infoFields.reduce((rsp, fld) => {
    if (fld.is_primary_key) {
      rsp.push(fld.name);
    }
    return rsp;
  }, []);
  rsp.fields = infoFields.reduce((rsp, item) => {
    rsp[item.name] = item;
    return rsp;
  }, {});
  const response = `import { Schema } from "../schemas.type";

export const ${schemaTable}: Schema =
  ${JSON.stringify(rsp, null, "  ")}
`;

  fs.writeFile("./" + db + "/" + schemaTable + ".schema.ts", response, () => {
    console.log("schema/" + schemaTable.replaceAll("_", "-") + ".schema.ts");
    // process.exit(0);
  });
}
