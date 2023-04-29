// node -r esbuild-runner/register type_create.ts produto_item
import { tables } from "@mono/models/tables";
import * as changeCase from "change-case";
import fs from "fs";
import { getSegments } from "./get-segments";

function toTs(type: string) {
  if (["int", "float"].includes(type)) return "number";
  if (["date", "datetime"].includes(type)) return "string";
  return type;
}

function getFile(tableNameParam: string) {
  try {
    return fs.readFileSync(
      `../model/${tableNameParam}/${tableNameParam}.type.ts`,
      { encoding: "utf-8" }
    );
  } catch (error) {
    return "";
  }
}

export function typeCreate(fileName: string) {
  const tableNameSnake = changeCase.snakeCase(fileName);
  const tableNamePascal = changeCase.pascalCase(fileName);
  const tableNameParam = changeCase.paramCase(fileName);

  const table = tables[tableNameSnake];
  const file = getFile(tableNameParam);
  const segments = getSegments(file);

  let template = `import { TField, TOrder, TSelect, TWhere } from "@mono/types";
${segments.import}\n`;
  // TTablePk
  template += `export interface T${tableNamePascal}Pk {\n`;
  for (const fld of table.fields.filter((fld) => fld.primaryKey)) {
    template += `  ${fld.name}?: ${toTs(fld.typeField || "")};\n`;
  }
  template += `}\n`;
  // TTableCol
  const fieldsCol = table.fields.filter((fld) => !fld.primaryKey);
  if (fieldsCol.length > 0) {
    template += `export interface T${tableNamePascal} extends T${tableNamePascal}Pk {\n`;
    for (const fld of fieldsCol) {
      template += `  ${fld.name}?: ${toTs(fld.typeField || "")};\n`;
    }
    template += `}\n`;
  }
  // TTable
  template += `
export type T${tableNamePascal}Fields = keyof Required<T${tableNamePascal}>

export type T${tableNamePascal}Ids = {
  [pk in keyof Required<T${tableNamePascal}Pk>]: any;
};
export type T${tableNamePascal}Select = TSelect<T${tableNamePascal}Fields>;
export type T${tableNamePascal}Where = TWhere<T${tableNamePascal}Fields>;
export type T${tableNamePascal}Order = TOrder<T${tableNamePascal}Fields>;

export type T${tableNamePascal}Schema = () => Promise<TField[]>;
export type T${tableNamePascal}Clear = () => Promise<T${tableNamePascal}>;
export type T${tableNamePascal}List = (args: {
  where?: TWhere<T${tableNamePascal}Fields>[];
  order?: TOrder<T${tableNamePascal}Fields>[];
  limit?: number;
  select?: TSelect<T${tableNamePascal}Fields>;
}) => Promise<T${tableNamePascal}[]>;
export type T${tableNamePascal}Read = (args: {
  id: T${tableNamePascal}Ids;
  select?: TSelect<T${tableNamePascal}Fields>;
}) => Promise<T${tableNamePascal}>;

export type T${tableNamePascal}Create = (args: {
  data: T${tableNamePascal};
  select?: TSelect<T${tableNamePascal}Fields>;
}) => Promise<T${tableNamePascal}>;
export type T${tableNamePascal}Update = (args: {
  id: T${tableNamePascal}Ids;
  data: T${tableNamePascal};
  select?: TSelect<T${tableNamePascal}Fields>;
}) => Promise<T${tableNamePascal}>;
export type T${tableNamePascal}Del = (args: {
  id: T${tableNamePascal}Ids;
}) => Promise<number>;

${segments.def}

export type T${tableNamePascal}Crud = {
  query: {
    schema: T${tableNamePascal}Schema;
    clear: T${tableNamePascal}Clear;
    list: T${tableNamePascal}List;
    read: T${tableNamePascal}Read;
  };
  mutation: {
    create: T${tableNamePascal}Create;
    update: T${tableNamePascal}Update;
    del: T${tableNamePascal}Del;
  };
};

export type T${tableNamePascal}Model = T${tableNamePascal}Crud & {
  ${segments.query}
  ${segments.mutation}
  ${segments.type}
};

export type T${tableNamePascal}Rpc = T${tableNamePascal}Model;
`;

  fs.writeFileSync(
    `../model/${tableNameParam}/${tableNameParam}.type.ts`,
    template
  );
  console.log("type:", fileName, "created");
}
