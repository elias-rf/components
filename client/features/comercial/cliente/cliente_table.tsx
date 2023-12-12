import { Table } from '@/client/components/table/table.js'
import { TClienteStore } from '@/client/features/comercial/cliente/cliente_store.js'
import { TAuthStore } from '@/client/store/auth_store.js'
import { usePageSize } from '@/client/store/page-size.js'
import {
  TClienteFields,
  TClienteKeys,
} from '@/controllers/cliente_controller.js'
import type { TData, TId } from '@/types/index.js'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { clienteColumns } from './components/cliente_columns.js'

export function ClienteTable({
  store,
  auth,
}: {
  store: TClienteStore
  auth: TAuthStore
}) {
  const pageHeight = usePageSize((state) => state.height * 0.5)

  const fetchList = store.use.fetchList()
  const list = store.use.list()
  const orderBy = store.use.orderBy()
  const selection = store.use.selection()
  const setOrderBy = store.use.setOrderBy()
  const setSelection = store.use.setSelection()
  const setWhere = store.use.setWhere()
  const where = store.use.where()

  function getId(row: TData<TClienteFields>): TId<TClienteKeys> {
    return [['CdCliente', row.CdCliente]]
  }

  useEffect(() => {
    toast.promise(
      fetchList(),
      {
        loading: 'lendo...',
        success: 'sucesso!',
        error: 'Erro ao carregar lista!',
      },
      {
        id: 'cliente-table',
      }
    )
  }, [where, orderBy])

  return (
    <div data-name="ClienteTable">
      <Table
        columns={clienteColumns}
        getId={getId}
        height={`${pageHeight}px`}
        onOrderBy={setOrderBy}
        onSelection={setSelection}
        onWhere={setWhere}
        orderBy={orderBy}
        rows={list ?? []}
        selection={selection}
        where={where}
      />
    </div>
  )
}
