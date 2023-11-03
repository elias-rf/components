import path from 'path'
import { fileURLToPath } from 'url'

export const __filename = (importMetaUrl: any) => fileURLToPath(importMetaUrl)

export const __filenameRelative = (importMetaUrl: any) =>
  path.relative(process.cwd(), __filename(importMetaUrl))

export const __dirname = (importMetaUrl: any) =>
  path.dirname(__filename(importMetaUrl))
