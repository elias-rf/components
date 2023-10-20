import { Can } from '@/client/components/can'
import { Table } from '@/client/components/table'
import { usuarioColumns } from '@/client/features/usuario/components/usuario_columns'
import { usuarioStore } from '@/client/features/usuario/usuario_store'
import { authStore } from '@/client/store/auth_store'
import { usePageSize } from '@/client/store/page-size'
import { TUsuarioFields, TUsuarioKeys } from '@/controllers/usuario.controller'
import type { TData, TId } from '@/types'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export function UsuarioTable() {
  const pageHeight = usePageSize((state) => state.height * 0.7)

  const can = authStore.use.can()

  const fetchList = usuarioStore.use.fetchList()
  const list = usuarioStore.use.list()
  const orderBy = usuarioStore.use.orderBy()
  const selection = usuarioStore.use.selection()
  const setOrderBy = usuarioStore.use.setOrderBy()
  const setSelection = usuarioStore.use.setSelection()
  const setWhere = usuarioStore.use.setWhere()
  const where = usuarioStore.use.where()

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
    <Can can={can('usuario_read')}>
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
    </Can>
  )
}
