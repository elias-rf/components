import { Table } from '@/client/components/table'
import { clienteStore } from '@/client/features/cliente/cliente_store'
import { usePageSize } from '@/client/store/page-size'
import { TClienteFields, TClienteKeys } from '@/controllers/cliente.controller'
import type { TData, TId } from '@/types'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { clienteColumns } from './components/cliente_columns'

/**
 * Cliente
 */
export function ClienteTable() {
  const pageHeight = usePageSize((state) => state.height * 0.5)

  const list = clienteStore.use.list()
  const orderBy = clienteStore.use.orderBy()
  const selection = clienteStore.use.selection()
  const setOrderBy = clienteStore.use.setOrderBy()
  const setSelection = clienteStore.use.setSelection()
  const setWhere = clienteStore.use.setWhere()
  const where = clienteStore.use.where()
  const fetchList = clienteStore.use.fetchList()

  function getId(row: TData<TClienteFields>): TId<TClienteKeys> {
    return [['CdCliente', row.CdCliente]]
  }

  useEffect(() => {
    toast.promise(
      fetchList(),
      {
        loading: 'Carregando clientes...',
        success: 'Clientes carregados com sucesso!',
        error: 'Erro ao carregar clientes!',
      },
      {
        id: 'cliente-table',
        style: {
          minWidth: '300px',
        },
      }
    )
  }, [where, orderBy])

  return (
    <div data-name="ClienteTable">
      <Table
        rows={list ?? []}
        columns={clienteColumns}
        getId={getId}
        selection={selection}
        where={where}
        orderBy={orderBy}
        onSelection={setSelection}
        onWhere={setWhere}
        onOrderBy={setOrderBy}
        height={`${pageHeight}px`}
      />
    </div>
  )
}
