import { Table } from '@/client/components/tbl'
import { Button } from '@/client/components/ui/button'
import { formStatus } from '@/client/lib/form-status'
import { useMessageBox } from '@/client/lib/hooks/use-message-box'
import type {
  TAgendaTelefoneFields,
  TAgendaTelefoneKeys,
} from '@/controllers/agenda-telefone.controller'
import { TData, TFormStatus, TId, TOrderBy, TSelection, TWhere } from '@/types'
import { Divider } from '@mui/material'
import { agendaTelefoneColumns } from './agenda-telefone_columns'
import { AgendaTelefoneForm } from './agenda-telefone_form'

type AgendaTelefoneTableProps = {
  form?: any
  getId?: (row: TData<TAgendaTelefoneFields>) => TId<TAgendaTelefoneKeys>
  onCancel?: () => void
  onDel?: () => void
  onEdit?: () => void
  onNew?: () => void
  onOrderBy?: (orderBy: TOrderBy<TAgendaTelefoneFields>) => void
  onSave?: () => void
  onSelection?: (event: TSelection<TAgendaTelefoneKeys>) => void
  onWhere?: (where: TWhere<TAgendaTelefoneFields>) => void
  orderBy?: TOrderBy<TAgendaTelefoneFields>
  rows: TData<TAgendaTelefoneFields>[]
  selection?: TSelection<TAgendaTelefoneKeys>
  status?: TFormStatus
  where?: TWhere<TAgendaTelefoneFields>
}

function ButtonsSaveCancel({
  onSave,
  onCancel,
  status,
}: {
  onSave?: () => void
  onCancel?: () => void
  status: { saveDisabled: boolean; cancelDisabled: boolean }
}) {
  return (
    <>
      {onSave ? (
        <Button
          onClick={onSave}
          disabled={status.saveDisabled}
          size="sm"
          outline
        >
          SAVE
        </Button>
      ) : null}
      {onCancel ? (
        <Button
          onClick={onCancel}
          disabled={status.cancelDisabled}
          size="sm"
          outline
        >
          CANCEL
        </Button>
      ) : null}
    </>
  )
}

export function AgendaTelefoneTable({
  form,
  getId,
  rows: list,
  onCancel,
  onDel,
  onEdit,
  onNew,
  onOrderBy,
  onSave,
  onSelection,
  onWhere,
  orderBy,
  selection,
  status = 'none',
  where,
}: AgendaTelefoneTableProps) {
  const frmStatus = formStatus(status)

  const { MsgBox, confirm } = useMessageBox({
    title: 'Excluir',
    message: 'Confirma a exclusão do registro ?',
    option1: 'CONFIRMAR',
    option2: 'CANCELAR',
  })

  async function handleDel() {
    const response = await confirm(
      'Tem certeza que deseja apagar ' + form.getValues('name')
    )
    if (response === 'option1') {
      onDel && onDel()
    }
  }

  return (
    <>
      <div className="flex container flex-col space-y-2">
        <div className="flex container flex-row justify-between align-center">
          <p className="text-xl">Agenda de Ramais</p>
          <div className="flex flex-row space-x-2">
            {status === 'new' ? (
              <ButtonsSaveCancel
                onSave={onSave}
                onCancel={onCancel}
                status={frmStatus}
              />
            ) : (
              <Button
                onClick={onNew}
                disabled={frmStatus.createDisabled}
                size="sm"
                outline
              >
                NOVO
              </Button>
            )}
          </div>
        </div>
        {['new'].includes(status) ? (
          <div className={'py-1'}>
            <AgendaTelefoneForm
              form={form}
              disabled={frmStatus.formDisabled}
            />
            <Divider
              variant="middle"
              sx={{ pt: 2 }}
            />
          </div>
        ) : null}
        <Table
          rows={list ?? []}
          columns={agendaTelefoneColumns}
          getId={getId}
          selection={selection}
          where={where}
          orderBy={orderBy}
          onSelection={onSelection}
          onWhere={onWhere}
          onOrderBy={onOrderBy}
        >
          {() => (
            <div>
              <div className="flex flex-rows space-x-2 my-2">
                <Button
                  onClick={onEdit}
                  disabled={frmStatus.editDisabled}
                  size="sm"
                  outline
                >
                  EDITAR
                </Button>
                <Button
                  onClick={handleDel}
                  disabled={frmStatus.delDisabled}
                  size="sm"
                  outline
                >
                  EXCLUIR
                </Button>
              </div>
              <div>
                <AgendaTelefoneForm
                  form={form}
                  disabled={frmStatus.formDisabled}
                />
              </div>
              <div className="flex flex-rows justify-end align-center space-x-2 my-2">
                <ButtonsSaveCancel
                  onSave={onSave}
                  onCancel={onCancel}
                  status={frmStatus}
                />
              </div>
            </div>
          )}
        </Table>
        <MsgBox />
      </div>
    </>
  )
}
