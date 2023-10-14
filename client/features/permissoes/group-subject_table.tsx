import { Table } from '@/client/components/table'
import { Button } from '@/client/components/ui/button'
import { Title } from '@/client/components/ui/title'
import { formButtonStatus } from '@/client/lib/form-button-status'
import { useMessageBox } from '@/client/lib/hooks/use-message-box'
import {
  TGroupSubjectFields,
  TGroupSubjectKeys,
} from '@/controllers/group-subject.controller'
import { TData, TFormStatus, TId, TOrderBy, TSelection, TWhere } from '@/types'
import { groupSubjectColumns } from './group-subject_columns'
import { GroupSubjectForm } from './group-subject_form'

type GroupSubjectTableProps = {
  form?: any
  getId?: (row: TData<TGroupSubjectFields>) => TId<TGroupSubjectKeys>
  onCancel?: () => void
  onDel?: () => void
  onEdit?: () => void
  onNew?: () => void
  onOrderBy?: (orderBy: TOrderBy<TGroupSubjectFields>) => void
  onSave?: () => void
  onSelection?: (event: TSelection<TGroupSubjectKeys>) => void
  onWhere?: (where: TWhere<TGroupSubjectFields>) => void
  orderBy?: TOrderBy<TGroupSubjectFields>
  rows: TData<TGroupSubjectFields>[]
  selection?: TSelection<TGroupSubjectKeys>
  status?: TFormStatus
  where?: TWhere<TGroupSubjectFields>
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

export function GroupSubjectTable({
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
}: GroupSubjectTableProps) {
  const frmStatus = formButtonStatus(status)

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
      <div className="flex flex-col space-y-2">
        <div className="container flex flex-row justify-between align-center">
          <Title>Permissões</Title>
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
            <GroupSubjectForm
              form={form}
              disabled={frmStatus.formDisabled}
            />
          </div>
        ) : null}
        <Table
          rows={list ?? []}
          columns={groupSubjectColumns}
          getId={getId}
          selection={selection}
          where={where}
          orderBy={orderBy}
          onSelection={onSelection}
          onWhere={onWhere}
          onOrderBy={onOrderBy}
        >
          {() => (
            <div className="border-b-2 border-black dark:border-white">
              <div className="flex my-2 space-x-2 flex-rows">
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
                <GroupSubjectForm
                  form={form}
                  disabled={frmStatus.formDisabled}
                />
              </div>
              <div className="flex justify-end my-2 space-x-2 flex-rows align-center">
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
