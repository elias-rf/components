import { Table } from '@/client/components/table/table.js'
import { gruposColumns } from '@/client/pages/sistema/grupos/grupos_columns.js'
import { TGruposStore } from '@/client/pages/sistema/grupos/grupos_store.js'
import { TAuthStore } from '@/client/store/auth_store.js'
import { pageSizeState } from '@/client/store/page-size-store.js'
import { TGroupFields, TGroupKeys } from '@/controllers/group_controller.js'
import type { TData, TId } from '@/types/index.js'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

export function GruposTable({
  store,
  auth,
}: {
  store: TGruposStore
  auth: TAuthStore
}) {
  const pageHeight = pageSizeState.value.height * 0.7

  const fetchList = store.use.fetchList()
  const list = store.use.list()
  const orderBy = store.use.orderBy()
  const selection = store.use.selection()
  const setOrderBy = store.use.setOrderBy()
  const setSelection = store.use.setSelection()
  const setWhere = store.use.setWhere()
  const where = store.use.where()

  function getId(row: TData<TGroupFields>): TId<TGroupKeys> {
    return [['kGrupo', row.kGrupo]]
  }

  useEffect(() => {
    toast.promise(
      fetchList(),
      {
        loading: 'lendo...',
        success: 'sucesso!',
        error: 'Erro ao carregar grupos!',
      },
      {
        id: 'grupos-table',
      }
    )
  }, [where, orderBy])

  return (
    <Table
      columns={gruposColumns}
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
  )
}
