import dataJson from '@/utils/mocks/db/db-mock/index.js'
import { driverMock } from '@/utils/orm/driver-mock/driver-mock.js'

export const db = driverMock(dataJson)
