import { createTracker } from 'knex-mock-client'

import { knexMockMsql } from './connections.mock'

export function getTracker() {
  return createTracker(knexMockMsql)
}
