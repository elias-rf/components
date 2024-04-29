import { JsonView } from '../../../../components_/json-view/json-view.jsx'
import { agendaTelefoneStore } from '../../../../pages/outros/agenda/components/agenda.store.mjs'
import { AgendaTelefoneTable } from '../../../../pages/outros/agenda/components/agenda.table.jsx'

const meta = {
  component: AgendaTelefoneTable,
}

export default meta

export const Default = {
  render: () => {
    const where = agendaTelefoneStore.state.use.where()
    const orderBy = agendaTelefoneStore.state.use.orderBy()
    const selection = agendaTelefoneStore.state.use.selection()
    const status = agendaTelefoneStore.state.use.status()

    return (
      <div className="h-[800px] w-full">
        <>
          <AgendaTelefoneTable store={agendaTelefoneStore} />
          <JsonView
            data={{
              where: where,
              orderBy: orderBy,
              selection: selection,
              status: status,
            }}
          />
        </>
      </div>
    )
  },
}
