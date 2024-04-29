import { EsterilizacaoExternaDiario } from './est-ext-diario.jsx'
import { EsterilizacaoExternaMensal } from './est-ext-mensal.jsx'
import { EsterilizacaoExternaModelo } from './est-ext-modelo.jsx'
import { EsterilizacaoExternaProduto } from './est-ext-produto.jsx'
import { esterilizacaoExternaStore } from './est-ext.store.mjs'

export function EstExt() {
  return (
    <div className={'max-w-md p-2'}>
      <EsterilizacaoExternaMensal store={esterilizacaoExternaStore}>
        <div className={' border-2 border-gray-300 p-4'}>
          <EsterilizacaoExternaDiario store={esterilizacaoExternaStore}>
            <div className={' border-2 border-gray-300 p-4'}>
              <EsterilizacaoExternaProduto store={esterilizacaoExternaStore}>
                <EsterilizacaoExternaModelo store={esterilizacaoExternaStore} />
              </EsterilizacaoExternaProduto>
            </div>
          </EsterilizacaoExternaDiario>
        </div>
      </EsterilizacaoExternaMensal>
    </div>
  )
}
