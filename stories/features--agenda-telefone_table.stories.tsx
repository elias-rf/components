import type { Story } from '@ladle/react'
import { JsonViewer } from '@textea/json-viewer'
import React from 'react'
import { AgendaTelefoneTable } from '../client/features/agenda-telefone/agenda-telefone_table'
import { useForm } from 'react-hook-form'
import { TData, TFormStatus, TId, TSelection } from '@/types'
import {
  TAgendaTelefoneFields,
  TAgendaTelefoneKeys,
} from '@/controllers/agenda-telefone.controller'

export const Default: Story = () => {
  const [list] = React.useState([
    { id: '1', name: 'Fulano', department: 'adm', email: 'fulano@mail' },
    { id: '2', name: 'Beltrano', department: 'dev', email: 'beltrano@mail' },
  ])
  const [selection, setSelection] = React.useState<
    TSelection<TAgendaTelefoneKeys>
  >([])
  const [status, setStatus] = React.useState<TFormStatus>('view')
  const form = useForm({
    mode: 'onTouched',
    defaultValues: { id: '', name: '', department: '', email: '' },
  })

  function getId(row: TData<TAgendaTelefoneFields>): TId<TAgendaTelefoneKeys> {
    return [['id', row.id]]
  }

  function handleSelection(selected: TSelection<TAgendaTelefoneKeys>) {
    setSelection(selected)
    form.reset(list[selected[0][1] - 1])
    setStatus('view')
  }

  function handleNew() {
    setStatus('new')
    setSelection([])
    form.reset({ id: '', name: '', department: '', email: '' })
  }

  function handleEdit() {
    setStatus('edit')
  }

  function handleCancel() {
    if (status === 'new') {
      setStatus('view')
    }
    if (status === 'edit') {
      handleSelection(selection)
    }
  }

  function handleSave() {
    if (status === 'new') {
      console.log('criando', form.getValues())
    }
    if (status === 'edit') {
      console.log('salvando', form.getValues())
    }
    setStatus('view')
  }

  function handleDel() {
    const id = form.getValues('id')
    console.log('apagando ', id)
  }

  return (
    <div className="flex flex-col space-y-4">
      <AgendaTelefoneTable
        form={form}
        getId={getId}
        rows={list}
        onCancel={handleCancel}
        onDel={handleDel}
        onEdit={handleEdit}
        onNew={handleNew}
        onSave={handleSave}
        onSelection={handleSelection}
        selection={selection}
        status={status}
      />
      <JsonViewer
        value={{
          status,
          selection,
        }}
      />
    </div>
  )
}
