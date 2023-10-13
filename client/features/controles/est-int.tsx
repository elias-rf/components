import { EsterilizacaoInternaDiario } from './components/est-int-diario'
import { EsterilizacaoInternaMensal } from './components/est-int-mensal'
import { EsterilizacaoInternaModelo } from './components/est-int-modelo'
import { EsterilizacaoInternaProduto } from './components/est-int-produto'

export function EstInt() {
  return (
    <div className={'p-2 w-full'}>
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
