import { FormField } from '@/client/components/ui/form-field'
import { Label } from '@/client/components/ui/label'
import { Select } from '@/client/components/ui/select/select'
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
      <div className={'my-2 max-w-md'}>
        <FormField>
          <Label id="operacao">Operação</Label>
          <Select
            value={getFieldId('operacao', operacao) || ''}
            onChange={handleSelect}
          >
            <Select.Option value="1010">1010 - Montagem lado 1</Select.Option>
            <Select.Option value="1015">
              1015 - Torneamento radial
            </Select.Option>
            <Select.Option value="2010">2010 - Montagem lado 2</Select.Option>
            <Select.Option value="2018">2018 - Fresagem</Select.Option>
            <Select.Option value="2025">
              2025 - Desmontagem e limpeza
            </Select.Option>
            <Select.Option value="3042">3042 - Inspeção</Select.Option>
            <Select.Option value="3045">3045 - Dioptria</Select.Option>
            <Select.Option value="3058">
              3058 - Esterilizacao a vapor
            </Select.Option>
            <Select.Option value="3065">3065 - Empacotamento</Select.Option>
            <Select.Option value="3070">3070 - Inspecao final</Select.Option>
          </Select>
        </FormField>
      </div>
      <div className="max-w-md">
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
      </div>
    </>
  )
}
