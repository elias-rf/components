import { fetcherMock } from '@/mocks/fetcher-mock.js'
import { mockedFetch } from '@/mocks/mocked-fetch/mocked-fetch.js'

import { authStore } from '@/client/store/auth_store.js'
import { describe, expect, test } from 'vitest'

describe('authStore', () => {
  test('initial', () => {
    expect(authStore.getState().token).toBe('')
  })
  test('login', async () => {
    mockedFetch.clear()
    mockedFetch.add(async (request: any) => {
      const body = JSON.parse(request.options?.body)
      switch (body.method) {
        case 'usuario_login':
          return {
            body: {
              id: body.id,
              result: {
                usuario_id: 1,
                nome_login: 'fulano',
                nome: 'FULANO',
                group_ids: '42,20,0',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
              },
            },
          }
        case 'groupSubject_list':
          return {
            body: {
              id: body.id,
              result: [{ idSubject: 'teste' }],
            },
          }
        default:
          return {
            body: {
              result: [],
            },
          }
      }
    })

    await authStore.getState().login({ user: 'fulano', password: '123' })
    expect(authStore.getState().token).toBe(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    )
    expect(authStore.getState().permissions).toEqual({
      teste: true,
    })
  })

  test('can for administrator', async () => {
    mockedFetch.clear()
    mockedFetch.add(async (request: any) => {
      const body = JSON.parse(request.options?.body)
      switch (body.method) {
        case 'usuario_login':
          return {
            body: {
              id: body.id,
              result: {
                usuario_id: 1,
                nome_login: 'fulano',
                nome: 'FULANO',
                group_ids: '42,20,0',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
              },
            },
          }
        case 'groupSubject_list':
          return {
            body: {
              id: body.id,
              result: [{ idSubject: 'teste1' }, { idSubject: 'teste2' }],
            },
          }
        default:
          return {
            body: {
              result: [],
            },
          }
      }
    })

    await authStore.getState().login({ user: 'fulano', password: '123' })
    expect(authStore.getState().token).toBe(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    )
    expect(
      authStore.getState().canList({ teste1: '', teste2: '', test3: '' })
    ).toEqual({ teste1: true, teste2: true, test3: true })
  })
  test('can for others', async () => {
    mockedFetch.clear()
    mockedFetch.add(async (request: any) => {
      const body = JSON.parse(request.options?.body)
      switch (body.method) {
        case 'usuario_login':
          return {
            body: {
              id: body.id,
              result: {
                usuario_id: 1,
                nome_login: 'fulano',
                nome: 'FULANO',
                group_ids: '42,20',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
              },
            },
          }
        case 'groupSubject_list':
          return {
            body: {
              id: body.id,
              result: [
                { idSubject: 'teste1' },
                { idSubject: 'teste2' },
                { idSubject: 'teste2' },
              ],
            },
          }
        default:
          return {
            body: {
              result: [],
            },
          }
      }
    })

    await authStore.getState().login({ user: 'fulano', password: '123' })
    expect(authStore.getState().token).toBe(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    )
    expect(
      authStore.getState().canList({ teste1: '', teste2: '', test3: '' })
    ).toEqual({ teste1: true, teste2: true, test3: false })
  })
})
