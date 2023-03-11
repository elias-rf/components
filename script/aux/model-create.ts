// node -r esbuild-runner/register type_create.ts produto_item
import * as changeCase from "change-case";
import fs from "fs";
import { getSegments } from "./get-segments";

function getFile(tableNameParam: string) {
  try {
    return fs.readFileSync(
      `../model/${tableNameParam}/${tableNameParam}.model.ts`,
      { encoding: "utf-8" }
    );
  } catch (error) {
    return "";
  }
}

export function modelCreate(fileName: string) {
  const tableNameSnake = changeCase.snakeCase(fileName);
  const tableNamePascal = changeCase.pascalCase(tableNameSnake);
  const tableNameCamel = changeCase.camelCase(tableNameSnake);
  const tableNameParam = changeCase.paramCase(tableNameSnake);

  const file = getFile(tableNameParam);
  const segments = getSegments(file);

  const template = `
import deepmerge from "ts-deepmerge";
import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { ${tableNameSnake} } from "./${tableNameParam}.table";
import type { T${tableNamePascal}Model } from "./${tableNameParam}.type";
${segments.import}

export function ${tableNameCamel}ModelFactory(
  ${segments.inject}
T${tableNamePascal}Model {

  const connection = connections[${tableNameSnake}.database]
  const crud = crudFactory(
    connection,
    ${tableNameSnake}
  );

  ${segments.def}

  return deepmerge(
    { connection, ${tableNameSnake} },
    crud,
    ${segments.query}
  );

}

${segments.other}
`;

  // console.log(template);
  fs.writeFileSync(
    `../model/${tableNameParam}/${tableNameParam}.model.ts`,
    template
  );
  console.log("model:", fileName, "created");
}
