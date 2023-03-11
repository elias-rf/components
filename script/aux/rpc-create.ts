// node -r esbuild-runner/register type_create.ts produto_item
import { camelCase, paramCase, pascalCase } from "change-case";
import fs from "fs";
import { getSegments } from "./get-segments";

function getFile(tableNameParam: string) {
  try {
    return fs.readFileSync(
      `../model/${tableNameParam}/${tableNameParam}.rpc.ts`,
      { encoding: "utf-8" }
    );
  } catch (error) {
    return "";
  }
}

export function rpcCreate(fileName: string) {
  const tableNamePascal = pascalCase(fileName);
  const tableNameCamel = camelCase(fileName);
  const tableNameParam = paramCase(fileName);

  const file = getFile(tableNameParam);
  const segments = getSegments(file);

  const template = `
import type { T${tableNamePascal}Rpc } from "./${tableNameParam}.type";
${segments.import}

export function ${tableNameCamel}RpcFactory({
  ${tableNameCamel}Model,
}: {
  ${tableNameCamel}Model: T${tableNamePascal}Rpc;
}) {
  ${segments.def}
  return ${tableNameCamel}Model
}
`;

  fs.writeFileSync(
    `../model/${tableNameParam}/${tableNameParam}.rpc.ts`,
    template
  );
  console.log("rpc:", fileName, "created");
}
