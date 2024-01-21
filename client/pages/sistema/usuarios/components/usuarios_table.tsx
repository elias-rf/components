import { Table } from '@/client/components/table-full/table.js'
import { usuarioColumns } from '@/client/pages/sistema/usuarios/components/usuario_columns.js'
import { TUsuarioStore } from '@/client/pages/sistema/usuarios/usuario.store.js'
import { pageSizeState } from '@/client/store/page-size-store.js'
import { TUsuarioFields, TUsuarioKeys } from '@/core/usuario_controller.js'
import type { TData, TId, TOrderBy, TWhere } from '@/types/index.js'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useSnapshot } from 'valtio'

export function UsuarioTable({ store }: { store: TUsuarioStore }) {
  const state = useSnapshot(store.state)

  function getId(row: TData<TUsuarioFields>): TId<TUsuarioKeys> {
    return [['kUsuario', row.kUsuario]]
  }

  useEffect(() => {
    toast.promise(
      store.fetchList(),
      {
        loading: 'lendo...',
        success: 'sucesso!',
        error: 'Erro ao carregar usuários!',
      },
      {
        id: 'usuario-table',
      }
    )
  }, [state.where, state.orderBy])

  return (
    <Table
      columns={usuarioColumns}
      getId={getId}
      onOrderBy={store.setOrderBy}
      onSelection={store.setSelection}
      onWhere={store.setWhere}
      orderBy={state.orderBy as TOrderBy<TUsuarioFields>}
      rows={state.list as TData<TUsuarioFields>[]}
      selection={state.selection as TId<TUsuarioKeys>}
      where={state.where as TWhere<TUsuarioFields>}
    />
  )
}
