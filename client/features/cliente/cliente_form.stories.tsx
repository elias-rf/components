import { ClienteForm } from '@/client/features/cliente/cliente_form'
import { clienteStore } from '@/client/features/cliente/cliente_store'
import { fetcherMock } from '@/mocks/fetcher-mock'
import type { Story } from '@ladle/react'

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

clienteStore.setState(() => ({
  inicio: '2020-01-01',
  fim: '2020-06-30',
  selection: [['CdCliente', 100]],
}))
clienteStore.getState().fetchRecord()

export default {
  title: 'features/cliente/cliente-form',
}

export const Form: Story = () => {
  return <ClienteForm />
}
