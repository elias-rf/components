import { Can } from '@/client/components/can'
import { Table } from '@/client/components/table'
import { Title } from '@/client/components/ui/title'
import { Permissions } from '@/client/features/permissions'
import { whereType } from '@/client/lib/where-type'
import { Loading } from '@/client/pages/loading'
import { useAuth } from '@/client/store/auth'
import { usePageSize } from '@/client/store/page-size'
import { TClienteFields, TClienteKeys } from '@/controllers/cliente.controller'
import { rpc } from '@/rpc/rpc-client'
import type {
  TData,
  TFormStatus,
  TId,
  TOrderBy,
  TSelection,
  TWhere,
} from '@/types'
import { day } from '@/utils/date/day'
import { deepEqual } from '@/utils/object/deep-equal'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useEffectOnce } from 'usehooks-ts'
import { clienteColumns } from './components/cliente-columns'
import { ClienteForm } from './components/cliente-form'

const dataClear = {}

const permissions = {
  cliente_permissao: 'Atribuir permissões do cliente',
  cliente_read: 'Visualizar dados do cliente próprio',
  cliente_read_all: 'Visualizar dados de todos os cliente',
}
type TPermissions = keyof typeof permissions
type TCan = { [prm in TPermissions]: boolean }

/**
 * Agenda de Ramais
 */
export function Cliente() {
  const pageHeight = usePageSize((state) => state.height * 0.5)

  // Form
  const form = useForm({ defaultValues: dataClear, mode: 'onTouched' })
  // Filters
  const [selection, setSelection] = useState<TId<TClienteKeys>>([
    ['CdCliente', 0],
  ])
  const [where, setWhere] = useState<TWhere<TClienteFields>>([])
  const [orderBy, setOrderBy] = useState<TOrderBy<TClienteFields>>([])
  const idGroups = useAuth((state) => state.user.group_ids)
  const [can, setCan] = useState<Partial<TCan>>()
  const [status, setStatus] = useState<TFormStatus>('none')

  // Data
  const [list, setList] = useState<TData<TClienteFields>[]>([])

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
  useEffect(() => {
    async function getData() {
      const data = await rpc.cliente.read({ id: selection })
      form.reset(data)
    }
    if (selection.length > 0) getData()
  }, [form, selection])

  async function getList(
    where: TWhere<TClienteFields>,
    orderBy: TOrderBy<TClienteFields>
  ) {
    const data = await rpc.cliente.list({
      where,
      orderBy,
      select: clienteColumns.map((it) => it.name) as TClienteFields[],
    })
    setList(
      data.map((row) => {
        row.DtCadastro = day(row.DtCadastro).format('YYYY-MM-DD')
        return row
      })
    )
  }

  useEffect(() => {
    getList(where, orderBy)
  }, [where, orderBy])

  function getId(row: TData<TClienteFields>): TId<TClienteKeys> {
    return [['CdCliente', row.CdCliente]]
  }

  function handleSelection(selected: TSelection<TClienteKeys>) {
    if (deepEqual(selected, selection)) {
      setStatus('none')
      return setSelection([])
    }
    setSelection(selected)
    setStatus('view')
  }

  function handleWhere(where: TWhere<TClienteFields>) {
    where = whereType(where, 'CdCliente', 'int')
    setWhere(where)
  }
  function handleOrderBy(orderBy: TOrderBy<TClienteFields>) {
    setOrderBy(orderBy)
  }

  if (can === undefined) return <Loading />

  return (
    <Can can={can.cliente_read || can.cliente_read_all}>
      <div
        data-name="Cliente"
        className="flex flex-row my-1 space-x-2"
      >
        <Title>Histórico do cliente</Title>
        <Can
          can={can.cliente_permissao}
          response={null}
        >
          <Permissions permissions={permissions} />
        </Can>
      </div>
      <Table
        columns={clienteColumns}
        getId={getId}
        height={`${pageHeight}px`}
        onOrderBy={handleOrderBy}
        onSelection={handleSelection}
        onWhere={handleWhere}
        orderBy={orderBy}
        rows={list ?? []}
        selection={selection}
        where={where}
      />
      {status !== 'none' ? (
        <div className="p-1 mb-2 border border-gray-300">
          <ClienteForm
            form={form}
            disabled
          />
        </div>
      ) : null}
    </Can>
  )
}
