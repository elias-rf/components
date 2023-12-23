import { Table } from '@/client/components/table/table.js'
import { Button } from '@/client/components/ui/button/button.js'
import { Title } from '@/client/components/ui/title.js'
import { formButtonStatus } from '@/client/lib/form-button-status.js'
import { useMessageBox } from '@/client/lib/hooks/use-message-box.js'
import {
  TGroupSubjectFields,
  TGroupSubjectKeys,
} from '@/controllers/group-subject_controller.js'
import {
  TData,
  TFormStatus,
  TId,
  TOrderBy,
  TSelection,
  TWhere,
} from '@/types/index.js'
import { groupSubjectColumns } from './group-subject_columns.js'
import { GroupSubjectForm } from './group-subject_form.js'

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
          [S]AVE
        </Button>
      ) : null}
      {onCancel ? (
        <Button
          onClick={onCancel}
          disabled={status.cancelDisabled}
          size="sm"
          outline
        >
          [C]ANCEL
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
        <div className="align-center container flex flex-row justify-between">
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
                [N]OVO
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
              <div className="flex-rows my-2 flex space-x-2">
                <Button
                  onClick={onEdit}
                  disabled={frmStatus.editDisabled}
                  size="sm"
                  outline
                >
                  [E]DITAR
                </Button>
                <Button
                  onClick={handleDel}
                  disabled={frmStatus.delDisabled}
                  size="sm"
                  outline
                >
                  E[X]CLUIR
                </Button>
              </div>
              <div>
                <GroupSubjectForm
                  form={form}
                  disabled={frmStatus.formDisabled}
                />
              </div>
              <div className="flex-rows align-center my-2 flex justify-end space-x-2">
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
