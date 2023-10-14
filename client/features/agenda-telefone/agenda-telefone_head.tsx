import { Button } from '@/client/components/ui/button'
import { Title } from '@/client/components/ui/title'
import { agendaTelefoneStore } from '@/client/features/agenda-telefone/agenda-telefone_store'

export function AgendaTelefoneHead() {
  const formButtonStatus = agendaTelefoneStore.use.formButtonStatus()()
  const handleNew = agendaTelefoneStore.use.handleNew()

  return (
    <div className="flex flex-row justify-between my-1 align-center">
      <Title>Agenda de Ramais</Title>
      <div className="flex flex-row space-x-2">
        <Button
          onClick={handleNew}
          disabled={formButtonStatus.createDisabled}
          size="sm"
          outline
        >
          NOVO
        </Button>
      </div>
    </div>
  )
}
