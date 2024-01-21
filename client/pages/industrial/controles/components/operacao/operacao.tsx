import { Label } from '@/client/components/label/label.js'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/client/components/select/select.js'
import { FormField } from '@/client/components/ui-old/form-field/form-field.js'
import { operacaoStore } from '@/client/pages/industrial/controles/components/operacao/operacao.store.js'
import { TId } from '@/types/index.js'
import { getFieldId } from '@/utils/query/get-field-id.js'
import { useSnapshot } from 'valtio'
import { OperacaoDiario } from './operacao-diario.js'
import { OperacaoMensal } from './operacao-mensal.js'
import { OperacaoModelo } from './operacao-modelo.js'
import { OperacaoProduto } from './operacao-produto.js'
import { OperacaoTurno } from './operacao-turno.js'

export function Operacao() {
  const { operacao } = useSnapshot(operacaoStore.state)
  const setOperacao = operacaoStore.setOperacao

  function handleSelect(value: string) {
    setOperacao([['operacao', value]])
  }

  return (
    <>
      <div className={'my-2 max-w-md'}>
        <FormField>
          <Label htmlFor="operacao">Operação</Label>
          <Select
            value={getFieldId('operacao', operacao as TId<'operacao'>) || ''}
            onValueChange={handleSelect}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1010">1010 - Montagem lado 1</SelectItem>
                <SelectItem value="1015">1015 - Torneamento radial</SelectItem>
                <SelectItem value="2010">2010 - Montagem lado 2</SelectItem>
                <SelectItem value="2018">2018 - Fresagem</SelectItem>
                <SelectItem value="2025">
                  2025 - Desmontagem e limpeza
                </SelectItem>
                <SelectItem value="3042">3042 - Inspeção</SelectItem>
                <SelectItem value="3045">3045 - Dioptria</SelectItem>
                <SelectItem value="3058">
                  3058 - Esterilizacao a vapor
                </SelectItem>
                <SelectItem value="3065">3065 - Empacotamento</SelectItem>
                <SelectItem value="3070">3070 - Inspecao final</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormField>
      </div>
      <div className="max-w-md">
        <OperacaoMensal store={operacaoStore}>
          <div className="w-full p-4 border-2 border-gray-200">
            <OperacaoDiario store={operacaoStore}>
              <div className="p-4 space-y-4 border-2 border-gray-200">
                <OperacaoProduto store={operacaoStore}>
                  <div className="p-4 border-2 border-gray-200">
                    <OperacaoModelo store={operacaoStore} />
                  </div>
                </OperacaoProduto>
                <div className="p-4 border-2 border-gray-200 ">
                  <OperacaoTurno store={operacaoStore} />
                </div>
              </div>
            </OperacaoDiario>
          </div>
        </OperacaoMensal>
      </div>
    </>
  )
}
