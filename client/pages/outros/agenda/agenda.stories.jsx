import { JsonView } from '../../../components_/json-view/json-view.jsx'
import { agendaTelefoneStore } from '../../../pages/outros/agenda/components/agenda.store.mjs'
import Agenda from './agenda.jsx'

const meta = {
  component: Agenda,
}

export default meta

agendaTelefoneStore.fetchList({ where: [], orderBy: [], select: ['*'] })

export const Default = {
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
