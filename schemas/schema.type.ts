import { TWhere } from '@/types/index.js'

export type TSchema = {
  table: string
  primary: readonly string[]
  relations?: {
    [relation: string]: {
      method: () => Promise<any>
      where: TWhere<string>
    }
  }
  fields: readonly string[]
}
