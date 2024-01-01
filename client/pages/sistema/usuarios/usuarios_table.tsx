import { Table } from '@/client/components/table/table.js'
import { usuarioColumns } from '@/client/pages/sistema/usuarios/components/usuario_columns.js'
import { TUsuarioStore } from '@/client/pages/sistema/usuarios/usuarios_store.js'
import { pageSizeState } from '@/client/store/page-size-store.js'
import {
  TUsuarioFields,
  TUsuarioKeys,
} from '@/controllers/usuario_controller.js'
import type { TData, TId } from '@/types/index.js'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

export function UsuarioTable({ store }: { store: TUsuarioStore }) {
  const pageHeight = pageSizeState.value.height * 0.6

  const fetchList = store.use.fetchList()
  const list = store.use.list()
  const orderBy = store.use.orderBy()
  const selection = store.use.selection()
  const setOrderBy = store.use.setOrderBy()
  const setSelection = store.use.setSelection()
  const setWhere = store.use.setWhere()
  const where = store.use.where()

  function getId(row: TData<TUsuarioFields>): TId<TUsuarioKeys> {
    return [['kUsuario', row.kUsuario]]
  }

  useEffect(() => {
    toast.promise(
      fetchList(),
      {
        loading: 'lendo...',
        success: 'sucesso!',
        error: 'Erro ao carregar usuários!',
      },
      {
        id: 'usuario-table',
      }
    )
  }, [where, orderBy])

  return (
    <Table
      columns={usuarioColumns}
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
