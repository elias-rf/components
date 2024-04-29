import { afterAll, afterEach, beforeAll, describe, expect, test } from 'vitest'
import { server } from '../utils/mocks/core-msw/server.mjs'
import { authStore } from './auth_store.mjs'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
const user = {
  id: 1,
  usuario: 'fulano',
  nome: 'FULANO',
  grupoIds: '42,20,0',
  token,
}

describe('authStore', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('initial value', () => {
    expect(authStore.state.getState().token).toEqual('')
    expect(authStore.state.getState().currentUser).toEqual({})
  })

  test('me deve retornar o usuario', async () => {
    const userMe = await authStore.me()
    expect(userMe).toEqual(user)
  })

  test('login deve setar token, user', async () => {
    await authStore.login('fulano', '123')
    expect(authStore.state.getState().currentUser).toEqual(user)
    expect(authStore.state.getState().token).toEqual(token)
  })

  test('logout deve resetar token, user', async () => {
    await authStore.logout()
    expect(authStore.state.getState().currentUser).toEqual({})
    expect(authStore.state.getState().token).toEqual('')
  })

  test('fetchPermissions deve retornar as permissoes', async () => {
    const permissions = await authStore.fetchPermissions('20')
    expect(permissions).toEqual({ prm2: true })
  })

  test('canlist for administrator', async () => {
    expect(
      await authStore.canList('0', ['teste1', 'teste2', 'teste3'])
    ).toEqual({
      teste1: true,
      teste2: true,
      teste3: true,
    })
  })

  test('canlist for users', async () => {
    expect(await authStore.canList('20', ['prm1', 'teste2', 'teste3'])).toEqual(
      {
        prm1: false,
        teste2: false,
        teste3: false,
      }
    )
  })
})
