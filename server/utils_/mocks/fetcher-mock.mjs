import { mockedFetch } from '../../../utils/mocks/mocked-fetch/mocked-fetch.mjs'

export const uid = (id = 0) => {
  return () => {
    return id++
  }
}

export function createRecord(fake, qtd = 1) {
  const records = []
  for (let i = 0; i < qtd; i++) {
    const rec = {}
    for (const fld in fake) {
      if (typeof fake[fld] === 'function') {
        rec[fld] = fake[fld](i)
      } else {
        rec[fld] = fake[fld]
      }
    }
    records.push(rec)
  }
  return records
}

export function fetcherMock(api) {
  mockedFetch.add(async (request) => {
    const body = JSON.parse(request.options?.body)
    if (Object.hasOwn(api, body.method)) {
      const result = api[body.method](body.args)
      return { body: { id: body.id, result } }
    }
  })
}

fetcherMock.reset = mockedFetch.reset
fetcherMock.history = mockedFetch.history
