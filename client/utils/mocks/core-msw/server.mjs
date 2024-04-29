import { setupServer } from 'msw/node'
import { handlers } from './handlers.mjs'

export const server = setupServer(...handlers)

server.events.on('request:start', async ({ request }) => {
  const payload = await request.clone().json()
  console.log(
    'Request',
    payload.id,
    '\n',
    payload.method,
    JSON.stringify(payload.params)
  )
})

server.events.on(
  'response:mocked',
  async ({ request, requestId, response }) => {
    const payload = await response.clone().json()
    console.log('Response', payload.id, '\n', payload.result)
  }
)
