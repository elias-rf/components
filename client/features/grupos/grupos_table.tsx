import { Can } from '@/client/components/can'
import { Table } from '@/client/components/table'
import { gruposColumns } from '@/client/features/grupos/components/grupos_columns'
import { gruposStore } from '@/client/features/grupos/grupos_store'
import { authStore } from '@/client/store/auth_store'
import { usePageSize } from '@/client/store/page-size'
import { TGroupFields, TGroupKeys } from '@/controllers/group_controller'
import type { TData, TId } from '@/types'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export function GruposTable() {
  const pageHeight = usePageSize((state) => state.height * 0.7)

  const can = authStore.use.can()

  const fetchList = gruposStore.use.fetchList()
  const list = gruposStore.use.list()
  const orderBy = gruposStore.use.orderBy()
  const selection = gruposStore.use.selection()
  const setOrderBy = gruposStore.use.setOrderBy()
  const setSelection = gruposStore.use.setSelection()
  const setWhere = gruposStore.use.setWhere()
  const where = gruposStore.use.where()

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
    <Can can={can('grupos_read')}>
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
    </Can>
  )
}