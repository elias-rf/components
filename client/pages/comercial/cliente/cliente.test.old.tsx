import { authStore } from '@/client/store/auth_store.js'
import { handlers } from '@/utils/mocks/core-msw/handlers.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { setupServer } from 'msw/node'
import { describe, expect, test } from 'vitest'
import Clientes from './cliente.js'

describe('Cliente', () => {
  const server = setupServer(...handlers)
  server.listen()
  const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 5000 } },
  })

  test('deve montar tela se não permitido', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Clientes />
      </QueryClientProvider>
    )
    // saveDebug('./lixo.html')
    expect(screen.getByText('Voltar ao início')).toBeDefined()
  })
  test('deve montar tela se permitido', () => {
    authStore.state.getState().currentUser.grupoIds = '0'
    render(
      <QueryClientProvider client={queryClient}>
        <Clientes />
      </QueryClientProvider>
    )
    expect(screen.getByText('Histórico de Clientes')).toBeDefined()
  })
})
