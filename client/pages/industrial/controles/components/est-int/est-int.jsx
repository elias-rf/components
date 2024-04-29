import { esterilizacaoInternaStore } from '../../../../../pages/industrial/controles/components/est-int/est-int-store.mjs'
import { EsterilizacaoInternaDiario } from './est-int-diario.jsx'
import { EsterilizacaoInternaMensal } from './est-int-mensal.jsx'
import { EsterilizacaoInternaModelo } from './est-int-modelo.jsx'
import { EsterilizacaoInternaProduto } from './est-int-produto.jsx'

export function EstInt() {
  return (
    <div className={'max-w-md p-2'}>
      <EsterilizacaoInternaMensal store={esterilizacaoInternaStore}>
        <div className={' border-2 border-gray-300 p-4'}>
          <EsterilizacaoInternaDiario store={esterilizacaoInternaStore}>
            <div className={' border-2 border-gray-300 p-4'}>
              <EsterilizacaoInternaProduto store={esterilizacaoInternaStore}>
                <EsterilizacaoInternaModelo store={esterilizacaoInternaStore} />
              </EsterilizacaoInternaProduto>
            </div>
          </EsterilizacaoInternaDiario>
        </div>
      </EsterilizacaoInternaMensal>
    </div>
  )
}
