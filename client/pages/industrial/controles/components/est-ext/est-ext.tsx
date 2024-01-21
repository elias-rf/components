import { EsterilizacaoExternaDiario } from './est-ext-diario.js'
import { EsterilizacaoExternaMensal } from './est-ext-mensal.js'
import { EsterilizacaoExternaModelo } from './est-ext-modelo.js'
import { EsterilizacaoExternaProduto } from './est-ext-produto.js'
import { esterilizacaoExternaStore } from './est-ext.store.js'

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
