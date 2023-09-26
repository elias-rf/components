import { AgendaTelefoneTable } from '@/client/features/agenda-telefone/agenda-telefone_table'
import { whereType } from '@/client/lib/where-type'
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
export function AgendaTelefone({ onState }: any) {
  // Form
  const form = useForm({ defaultValues: dataClear, mode: 'onTouched' })
  const [status, setStatus] = React.useState<TFormStatus>('view')

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

  // Read Data
  React.useEffect(() => {
    async function getData() {
      const data = await rpc.agendaTelefone.read({ id: selection })
      form.reset(data)
    }
    if (selection.length > 0) getData()
  }, [form, selection])

  React.useEffect(() => {
    getList(where, orderBy)
  }, [where, orderBy])

  async function getList(
    where: TWhere<TAgendaTelefoneFields>,
    orderBy: TOrderBy<TAgendaTelefoneFields>
  ) {
    const data = await rpc.agendaTelefone.list({ where, orderBy })
    setList(data)
  }

  function getId(row: TData<TAgendaTelefoneFields>): TId<'id'> {
    return [['id', row.id]]
  }

  function handleSelection(selected: TSelection<TAgendaTelefoneKeys>) {
    if (deepEqual(selected, selection)) return setSelection([])
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

  React.useEffect(() => {
    onState && onState({ where, selection, orderBy, status })
  }, [onState, status, selection, where, orderBy])

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
    setStatus('view')
  }

  function handleEdit() {
    setStatus('edit')
  }

  return (
    <AgendaTelefoneTable
      form={form}
      getId={getId}
      onCancel={handleCancel}
      onDel={handleDel}
      onEdit={handleEdit}
      onNew={handleNew}
      onOrderBy={handleOrderBy}
      onSave={handleSave}
      onSelection={handleSelection}
      onWhere={handleWhere}
      orderBy={orderBy}
      rows={list}
      selection={selection}
      status={status}
      where={where}
    />
  )
}
