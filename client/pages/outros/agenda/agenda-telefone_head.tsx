import { Button } from '@/client/components/ui/button.js'
import { Title } from '@/client/components/ui/title.js'
import { agendaTelefoneStore } from '@/client/pages/outros/agenda/agenda-telefone_store.js'

export function AgendaTelefoneHead() {
  const onNew = agendaTelefoneStore.use.onNew()

  return (
    <div className="align-center my-1 flex flex-row justify-between">
      <Title>Agenda de Ramais</Title>
      <div className="flex flex-row space-x-2">
        <Button
          onClick={onNew}
          disabled={false}
          size="sm"
          outline
        >
          [N]OVO
        </Button>
      </div>
    </div>
  )
}
