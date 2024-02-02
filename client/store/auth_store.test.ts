import { authStore } from '@/client/store/auth_store.js'
import { handlers } from '@/utils/mocks/core-msw/handlers.js'
import { setupServer } from 'msw/node'
import { afterAll, afterEach, beforeAll, describe, expect, test } from 'vitest'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
const user = {
  usuario_id: 1,
  nome_login: 'fulano',
  nome: 'FULANO',
  group_ids: '42,20,0',
  token,
}

const server = setupServer(...handlers)

describe('authStore', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  // mockedFetch.reset()
  // mockedFetch.addRpc(async (rpc) => {
  //   console.log(`🚀 ~ mockedFetch.addRpc ~ rpc_:`, rpc)
  // })
  // mockedFetch.addRpc(async (rpc) => {
  //   if (rpc.method === 'usuario_login') {
  //     if (rpc.params.user === 'cicrano') {
  //       return {
  //         ...user,
  //         nome_login: 'cicrano',
  //         group_ids: '42,20',
  //       }
  //     }
  //     return user
  //   }
  // })
  // mockedFetch.addRpc(async (rpc) => {
  //   if (rpc.method === 'groupSubject_list') {
  //     return [{ idSubject: 'teste1' }, { idSubject: 'teste2' }]
  //   }
  // })
  // mockedFetch.addRpc(async (rpc) => {
  //   if (rpc.method === 'usuario_me') {
  //     return user
  //   }
  // })

  test('initial value', () => {
    expect(authStore.state.getState().token).toEqual('')
    expect(authStore.state.getState().user).toEqual({})
  })

  test('me deve retornar o usuario', async () => {
    const userMe = await authStore.me()
    expect(userMe).toEqual(user)
  })

  test('login deve setar token, user e permissions', async () => {
    await authStore.login({ user: 'fulano', password: '123' })
    // await authStore.fetchPermissions()

    expect(authStore.state.getState().user).toEqual(user)
    expect(authStore.state.getState().token).toEqual(token)
    // expect(authStore.state.getState().permissions).toEqual({
    //   teste1: true,
    //   teste2: true,
    // })
  })

  test('logout deve resetar token, user e permissions', async () => {
    await authStore.logout()
    expect(authStore.state.getState().user).toEqual({})
    expect(authStore.state.getState().token).toEqual('')
    expect(authStore.state.getState().permissions).toEqual({})
  })

  test('fetchPermissions deve retornar as permissoes', async () => {
    await authStore.login({ user: 'fulano', password: '123' })
    const permissions = await authStore.fetchPermissions()
    expect(permissions).toEqual({
      teste1: true,
      teste2: true,
    })
    expect(authStore.state.getState().permissions).toEqual({
      teste1: true,
      teste2: true,
    })
  })

  test('canlist for administrator', async () => {
    await authStore.login({ user: 'fulano', password: '123' })
    expect(authStore.state.getState().token).toBe(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    )
    expect(authStore.canList({ teste1: '', teste2: '', teste3: '' })).toEqual({
      teste1: true,
      teste2: true,
      teste3: true,
    })
  })

  test('canlist for others', async () => {
    await authStore.login({ user: 'cicrano', password: '123' })
    expect(authStore.state.getState().token).toBe(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    )
    expect(authStore.canList({ teste1: '', teste2: '', teste3: '' })).toEqual({
      teste1: true,
      teste2: true,
      teste3: false,
    })
  })
})
