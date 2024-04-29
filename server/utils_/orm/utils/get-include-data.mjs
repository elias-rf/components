import * as _ from 'lodash-es'
import { isEmpty } from '../../../utils/identify/is-empty.mjs'

function setWhere(data, where) {
  return where.map((whr) => {
    if (whr.length === 3) return [whr[0], whr[1], data[whr[2]] || 0]
    return [whr[0], data[whr[1]] || 0]
  })
}

export async function getIncludeData(data, include, schema) {
  if (isEmpty(data)) return null
  if (Array.isArray(data)) {
    return await Promise.all(
      data.map(async (d) => await getIncludeData(d, include, schema))
    )
  }

  for (const includeName in include) {
    if (schema.relations) {
      if (schema.relations[includeName]) {
        let where = _.cloneDeep(schema.relations[includeName].where)
        where = setWhere(data, where)
        where = [
          ...where,
          ...include[includeName].filter((fld) => Array.isArray(fld)),
        ]
        const method = await schema.relations[includeName].method()

        data[includeName] = await method({
          where,
          select: include[includeName].map((fld) => {
            if (Array.isArray(fld)) {
              return fld[0]
            }
            return fld
          }),
          include: Object.keys(include).reduce((acc, key) => {
            if (key.startsWith(`${includeName}.`)) {
              acc[key.substring(includeName.length + 1)] = include[key]
            }
            return acc
          }, {}),
        })
      }
    }
  }
  return data
}
