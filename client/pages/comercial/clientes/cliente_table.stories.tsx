import '@/mocks/fetcher-mock'

import { Page } from '@/client/components/page/page.js'
import { StoreViewer } from '@/client/components/ui/store-viewer.js'
import { clienteStore } from '@/client/pages/comercial/clientes/cliente_store.js'
import { ClienteTable } from '@/client/pages/comercial/clientes/cliente_table.js'
import { authStore } from '@/client/store/auth_store.js'
import { fetcherMock } from '@/mocks/fetcher-mock.js'
import { Story } from '@ladle/react'

fetcherMock({
  'cliente/list': () => {
    return [
      {
        CdCliente: 100,
        RzSocial: 'Fulano de tal',
        Cidade: 'São Paulo',
        Uf: 'SP',
        CGC: '10.100.100/1001-01',
        CdVendedor: '10',
        FgAtivo: 'S',
        Email: 'NzBzv@example.com',
        NumIdentidade: '123456789',
        DtCadastro: '2020-01-01',
      },
    ]
  },
})

export default {
  title: 'features/cliente/cliente Table',
}

export const Default: Story = () => {
  return (
    <div className="h-[800px] w-full">
      <Page>
        <ClienteTable
          store={clienteStore}
          auth={authStore}
        />
        <StoreViewer
          store={clienteStore}
          properties={['list', 'orderBy', 'selection', 'where', 'record']}
        />
      </Page>
    </div>
  )
}