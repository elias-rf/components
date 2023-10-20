import { Button } from '@/client/components/ui/button'
import { Title } from '@/client/components/ui/title'
import { agendaTelefoneStore } from '@/client/features/agenda-telefone/agenda-telefone_store'

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
