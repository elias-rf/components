import path from 'path'
import { fileURLToPath } from 'url'

export const filename = (importMetaUrl: any) => fileURLToPath(importMetaUrl)

export const filenameRelative = (importMetaUrl: any) =>
  path.relative(process.cwd(), filename(importMetaUrl))

export const dirname = (importMetaUrl: any) =>
  path.dirname(filename(importMetaUrl))
