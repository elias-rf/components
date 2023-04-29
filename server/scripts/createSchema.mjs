import fs from "fs";
import knex from "knex";
import { SchemaInspector } from "knex-schema-inspector";
import { connections } from "./connections.mjs";
function convertType(type) {
  switch (type) {
    case "tinyint":
    case "bit":
    case "tCodigoEmpresa":
    case "smallint":
    case "numeric":
      return "int";
    case "char":
    case "tNomePessoa":
    case "text":
    case "tMemo":
    case "tSmallMemo":
    case "varchar":
      return "string";
    case "real":
    case "decimal":
    case "money":
    case "smallmoney":
      return "float";
    case "smalldatetime":
      return "date";
    default:
      return type;
  }
}

const rsp = { database: "", table: "", schema: [] };

const uri = process.argv[2];
const [db, table] = uri.split(".");
let schemaTable = process.argv[3] || table;

if (db !== "oftalmo" && db !== "plano") {
  console.log("use plano|oftalmo.table");
  process.exit(1);
}

const server = knex(connections[db].origem);

const inspector = await SchemaInspector(server);

const tables = await inspector.tables();
// if (!tables.includes(table)) {
//   console.log("Tabela ", table, " desconhecida");
// }
for (const table of tables) {
  const infoFields = await inspector.columnInfo(table);
  schemaTable = table;
  rsp.database = db;
  rsp.table = table;
  rsp.fields = infoFields.map((fld) => {
    const sch = {
      field: fld.name,
      label: fld.name,
      name: fld.name,
      type: convertType(fld.data_type),
      size: fld.max_length,
    };
    if (fld.numeric_scale) sch.scale = fld.numeric_scale;
    if (fld.has_auto_increment) sch.autoIncrement = fld.has_auto_increment;
    if (fld.is_primary_key) {
      sch.primaryKey = fld.is_primary_key;
      sch.name = schemaTable + "_id";
    }
    if (!fld.is_nullable) sch.allowNull = fld.is_nullable;
    if (fld.default_value) sch.defaultValue = fld.default_value;

    return sch;
  });
  const response = `import { TEntity } from "@mono/types";

export const ${schemaTable}: TEntity =
  ${JSON.stringify(rsp, null, "  ")}
`;
  fs.writeFile(
    "./schema/" + db + "/" + schemaTable.replaceAll("_", "-") + ".schema.ts",
    response,
    () => {
      console.log("schema/" + schemaTable.replaceAll("_", "-") + ".schema.ts");
      // process.exit(0);
    }
  );
}
