import { fetcherMock, tracker } from '@/mocks/fetcher-mock'

import { authStore } from '@/client/store/auth_store'
import { describe, expect, test } from 'vitest'

describe('authStore', () => {
  test('initial', () => {
    expect(authStore.getState().token).toBe('')
  })
  test('login', async () => {
    tracker.reset()
    fetcherMock({
      'usuario/login': () => {
        return {
          usuario_id: 1,
          nome_login: 'fulano',
          nome: 'FULANO',
          group_ids: '42,20,0',
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
        }
      },
      'groupSubject/list': () => {
        return [{ idSubject: 'teste' }]
      },
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
    tracker.reset()
    fetcherMock({
      'usuario/login': () => {
        return {
          usuario_id: 1,
          nome_login: 'fulano',
          nome: 'FULANO',
          group_ids: '42,20,0',
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
        }
      },
      'groupSubject/list': () => {
        return [{ idSubject: 'teste1' }, { idSubject: 'teste2' }]
      },
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
    tracker.reset()
    fetcherMock({
      'usuario/login': () => {
        return {
          usuario_id: 1,
          nome_login: 'fulano',
          nome: 'FULANO',
          group_ids: '42,20',
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
        }
      },
      'groupSubject/list': () => {
        return [
          { idSubject: 'teste1' },
          { idSubject: 'teste2' },
          { idSubject: 'teste2' },
        ]
      },
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
