import { EsterilizacaoExternaDiario } from './components/est-ext-diario.js'
import { EsterilizacaoExternaMensal } from './components/est-ext-mensal.js'
import { EsterilizacaoExternaModelo } from './components/est-ext-modelo.js'
import { EsterilizacaoExternaProduto } from './components/est-ext-produto.js'

export function EstExt() {
  return (
    <div className={'p-2 max-w-md'}>
      <EsterilizacaoExternaMensal>
        <div className={'p-1 mb-4 border-2 border-gray-300'}>
          <EsterilizacaoExternaDiario>
            <div className={'p-1 mb-4 border-2 border-gray-300'}>
              <EsterilizacaoExternaProduto>
                <EsterilizacaoExternaModelo></EsterilizacaoExternaModelo>
              </EsterilizacaoExternaProduto>
            </div>
          </EsterilizacaoExternaDiario>
        </div>
      </EsterilizacaoExternaMensal>
    </div>
  )
}
