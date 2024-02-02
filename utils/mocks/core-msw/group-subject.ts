import { withRpcMethod } from '@/utils/mocks/core-msw/with-rpc-method.js'
import { isIdEqual } from '@/utils/query/is-id-equal.js'
import { http, HttpResponse } from 'msw'
import { query } from './util.js'

const url = 'http://localhost:3333/api/rpc2'

let data = [
  { idSubject: 'teste1', idGroup: '1' },
  { idSubject: 'teste2', idGroup: '2' },
]

export const groupSubjectHandlers = [
  http.post(
    url,
    withRpcMethod(
      { method: 'groupSubject_listPermissions' },
      async ({ request }) => {
        const body: any = await request.json()
        const result = data.map((item: any) => ({
          [item.idSubject]: true,
        }))
        const response = {
          id: body.id,
          result,
        }
        return HttpResponse.json(response)
      }
    )
  ),

  http.post(
    url,
    withRpcMethod({ method: 'groupSubject_list' }, async ({ request }) => {
      const body: any = await request.json()
      const result = query(data, body.params)
      const response = {
        id: body.id,
        result,
      }
      return HttpResponse.json(response)
    })
  ),

  http.post(
    url,
    withRpcMethod({ method: 'groupSubject_read' }, async ({ request }) => {
      const body: any = await request.json()
      const result = query(data, body.params)[0] || {}

      const response = {
        id: body.id,
        result,
      }
      return HttpResponse.json(response)
    })
  ),

  http.post(
    url,
    withRpcMethod({ method: 'groupSubject_update' }, async ({ request }) => {
      const body: any = await request.json()
      const recordIndex = data.findIndex((item) =>
        isIdEqual(
          [
            ['idGroup', item.idGroup],
            ['idSubject', item.idSubject],
          ],
          body.params.where
        )
      )

      data[recordIndex] = {
        ...data[recordIndex],
        ...body.params.data,
      }

      const response = {
        id: body.id,
        result: data[recordIndex],
      }
      return HttpResponse.json(response)
    })
  ),

  http.post(
    url,
    withRpcMethod({ method: 'groupSubject_del' }, async ({ request }) => {
      const body: any = await request.json()
      data = data.filter(
        (item) =>
          !isIdEqual(
            [
              ['idGroup', item.idGroup],
              ['idSubject', item.idSubject],
            ],
            body.params.where
          )
      )

      const response = {
        id: body.id,
        result: 1,
      }
      return HttpResponse.json(response)
    })
  ),

  http.post(
    url,
    withRpcMethod({ method: 'groupSubject_create' }, async ({ request }) => {
      const body: any = await request.json()
      data.push(body.params.data)

      const response = {
        id: body.id,
        result: body.params.data,
      }
      return HttpResponse.json(response)
    })
  ),
]
