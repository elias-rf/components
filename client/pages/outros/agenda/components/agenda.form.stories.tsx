import { JsonView } from '@/client/components/json-view/json-view.js'
import { AgendaTelefoneForm } from '@/client/pages/outros/agenda/components/agenda.form.js'
import { agendaTelefoneStore } from '@/client/pages/outros/agenda/components/agenda.store.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof AgendaTelefoneForm> = {
  component: AgendaTelefoneForm,
}

export default meta
type Story = StoryObj<typeof AgendaTelefoneForm>

export const Form: Story = {
  render: () => {
    const selection = agendaTelefoneStore.state.use.selection()
    const status = agendaTelefoneStore.state.use.status()

    return (
      <>
        <AgendaTelefoneForm store={agendaTelefoneStore} />
        <JsonView
          data={{
            selection: selection,
            statue: status,
          }}
        />
      </>
    )
  },
}
