import { Association } from '@/orm/orm.type'

export function fillAssociations(
  dataSource: Record<string, any>[],
  dataTarget: Record<string, any>[],
  association: Association
) {
  const field = Object.keys(association)[0]
  const keysSource = association[field].source
  const keysTarget = association[field].target
  const multipleKeys = Array.isArray(keysSource)
  const hasMany = association[field].type === 'hasMany'

  return dataSource.map((record: Record<string, any>) => {
    const target = dataTarget.filter((target: Record<string, any>) => {
      if (multipleKeys) {
        for (const key in keysSource) {
          if (target[keysTarget[key]] !== record[keysSource[key]]) return false
        }
        return true
      }

      return target[keysTarget as string] === record[keysSource]
    })
    if (hasMany) {
      record[field] = target
    } else {
      record[field] = target[0]
    }

    return record
  })
}
