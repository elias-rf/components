import { mockedFetch } from '@/mocks/mocked-fetch/mocked-fetch.js'

export const uid = (id = 0) => {
  return () => {
    return id++
  }
}

export function createRecord(fake: any, qtd: number = 1) {
  const records = []
  for (let i = 0; i < qtd; i++) {
    const rec = {} as any
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

export function fetcherMock(
  api:
    | {
        [method: string]: (arg: any) => any
      }
    | { [method: string]: any }
) {
  mockedFetch.add(async (request: any) => {
    const body = JSON.parse(request.options?.body) as {
      id: number
      method: string
      args: any
    }
    if (Object.hasOwn(api, body.method)) {
      const result = api[body.method](body.args)
      return { body: { id: body.id, result } }
    }
  })
}

fetcherMock.reset = mockedFetch.clear
fetcherMock.history = mockedFetch.history
