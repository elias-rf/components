import { Table } from '@/client/components/table/table.js'
import { Input } from '@/client/components/ui/input/input.js'
import { lotesSaidaColumns } from '@/client/pages/industrial/lotes-saida/components/lotes-saida_columns.js'
import { lotesSaidaStore } from '@/client/pages/industrial/lotes-saida/lotes-saida_store.js'
import { usePageSize } from '@/client/store/page-size.js'
import {
  TNfSaidaLoteFields,
  TNfSaidaLoteKeys,
} from '@/controllers/nf-saida-lote_controller.js'
import type { TData, TId } from '@/types/index.js'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

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
      <div className="mx-2 my-1 flex flex-row">
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
