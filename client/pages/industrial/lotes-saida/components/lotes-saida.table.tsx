import { Table } from '@/client/components/table-full/table.js'
import { Input } from '@/client/components/ui-old/input/input.js'
import { lotesSaidaColumns } from '@/client/pages/industrial/lotes-saida/components/lotes-saida.columns.js'
import { TLotesSaidaStore } from '@/client/pages/industrial/lotes-saida/lotes-saida.store.js'
import {
  TNfSaidaLoteFields,
  TNfSaidaLoteKeys,
} from '@/core/nf-saida-lote_controller.js'
import type { TData, TId, TOrderBy } from '@/types/index.js'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useSnapshot } from 'valtio'

export function LotesSaidaTable({ store }: { store: TLotesSaidaStore }) {
  const [controle, setControle] = useState('')
  const state = useSnapshot(store.state)
  const { setSelection, fetchList } = store

  function handleInput(e: string) {
    store.state.where = [['NumLote', 'like', e + '%']]
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
  }, [state.where, state.orderBy])

  return (
    <div>
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
        onOrderBy={(e) => (store.state.orderBy = e)}
        onSelection={setSelection}
        orderBy={state.orderBy as TOrderBy<TNfSaidaLoteFields>}
        rows={state.list as TData<TNfSaidaLoteFields>[]}
        selection={state.selection as TId<TNfSaidaLoteKeys>}
      />
    </div>
  )
}
