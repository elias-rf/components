import { paramCase, pascalCase } from "change-case";
import fs from "fs";
import { TEntity } from "../types";
import { entitySchema } from "./api/entity-schema";

function convertType(type: any) {
  if (["int", "float", "currency"].includes(type)) return "number";
  if (["date", "datetime", "selection", "tag"].includes(type)) return "string";
  return type;
}

function saveType(typeName: string, type: string) {
  fs.writeFileSync(`${__dirname}/type/${paramCase(typeName)}.type.ts`, type);
}

function createType(schemaName: string, schema: TEntity) {
  let rsp = `export type T${pascalCase(schemaName)}Id = {\n`;
  for (const fld in schema.schema) {
    if (schema.schema[fld].primaryKey)
      rsp += `  ${schema.schema[fld].name}${
        schema.schema[fld].autoIncrement ? "?" : ""
      }: ${convertType(schema.schema[fld].type)};\n`;
  }
  rsp += "}\n\n";

  rsp += `export type T${pascalCase(schemaName)}Base = {\n`;
  for (const fld in schema.schema) {
    if (!schema.schema[fld].primaryKey)
      rsp += `  ${schema.schema[fld].name}?: ${convertType(
        schema.schema[fld].type
      )};\n`;
  }
  rsp += `}\n\n export type T${pascalCase(schemaName)} = Partial<T${pascalCase(
    schemaName
  )}Id | T${pascalCase(schemaName)}Base>`;
  return rsp;
}

console.log(__dirname);

for (const schema in entitySchema) {
  console.log(schema);
  // if (schema === "agenda_telefone")
  saveType(schema, createType(schema, entitySchema[schema]));
}
