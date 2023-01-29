// node -r esbuild-runner/register type_create.ts produto_item
import * as changeCase from "change-case";
import fs from "fs";
import * as schema from "../schema/index";

function toTs(type: string) {
  if (["int", "float"].includes(type)) return "number";
  if (["date", "datetime"].includes(type)) return "string";
  return type;
}

async function go() {
  const tableName = process.argv[2];
  const table = schema[tableName];
  table.name = changeCase.pascalCase(tableName);
  table.nameCamel = changeCase.camelCase(tableName);
  let template = `import { TFieldClient, TOrder, TSelect, TWhere } from ".";\n\n`;
  // TTablePk
  template += `export type T${table.name}Pk = {\n`;
  for (const fld of table.fields.filter((fld) => fld.primaryKey)) {
    template += `  ${fld.name}?: ${toTs(fld.type)};\n`;
  }
  template += `}\n`;
  // TTableCol
  template += `export type T${table.name}Col = {\n`;
  for (const fld of table.fields.filter((fld) => !fld.primaryKey)) {
    template += `  ${fld.name}?: ${toTs(fld.type)};\n`;
  }
  template += `}\n`;
  // TTable
  template += `export type T${table.name} = T${table.name}Pk & T${table.name}Col;

export type T${table.name}Fields =
  | keyof Required<T${table.name}Pk>
  | keyof Required<T${table.name}Col>;

export type T${table.name}Ids = {
  [pk in keyof Required<T${table.name}Pk>]: any;
};
export type T${table.name}Select = TSelect<T${table.name}Fields>;
export type T${table.name}Where = TWhere<T${table.name}Fields>;
export type T${table.name}Order = TOrder<T${table.name}Fields>;

export type T${table.name}Schema = () => Promise<TFieldClient[]>;
export type T${table.name}Clear = () => Promise<T${table.name}>;
export type T${table.name}List = (args: {
  where?: TWhere<T${table.name}Fields>[];
  order?: TOrder<T${table.name}Fields>[];
  limit?: number;
  select?: TSelect<T${table.name}Fields>;
}) => Promise<T${table.name}[]>;
export type T${table.name}Read = (args: {
  id: T${table.name}Ids;
  select?: TSelect<T${table.name}Fields>;
}) => Promise<T${table.name}>;

export type T${table.name}Create = (args: {
  data: T${table.name};
}) => Promise<T${table.name}>;
export type T${table.name}Update = (args: {
  id: T${table.name}Ids;
  data: T${table.name};
}) => Promise<T${table.name}>;
export type T${table.name}Del = (args: {
  id: T${table.name}Ids;
}) => Promise<number>;

export type T${table.name}Rpc = {
  query: {
    ${table.nameCamel}Schema: T${table.name}Schema;
    ${table.nameCamel}Clear: T${table.name}Clear;
    ${table.nameCamel}List: T${table.name}List;
    ${table.nameCamel}Read: T${table.name}Read;
  };
  mutation: {
    ${table.nameCamel}Create: T${table.name}Create;
    ${table.nameCamel}Update: T${table.name}Update;
    ${table.nameCamel}Del: T${table.name}Del;
  };
};
`;

  // console.log(template);
  fs.writeFileSync(
    `../types/${changeCase.paramCase(tableName)}.type.ts`,
    template
  );
}

go();
