import { JsonView } from '@/client/components/json-view/json-view.jsx'
import { Page } from '@/client/components/page/page.jsx'
import { clienteStore } from '@/client/pages/comercial/cliente/components/cliente.store.mjs'
import { ClienteTable } from '@/client/pages/comercial/cliente/components/cliente.table.jsx'

const meta = {
  component: ClienteTable,
}

export default meta

clienteStore.setOrderBy([['id', 'desc']])

export const Table = {
  render: () => {
    const state = clienteStore.state((state) => state)
    return (
      <div className="h-[800px] w-full">
        <Page>
          <ClienteTable store={clienteStore} />
          <JsonView data={state} />
        </Page>
      </div>
    )
  },
}
