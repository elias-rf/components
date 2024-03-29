import { Table } from '@/client/components/table-full/table.js'
import { Input } from '@/client/components/ui-old/input/input.js'
import { lotesSaidaColumns } from '@/client/pages/industrial/lotes-saida/components/lotes-saida.columns.js'
import { TLotesSaidaStore } from '@/client/pages/industrial/lotes-saida/components/lotes-saida.store.js'
import {
  TNfSaidaLoteDtoFields,
  TNfSaidaLoteDtoKeys,
} from '@/data/plano/nf-saida-lote/nf-saida-lote.type.js'
import type { TData, TId } from '@/types/index.js'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const select: TNfSaidaLoteDtoFields[] = [
  'controle',
  'empresaId',
  'numero',
  'emissaoData',
  'produtoId',
  'sequencial',
]

export function LotesSaidaTable({ store }: { store: TLotesSaidaStore }) {
  const [controle, setControle] = useState('')
  const where = store.state.use.where()
  const orderBy = store.state.use.orderBy()
  const selection = store.state.use.selection()

  const query = useQuery({
    queryKey: ['nfSaidaLote', { where, orderBy }],
    queryFn: () => store.fetchList({ where, orderBy, select }),
  })

  function handleInput(e: string) {
    store.setWhere([['controle', 'like', e + '%']])
    setControle(e)
  }

  function getId(row: TData<TNfSaidaLoteDtoFields>): TId<TNfSaidaLoteDtoKeys> {
    return [
      ['empresaId', row.empresaId],
      ['numero', row.numero],
      ['serie', row.serie],
      ['modelo', row.modelo],
      ['sequencial', row.sequencial],
    ]
  }

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
        onOrderBy={store.setOrderBy}
        onSelection={store.setSelection}
        orderBy={orderBy}
        rows={query.data || []}
        selection={selection}
      />
    </div>
  )
}
