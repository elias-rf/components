import { createTracker } from 'knex-mock-client'

import { knexMockMsql } from './connections.mock.js'

export function getTracker() {
  return createTracker(knexMockMsql)
}
