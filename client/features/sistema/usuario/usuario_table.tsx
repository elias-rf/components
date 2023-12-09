import { Can } from '@/client/components/can.js'
import { Table } from '@/client/components/table/table.js'
import { usuarioColumns } from '@/client/features/sistema/usuario/components/usuario_columns.js'
import { usuarioStore } from '@/client/features/sistema/usuario/usuario_store.js'
import { authStore } from '@/client/store/auth_store.js'
import { usePageSize } from '@/client/store/page-size.js'
import {
  TUsuarioFields,
  TUsuarioKeys,
} from '@/controllers/usuario_controller.js'
import type { TData, TId } from '@/types/index.js'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

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
