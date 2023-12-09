import { GroupSubjectTable } from '@/client/features/sistema/permissoes/group-subject_table.js'
import { useForm } from '@/client/lib/hooks/use-form.js'
import {
  TGroupSubjectFields,
  TGroupSubjectKeys,
} from '@/controllers/group-subject_controller.js'
import { rpc } from '@/rpc/rpc-client.js'
import type {
  TData,
  TFormStatus,
  TId,
  TOrderBy,
  TSelection,
  TWhere,
} from '@/types/index.js'
import { deepEqual } from '@/utils/object/deep-equal.js'
import React from 'react'

export type TGroupSubjectList = any

const dataClear = {
  idGroup: '',
  idSubject: '',
}

/**
 * Componente para manipular Agenda de Ramais
 *
 * @returns {*} componente react
 */
export function GroupSubject() {
  // Form
  const form = useForm({ value: dataClear })
  const [status, setStatus] = React.useState<TFormStatus>('view')
  // List
  const [selection, setSelection] = React.useState<
    TSelection<TGroupSubjectKeys>
  >([])
  const [where, setWhere] = React.useState<TWhere<TGroupSubjectFields>>([])
  const [orderBy, setOrderBy] = React.useState<TOrderBy<TGroupSubjectFields>>(
    []
  )
  // Data
  const [list, setList] = React.useState<TData<TGroupSubjectFields>[]>([])

  // Read Data
  React.useEffect(() => {
    async function getData() {
      const data = await rpc.groupSubject.read({ where: selection })
      form.reset(data || dataClear)
    }
    if (selection.length > 0) getData()
  }, [form, selection])

  async function getList(
    where: TWhere<TGroupSubjectFields>,
    orderBy: TOrderBy<TGroupSubjectFields>
  ) {
    const data = await rpc.groupSubject.list({ where, orderBy })
    setList(data)
  }

  React.useEffect(() => {
    getList(where, orderBy)
  }, [where, orderBy])

  function getId(row: TData<TGroupSubjectFields>): TId<TGroupSubjectKeys> {
    return [
      ['idGroup', row.idGroup],
      ['idSubject', row.idSubject],
    ]
  }

  function handleSelection(selected: TSelection<TGroupSubjectKeys>) {
    if (deepEqual(selected, selection)) return setSelection([])
    setSelection(selected)
    setStatus('view')
  }

  function handleWhere(where: TWhere<TGroupSubjectFields>) {
    // where = whereType(where, 'id', 'int')
    setWhere(where)
  }

  function handleOrderBy(orderBy: TOrderBy<TGroupSubjectFields>) {
    setOrderBy(orderBy)
  }

  function handleNew() {
    setStatus('new')
    form.reset(dataClear)
    setSelection([])
  }

  async function handleDel() {
    await rpc.groupSubject.del$({ where: selection })
    await getList(where, orderBy)
    setStatus('view')
    setSelection([])
  }

  async function handleSave() {
    if (status === 'edit') {
      await rpc.groupSubject.update$({
        data: form.value,
        where: selection,
      })
    }
    if (status === 'new') {
      await rpc.groupSubject.create$({ data: form.value })
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
    <>
      <GroupSubjectTable
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
    </>
  )
}
