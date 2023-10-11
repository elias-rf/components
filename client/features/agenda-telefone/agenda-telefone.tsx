import { Table } from '@/client/components/table'
import { Button } from '@/client/components/ui/button'
import { Title } from '@/client/components/ui/title'
import { agendaTelefoneColumns } from '@/client/features/agenda-telefone/components/agenda-telefone_columns'
import { AgendaTelefoneForm } from '@/client/features/agenda-telefone/components/agenda-telefone_form'
import { formStatus } from '@/client/lib/form-status'
import { whereType } from '@/client/lib/where-type'
import { usePageSize } from '@/client/store/page-size'
import {
  TAgendaTelefoneFields,
  TAgendaTelefoneKeys,
} from '@/controllers/agenda-telefone.controller'
import { rpc } from '@/rpc/rpc-client'
import type {
  TData,
  TFormStatus,
  TId,
  TOrderBy,
  TSelection,
  TWhere,
} from '@/types'
import { deepEqual } from '@/utils/object/deep-equal'
import React from 'react'
import { useForm } from 'react-hook-form'

const dataClear = {
  id: '',
  name: '',
  email: '',
  department: '',
}

/**
 * Agenda de Ramais
 */
export function AgendaTelefone() {
  const pageHeight = usePageSize((state) => state.height * 0.7)
  // Form
  const form = useForm({ defaultValues: dataClear, mode: 'onTouched' })
  const [status, setStatus] = React.useState<TFormStatus>('none')

  // Filters
  const [selection, setSelection] = React.useState<
    TSelection<TAgendaTelefoneKeys>
  >([])
  const [where, setWhere] = React.useState<TWhere<TAgendaTelefoneFields>>([])
  const [orderBy, setOrderBy] = React.useState<TOrderBy<TAgendaTelefoneFields>>(
    []
  )
  // Data
  const [list, setList] = React.useState<TData<TAgendaTelefoneFields>[]>([])

  const frmStatus = formStatus(status)

  // Read Data
  React.useEffect(() => {
    async function getData() {
      const data = await rpc.agendaTelefone.read({ id: selection })
      form.reset(data)
    }
    if (selection.length > 0) getData()
  }, [form, selection])

  async function getList(
    where: TWhere<TAgendaTelefoneFields>,
    orderBy: TOrderBy<TAgendaTelefoneFields>
  ) {
    const data = await rpc.agendaTelefone.list({ where, orderBy })
    setList(data)
  }

  React.useEffect(() => {
    getList(where, orderBy)
  }, [where, orderBy])

  function getId(row: TData<TAgendaTelefoneFields>): TId<TAgendaTelefoneKeys> {
    return [['id', row.id]]
  }

  function handleSelection(selected: TSelection<TAgendaTelefoneKeys>) {
    if (deepEqual(selected, selection)) {
      setStatus('none')
      return setSelection([])
    }
    setSelection(selected)
    setStatus('view')
  }

  function handleWhere(where: TWhere<TAgendaTelefoneFields>) {
    where = whereType(where, 'id', 'int')
    setWhere(where)
  }

  function handleOrderBy(orderBy: TOrderBy<TAgendaTelefoneFields>) {
    setOrderBy(orderBy)
  }

  function handleNew() {
    setStatus('new')
    form.reset(dataClear)
    setSelection([])
  }

  async function handleDel() {
    await rpc.agendaTelefone.del({ id: selection })
    await getList(where, orderBy)
    setStatus('view')
    setSelection([])
  }

  async function handleSave() {
    if (status === 'edit') {
      await rpc.agendaTelefone.update({
        data: form.getValues(),
        id: selection,
      })
    }
    if (status === 'new') {
      await rpc.agendaTelefone.create({ data: form.getValues() })
    }
    await getList(where, orderBy)
    setStatus('view')
  }

  function handleCancel() {
    if (status === 'new') {
      setStatus('none')
      return
    }

    setStatus('view')
  }

  function handleEdit() {
    setStatus('edit')
  }

  return (
    <div data-name="AgendaTelefone">
      <div className="flex flex-row justify-between align-center">
        <Title>Agenda de Ramais</Title>
        <div className="flex flex-row space-x-2">
          <Button
            onClick={handleNew}
            disabled={frmStatus.createDisabled}
            size="sm"
            outline
          >
            NOVO
          </Button>
        </div>
      </div>
      <Table
        rows={list ?? []}
        columns={agendaTelefoneColumns}
        getId={getId}
        selection={selection}
        where={where}
        orderBy={orderBy}
        onSelection={handleSelection}
        onWhere={handleWhere}
        onOrderBy={handleOrderBy}
        height={`${pageHeight}px`}
      />

      {status !== 'none' ? (
        <div className="p-1 mb-2 border border-gray-300">
          <AgendaTelefoneForm
            form={form}
            onCancel={handleCancel}
            onDel={handleDel}
            onEdit={handleEdit}
            onSave={handleSave}
            status={status}
          />
        </div>
      ) : null}
    </div>
  )
}
