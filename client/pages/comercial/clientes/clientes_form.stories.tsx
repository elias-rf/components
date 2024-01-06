import { ClienteForm } from '@/client/pages/comercial/clientes/clientes_form.js'
import { clienteStore } from '@/client/pages/comercial/clientes/components/clientes_store.js'
import { fetcherMock } from '@/utils/mocks/fetcher-mock.js'
import type { Meta, StoryObj } from '@storybook/react'

fetcherMock({
  'cliente/read': () => {
    return {
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
    }
  },
  'cliente/vendaMensalQuantidade': () => {
    return [
      { categoria: 'produto 1', '2020-01': 10 },
      { categoria: 'produto 2', '2020-02': 20 },
    ]
  },
  'cliente/vendaMensalValorMedio': () => {
    return [
      { categoria: 'produto 1', '2020-01': '10,10' },
      { categoria: 'produto 2', '2020-02': '20,20' },
    ]
  },
  'cliente/vendaMensalValor': () => {
    return [
      { categoria: 'produto 1', '2020-01': '1.000,10' },
      { categoria: 'produto 2', '2020-02': '2.000,20' },
    ]
  },
})

clienteStore.state.inicio = '2020-01-01'
clienteStore.state.fim = '2020-06-30'
clienteStore.state.selection = [['CdCliente', 100]]
clienteStore.fetchRecord()

const meta: Meta<typeof ClienteForm> = {
  component: ClienteForm,
}

export default meta
type Story = StoryObj<typeof ClienteForm>

export const Form: Story = {
  render: () => {
    return <ClienteForm store={clienteStore} />
  },
}
