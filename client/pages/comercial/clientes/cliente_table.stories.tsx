import '@/mocks/fetcher-mock'

import { Page } from '@/client/components/page/page.js'
import { StoreViewer } from '@/client/components/ui-old/store-viewer.js'
import { clienteStore } from '@/client/pages/comercial/clientes/cliente_store.js'
import { ClienteTable } from '@/client/pages/comercial/clientes/cliente_table.js'
import { fetcherMock } from '@/mocks/fetcher-mock.js'
import type { Meta, StoryObj } from '@storybook/react'

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

const meta: Meta<typeof ClienteTable> = {
  component: ClienteTable,
}

export default meta
type Story = StoryObj<typeof ClienteTable>

export const Default: Story = {
  render: () => {
    return (
      <div className="h-[800px] w-full">
        <Page>
          <ClienteTable
            store={clienteStore}
            height={'300px'}
          />
          <StoreViewer
            store={clienteStore}
            properties={['list', 'orderBy', 'selection', 'where', 'record']}
          />
        </Page>
      </div>
    )
  },
}
