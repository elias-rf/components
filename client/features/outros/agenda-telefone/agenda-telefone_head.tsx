import { Button } from '@/client/components/ui/button.js'
import { Title } from '@/client/components/ui/title.js'
import { agendaTelefoneStore } from '@/client/features/outros/agenda-telefone/agenda-telefone_store.js'

export function AgendaTelefoneHead() {
  const onNew = agendaTelefoneStore.use.onNew()

  return (
    <div className="flex flex-row justify-between my-1 align-center">
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
