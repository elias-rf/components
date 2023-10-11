import { Query } from '@/orm/orm.type'

export function getAssociations(query: Query) {
  if (!Object.hasOwn(query, 'select')) return []
  if (typeof query.select === 'object' && Object.hasOwn(query.select, 'raw'))
    return []
  return (query.select as any[]).filter((fld: any) => typeof fld === 'object')
}
