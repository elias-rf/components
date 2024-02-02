import { isMatch } from 'lodash-es'

const body = {
  method: 'me',
  id: 1,
  jsonrpc: '2.0',
  params: {
    user: 'cicrano',
    address: {
      city: 'São Paulo',
      state: 'SP',
    },
  },
}

console.log(isMatch(body, { method: 'me' }))
console.log(isMatch(body, { method: 'me', params: { user: 'cicrano' } }))
console.log(
  isMatch(body, {
    method: 'me',
    params: { address: { state: 'SP' } },
  })
)
console.log(
  isMatch(body, {
    method: 'me',
    params: { address: { city: 'São Paulo', state: 'MG' } },
  })
)
