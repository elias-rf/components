import { Table } from '@/client/components/table'
import { clienteStore } from '@/client/features/cliente/cliente_store'
import { usePageSize } from '@/client/store/page-size'
import { TClienteFields, TClienteKeys } from '@/controllers/cliente_controller'
import type { TData, TId } from '@/types'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { clienteColumns } from './components/cliente_columns'

export function ClienteTable() {
  const pageHeight = usePageSize((state) => state.height * 0.5)

  const fetchList = clienteStore.use.fetchList()
  const list = clienteStore.use.list()
  const orderBy = clienteStore.use.orderBy()
  const selection = clienteStore.use.selection()
  const setOrderBy = clienteStore.use.setOrderBy()
  const setSelection = clienteStore.use.setSelection()
  const setWhere = clienteStore.use.setWhere()
  const where = clienteStore.use.where()

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
