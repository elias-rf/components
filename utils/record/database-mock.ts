import dataJson from '@/mocks/db/db-mock/index.js'
import { driverMock } from '@/orm/driver-mock/driver-mock.js'

export const db = driverMock(dataJson)
