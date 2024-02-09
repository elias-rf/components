import { JsonView } from '@/client/components/json-view/json-view.js'
import { agendaTelefoneStore } from '@/client/pages/outros/agenda/components/agenda.store.js'
import { AgendaTelefoneTable } from '@/client/pages/outros/agenda/components/agenda.table.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof AgendaTelefoneTable> = {
  component: AgendaTelefoneTable,
}

export default meta
type Story = StoryObj<typeof AgendaTelefoneTable>

export const Default: Story = {
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
