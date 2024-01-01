import { Table } from '@/client/components/table/table.js'
import { Input } from '@/client/components/ui-old/input/input.js'
import { lotesSaidaColumns } from '@/client/pages/industrial/lotes-saida/components/lotes-saida_columns.js'
import {
  TLotesSaidaStore,
  lotesSaidaStore,
} from '@/client/pages/industrial/lotes-saida/lotes-saida_store.js'
import { pageSizeState } from '@/client/store/page-size-store.js'
import {
  TNfSaidaLoteFields,
  TNfSaidaLoteKeys,
} from '@/controllers/nf-saida-lote_controller.js'
import type { TData, TId, TOrderBy } from '@/types/index.js'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useSnapshot } from 'valtio'

export function LotesSaidaTable({ store }: { store: TLotesSaidaStore }) {
  const pageHeight = useSnapshot(pageSizeState).height * 0.9
  const [controle, setControle] = useState('')
  const { where, orderBy, list, selection } = useHookstate(store.state)
  const { setSelection, fetchList } = store.action

  function handleInput(e: string) {
    where.set([['NumLote', 'like', e + '%']])
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
        onOrderBy={(e) => orderBy.set(e)}
        onSelection={setSelection}
        orderBy={orderBy.value as TOrderBy<TNfSaidaLoteFields>}
        rows={list.value as TData<TNfSaidaLoteFields>[]}
        selection={selection.value as TId<TNfSaidaLoteKeys>}
      />
    </div>
  )
}
