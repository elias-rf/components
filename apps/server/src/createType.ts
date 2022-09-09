import { TEntity } from "@er/types";
import { paramCase, pascalCase } from "change-case";
import fs from "fs";
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
  for (const fld in schema.fields) {
    if (schema.fields[fld].primaryKey)
      rsp += `  ${schema.fields[fld].name}${
        schema.fields[fld].autoIncrement ? "?" : ""
      }: ${convertType(schema.fields[fld].type)};\n`;
  }
  rsp += "}\n\n";

  rsp += `export type T${pascalCase(schemaName)}Base = {\n`;
  for (const fld in schema.fields) {
    if (!schema.fields[fld].primaryKey)
      rsp += `  ${schema.fields[fld].name}?: ${convertType(
        schema.fields[fld].type
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
