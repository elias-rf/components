import { JsonView } from '../../../../components/json-view/json-view.jsx'
import { AgendaTelefoneForm } from '../../../../pages/outros/agenda/components/agenda.form.jsx'
import { agendaTelefoneStore } from '../../../../pages/outros/agenda/components/agenda.store.mjs'

const meta = {
  component: AgendaTelefoneForm,
}

export default meta

export const Form = {
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
