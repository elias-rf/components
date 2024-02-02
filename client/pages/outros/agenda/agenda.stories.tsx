import { JsonView } from '@/client/components/json-view/json-view.js'
import { agendaTelefoneStore } from '@/client/pages/outros/agenda/components/agenda.store.js'
import type { Meta, StoryObj } from '@storybook/react'
import Agenda from './agenda.js'

const meta: Meta<typeof Agenda> = {
  component: Agenda,
}

export default meta
type Story = StoryObj<typeof Agenda>

agendaTelefoneStore.fetchList({ where: [], orderBy: [], select: ['*'] })

export const Default: Story = {
  render: () => {
    const state = agendaTelefoneStore.state((state) => state)
    return (
      <>
        <Agenda />
        <JsonView data={state} />
      </>
    )
  },
}
