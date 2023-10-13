import { Table } from '@/client/components/table'
import { useCliente } from '@/client/features/cliente/cliente_store'
import { usePageSize } from '@/client/store/page-size'
import { TClienteFields, TClienteKeys } from '@/controllers/cliente.controller'
import type { TData, TId } from '@/types'
import { clienteColumns } from './components/cliente-columns'

/**
 * Cliente
 */
export function ClienteTable() {
  const pageHeight = usePageSize((state) => state.height * 0.5)

  const list = useCliente.use.list()
  const orderBy = useCliente.use.orderBy()
  const selection = useCliente.use.selection()
  const setOrderBy = useCliente.use.setOrderBy()
  const setSelection = useCliente.use.setSelection()
  const setWhere = useCliente.use.setWhere()
  const where = useCliente.use.where()

  function getId(row: TData<TClienteFields>): TId<TClienteKeys> {
    return [['CdCliente', row.CdCliente]]
  }

  return (
    <>
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
    </>
  )
}
