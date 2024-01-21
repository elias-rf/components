import { Table } from '@/client/components/table-full/table.js'
import { TGroupStore } from '@/client/pages/sistema/grupos/grupos.store.js'
import { gruposColumns } from '@/client/pages/sistema/grupos/grupos_columns.js'
import { TGroupFields, TGroupKeys } from '@/core/group_controller.js'
import type { TData, TId, TOrderBy, TWhere } from '@/types/index.js'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useSnapshot } from 'valtio'

export function GruposTable({ store }: { store: TGroupStore }) {
  const state = useSnapshot(store.state)

  function getId(row: TData<TGroupFields>): TId<TGroupKeys> {
    return [['kGrupo', row.kGrupo]]
  }

  useEffect(() => {
    toast.promise(
      store.fetchList(),
      {
        loading: 'lendo...',
        success: 'sucesso!',
        error: 'Erro ao carregar grupos!',
      },
      {
        id: 'grupos-table',
      }
    )
  }, [state.where, state.orderBy])

  return (
    <Table
      columns={gruposColumns}
      getId={getId}
      onOrderBy={store.setOrderBy}
      onSelection={store.setSelection}
      onWhere={store.setWhere}
      orderBy={state.orderBy as TOrderBy<TGroupFields>}
      rows={state.list as TData<TGroupFields>[]}
      selection={state.selection as TId<TGroupKeys>}
      where={state.where as TWhere<TGroupFields>}
    />
  )
}
