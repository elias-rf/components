import { esterilizacaoInternaStore } from '@/client/pages/industrial/controles/components/est-int/est-int-store.js'
import { EsterilizacaoInternaDiario } from './est-int-diario.js'
import { EsterilizacaoInternaMensal } from './est-int-mensal.js'
import { EsterilizacaoInternaModelo } from './est-int-modelo.js'
import { EsterilizacaoInternaProduto } from './est-int-produto.js'

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
