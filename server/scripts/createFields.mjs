import fs from "fs";
import path from "path";
import knex from "knex";
import { SchemaInspector } from "knex-schema-inspector";
import { connections } from "./connections.mjs";
import { fileURLToPath } from "url";
import ejs from "ejs";
import * as changeCase from "change-case";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function convertType(type) {
  switch (type) {
    case "tinyint":
    case "int":
    case "bit":
    case "tCodigoEmpresa":
    case "smallint":
    case "numeric":
      return "number";
    case "char":
    case "nchar":
    case "tNomePessoa":
    case "text":
    case "tMemo":
    case "tSmallMemo":
    case "varchar":
    case "timestamp":
      return "string";
    case "real":
    case "float":
    case "decimal":
    case "money":
    case "smallmoney":
      return "number";
    case "smalldatetime":
    case "datetime":
    case "date":
      return "Date";
    case "image":
      return "any";
    default:
      return type;
  }
}

const template = `import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class <%= className %> extends ModelBase {
  static tableName = "<%= tableName %>";
  static idColumn = [<%- id %>];

  <% columnInfo.forEach(function(table){ %><%= table.name %>!: <%= table.data_type %>;
  <% }); %>

  static getFields() {
    return [
      <% columnInfo.forEach(function(table){ %>"<%= table.name %>",
      <% }); %>];
  }
}

<%= className %>.knex(connections.<%= databaseName %>);

export type T<%= className %> = ModelObject<<%= className %>>;
`;

const data = { databaseName: "", tableName: "", className: "", columnInfo: [] };

const db = process.argv[2];

if (db !== "oftalmo" && db !== "plano") {
  console.log("use plano|oftalmo.table");
  process.exit(1);
}

const server = knex(connections[db].origem);
const inspector = await SchemaInspector(server);
const tables = await inspector.tables();

for (const table of tables) {
  const columnInfo = await inspector.columnInfo(table);
  data.columnInfo = columnInfo.map((column) => {
    return {
      ...column,
      data_type: convertType(column.data_type),
    };
  });
  data.id = columnInfo
    .filter((col) => col.is_primary_key)
    .map((col) => `"${col.name}"`)
    .join(", ");
  data.databaseName = db;
  data.tableName = table;
  data.className = changeCase.pascalCase(table);
  const fileName = changeCase.paramCase(table);
  const fileData = ejs.render(template, data);

  fs.writeFile(
    path.join(__dirname, `/schema/${db}/${fileName}.ts`),
    fileData,
    () => {
      console.log(path.join(__dirname, `/schema/${db}/${fileName}.ts`));
      process.exit(0);
    }
  );
}
