import { Table } from '@/client/components/table'
import { Input } from '@/client/components/ui/input/input'
import { lotesSaidaColumns } from '@/client/features/lotes-saida/components/lotes-saida_columns'
import { lotesSaidaStore } from '@/client/features/lotes-saida/lotes-saida_store'
import { usePageSize } from '@/client/store/page-size'
import {
  TNfSaidaLoteFields,
  TNfSaidaLoteKeys,
} from '@/controllers/nf-saida-lote_controller'
import type { TData, TId } from '@/types'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export function LotesSaidaTable() {
  const pageHeight = usePageSize((state) => state.height * 0.9)
  const [controle, setControle] = useState('')
  const fetchList = lotesSaidaStore.use.fetchList()
  const list = lotesSaidaStore.use.list()
  const orderBy = lotesSaidaStore.use.orderBy()
  const selection = lotesSaidaStore.use.selection()
  const setOrderBy = lotesSaidaStore.use.setOrderBy()
  const setSelection = lotesSaidaStore.use.setSelection()
  const setWhere = lotesSaidaStore.use.setWhere()
  const where = lotesSaidaStore.use.where()

  function handleInput(e: string) {
    setWhere([['NumLote', 'like', e + '%']])
    setControle(e)
    fetchList()
  }

  function getId(row: TData<TNfSaidaLoteFields>): TId<TNfSaidaLoteKeys> {
    return [
      ['CdFilial', row.CdFilial],
      ['NumNota', row.NumNota],
      ['Serie', row.Serie],
      ['Modelo', row.Modelo],
      ['Sequencia', row.Sequencia],
    ]
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
        id: 'nf-saida-lote-table',
      }
    )
  }, [where, orderBy])

  return (
    <div data-name="AgendaTelefoneTable">
      <div className="flex flex-row mx-2 my-1">
        Controle para rastrear
        <div className="ml-2 w-60">
          <Input
            value={controle}
            onInput={handleInput}
          />
        </div>
      </div>
      <Table
        columns={lotesSaidaColumns}
        getId={getId}
        height={`${pageHeight}px`}
        onOrderBy={setOrderBy}
        onSelection={setSelection}
        orderBy={orderBy}
        rows={list ?? []}
        selection={selection}
      />
    </div>
  )
}