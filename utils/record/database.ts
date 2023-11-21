import dataJson from '@/mocks/db/db-mock/index.js'
import { driverMock } from '@/orm/driver-mock/driver-mock.js'

export function database() {
  const data = {} as Record<keyof typeof dataJson, any>
  try {
    let tbl: keyof typeof dataJson
    for (tbl in dataJson) {
      data[tbl] = driverMock(dataJson[tbl])
    }
  } catch (err) {
    console.error(err)
  }
  return data
}

export const db = database()
