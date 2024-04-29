import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Table } from '../../../../components/table-full/table.jsx'
import { Input } from '../../../../components/ui-old/input/input.jsx'
import { lotesSaidaColumns } from '../../../../pages/industrial/lotes-saida/components/lotes-saida.columns.mjs'

const select = [
  'controle',
  'empresaId',
  'numero',
  'emissaoData',
  'produtoId',
  'sequencial',
]

export function LotesSaidaTable({ store }) {
  const [controle, setControle] = useState('')
  const where = store.state.use.where()
  const orderBy = store.state.use.orderBy()
  const selection = store.state.use.selection()

  const query = useQuery({
    queryKey: ['nfSaidaLote', { where, orderBy }],
    queryFn: () => store.fetchList({ where, orderBy, select }),
  })

  function handleInput(e) {
    store.setWhere([['controle', 'like', e + '%']])
    setControle(e)
  }

  function getId(row) {
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
