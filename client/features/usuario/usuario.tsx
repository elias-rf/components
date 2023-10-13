import { Can } from '@/client/components/can'
import { Table } from '@/client/components/table'
import { Button } from '@/client/components/ui/button'
import { Title } from '@/client/components/ui/title'
import { Permissions } from '@/client/features/permissions'
import { usuarioColumns } from '@/client/features/usuario/components/usuario_columns'
import { UsuarioForm } from '@/client/features/usuario/components/usuario_form'
import { formButtonStatus } from '@/client/lib/form-button-status'
import { whereType } from '@/client/lib/where-type'
import { Loading } from '@/client/pages/loading'
import { useAuth } from '@/client/store/auth'
import { usePageSize } from '@/client/store/page-size'
import { TUsuarioFields, TUsuarioKeys } from '@/controllers/usuario.controller'
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
import { omit } from '@/utils/object/omit'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useEffectOnce } from 'usehooks-ts'

const dataClear = {
  kUsuario: '',
  email: '',
  nome: '',
  setor: '',
  Ativo: true,
  idGroup: '',
  NomeUsuario: '',
}

type TUsuario = typeof dataClear

const permissions = {
  usuario_permissao: 'Atribuir permissões de acesso para usuários',
  usuario_read: 'Visualizar dados do usuário',
  usuario_update: 'Alterar dados do usuário',
}
type TPermissions = keyof typeof permissions
type TCan = { [prm in TPermissions]: boolean }

export function Usuario() {
  const pageHeight = usePageSize((state) => state.height * 0.7)

  // Form
  const form = useForm({ defaultValues: dataClear, mode: 'onTouched' })
  // List
  const [selection, setSelection] = React.useState<TSelection<TUsuarioKeys>>([])
  const [where, setWhere] = React.useState<TWhere<TUsuarioFields>>([])
  const [orderBy, setOrderBy] = React.useState<TOrderBy<TUsuarioFields>>([])
  // Data

  const idGroups = useAuth((state) => state.user.group_ids)
  const [can, setCan] = useState<Partial<TCan>>()
  const [status, setStatus] = useState<TFormStatus>('none')

  const [list, setList] = React.useState<TData<TUsuarioFields>[]>([])

  const frmStatus = formButtonStatus(status)

  useEffectOnce(() => {
    async function getData() {
      const data = await rpc.groupSubject.listPermissions({
        idGroup: idGroups || '',
        idSubjectList: Object.keys(permissions),
      })
      const can = data.reduce(
        (acc, cur) => ({ ...acc, [cur.idSubject]: true }),
        {}
      )
      setCan(can)
    }
    getData()
  })

  // Read Data
  React.useEffect(() => {
    async function getData() {
      const data = await rpc.usuario.read({ id: selection })
      form.reset(data)
    }
    if (selection.length > 0) getData()
  }, [form, selection])

  async function getList(
    where: TWhere<TUsuarioFields>,
    orderBy: TOrderBy<TUsuarioFields>
  ) {
    const data = await rpc.usuario.list({ where, orderBy })
    setList(data)
  }

  React.useEffect(() => {
    getList(where, orderBy)
  }, [where, orderBy])

  function getId(row: TData<TUsuarioFields>): TId<TUsuarioKeys> {
    return [['kUsuario', row.kUsuario]]
  }

  function handleSelection(selected: TSelection<TUsuarioKeys>) {
    if (deepEqual(selected, selection)) {
      setStatus('none')
      return setSelection([])
    }
    setSelection(selected)
    setStatus('view')
  }

  function handleWhere(where: TWhere<TUsuarioFields>) {
    where = whereType(where, 'kUsuario', 'int')
    setWhere(where)
  }

  function handleOrderBy(orderBy: TOrderBy<TUsuarioFields>) {
    setOrderBy(orderBy)
  }

  function handleNew() {
    setStatus('new')
    form.reset(dataClear)
    setSelection([])
  }

  async function handleDel() {
    await rpc.usuario.del({ id: selection })
    await getList(where, orderBy)
    setStatus('view')
    setSelection([])
  }

  async function handleSave() {
    let record = form.getValues()
    if (status === 'edit') {
      record = omit(record, ['kUsuario']) as TUsuario
      await rpc.usuario.update({
        data: record,
        id: selection,
      })
    }
    if (status === 'new') {
      await rpc.usuario.create({ data: record })
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

  if (can === undefined) return <Loading />

  return (
    <Can can={can.usuario_read}>
      <div data-name="Cliente">
        <div className="flex flex-row justify-between align-center">
          <div className="flex flex-row">
            <Title>Usuários</Title>
            <Can
              can={can.usuario_permissao}
              response={null}
            >
              <Permissions permissions={permissions} />
            </Can>
          </div>

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
        columns={usuarioColumns}
        getId={getId}
        height={`${pageHeight}px`}
        onOrderBy={handleOrderBy}
        onSelection={handleSelection}
        onWhere={handleWhere}
        orderBy={orderBy}
        rows={list}
        selection={selection}
        where={where}
      />
      {status !== 'none' ? (
        <div className="p-1 mb-2 border border-gray-300">
          <UsuarioForm
            form={form}
            onCancel={handleCancel}
            onDel={handleDel}
            onEdit={handleEdit}
            onSave={handleSave}
            status={status}
          />
        </div>
      ) : null}
    </Can>
  )
}
