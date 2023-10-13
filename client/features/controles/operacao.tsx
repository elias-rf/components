import { Select } from '@/client/components/ui/select'
import { useControles } from '@/client/features/controles/controles_store'
import { getFieldId } from '@/utils/query/get-field-id'
import { OperacaoDiario } from './components/operacao-diario'
import { OperacaoMensal } from './components/operacao-mensal'
import { OperacaoModelo } from './components/operacao-modelo'
import { OperacaoProduto } from './components/operacao-produto'
import { OperacaoTurno } from './components/operacao-turno'

export function Operacao() {
  const operacao = useControles.use.operacao()
  const setOperacao = useControles.use.setOperacao()

  function handleSelect(value: string) {
    setOperacao([['operacao', value]])
  }

  return (
    <>
      <div className={'mb-2 max-w-md'}>
        <Select
          label="Operação"
          value={getFieldId('operacao', operacao) || ''}
          onChange={handleSelect}
          options={[
            ['1010 - Montagem lado 1', '1010'],
            ['1015 - Torneamento radial', '1015'],
            ['2010 - Montagem lado 2', '2010'],
            ['2018 - Fresagem', '2018'],
            ['2025 - Desmontagem e limpeza', '2025'],
            ['3042 - Inspeção', '3042'],
            ['3045 - Dioptria', '3045'],
            ['3058 - Esterilização a vapor', '3058'],
            ['3065 - Empacotamento', '3065'],
            ['3070 - Inspeção final', '3070'],
          ]}
        />
      </div>
      <OperacaoMensal>
        <div className={'mb-4 p-1 border-2 border-gray-200 w-full'}>
          <OperacaoDiario>
            <div className={'mb-4 p-1 border-2 border-gray-200'}>
              <OperacaoProduto>
                <OperacaoModelo />
              </OperacaoProduto>
              <OperacaoTurno />
            </div>
          </OperacaoDiario>
        </div>
      </OperacaoMensal>
    </>
  )
}
