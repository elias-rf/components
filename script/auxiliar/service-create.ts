// @ts-nocheck
// node -r esbuild-runner/register type_create.ts produto_item
import * as changeCase from 'change-case'
import fs from 'fs'
import { getSegments } from './get-segments'

function getFile(tableNameParam: string) {
  try {
    return fs.readFileSync(
      `../model/${tableNameParam}/${tableNameParam}.service.ts`,
      { encoding: 'utf-8' }
    )
  } catch (error) {
    return ''
  }
}

export function serviceCreate(fileName: string) {
  const tableNamePascal = changeCase.pascalCase(fileName)
  const tableNameCamel = changeCase.camelCase(fileName)
  const tableNameParam = changeCase.paramCase(fileName)

  const file = getFile(tableNameParam)
  const segments = getSegments(file)

  const template = `
import { TRpcFactory } from "../../client/lib/http/rpc.factory";
import deepmerge from "ts-deepmerge";
import { T${tableNamePascal}Rpc } from "./${tableNameParam}.type";
${segments.import}

export function ${tableNameCamel}ServiceFactory(rpcFactory: TRpcFactory) {
  return deepmerge( rpcFactory, {

    ${segments.service}
  } as T${tableNamePascal}Rpc);
}

${segments.other}
`

  fs.writeFileSync(
    `../model/${tableNameParam}/${tableNameParam}.service.ts`,
    template
  )
  console.log('service:', fileName, 'created')
}
