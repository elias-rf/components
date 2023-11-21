import { EsterilizacaoInternaDiario } from './components/est-int-diario.js'
import { EsterilizacaoInternaMensal } from './components/est-int-mensal.js'
import { EsterilizacaoInternaModelo } from './components/est-int-modelo.js'
import { EsterilizacaoInternaProduto } from './components/est-int-produto.js'

export function EstInt() {
  return (
    <div className={'p-2 max-w-md'}>
      <EsterilizacaoInternaMensal>
        <div className={'p-1 mb-4 border-2 border-gray-300'}>
          <EsterilizacaoInternaDiario>
            <div className={'p-1 mb-4 border-2 border-gray-300'}>
              <EsterilizacaoInternaProduto>
                <EsterilizacaoInternaModelo></EsterilizacaoInternaModelo>
              </EsterilizacaoInternaProduto>
            </div>
          </EsterilizacaoInternaDiario>
        </div>
      </EsterilizacaoInternaMensal>
    </div>
  )
}
