import { createRecord, uid } from '@/mocks/fetcher-mock.js'
import { fakerPT_BR as faker } from '@faker-js/faker'

faker.seed(1)

export default createRecord(
  {
    id: uid(100),
    name: faker.person.fullName,
    department: faker.commerce.department,
    email: faker.internet.email,
  },
  100
)
