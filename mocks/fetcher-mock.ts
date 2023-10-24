import fetchMock from 'fetch-mock/esm/client'

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

export const tracker = fetchMock

export function fetcherMock(
  api:
    | {
        [method: string]: (arg: any) => any
      }
    | { [method: string]: any }
) {
  fetchMock.mock(
    (url, options: any) => {
      const body = JSON.parse(options.body) as {
        id: number
        method: string
        args: any
      }
      if (Object.hasOwn(api, body.method)) {
        console.log(body.method, 'ok')
        return true
      }
      console.log(
        'fetch não encontrado:',
        JSON.stringify(
          {
            method: body.method,
            args: body.args,
          },
          null,
          2
        )
      )
      return false
    },
    (_url: string, options: any) => {
      const body = JSON.parse(options.body) as {
        id: number
        method: string
        args: any
      }
      const result = api[body.method](body.args)
      return {
        id: body.id,
        result,
      }
    }
  )
}
