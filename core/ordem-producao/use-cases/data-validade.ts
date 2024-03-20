import { TOrdemProducaoOperacaoController } from '@/core/ordem-producao-operacao/ordem-producao-operacao_controller.js'
import { UTCDateMini } from '@date-fns/utc'
import { addYears, format } from 'date-fns'
import { flow } from 'lodash-es'
import { dataFabricacao } from './data-fabricacao.js'

/**
 * Validates if the given id is valid and retrieves the data fabricacao for it.
 *
 * @param {Object} args - An object containing the id of the data to validate.
 * @param {TId} args.id - The id of the data to validate.
 * @throws {Error} When the data fabricacao is blank for the given id.
 * @return {string} The validade date in the format 'YYYY-MM-DD'.
 */
export const dataValidade =
  ({
    ordemProducaoOperacaoController,
  }: {
    ordemProducaoOperacaoController: TOrdemProducaoOperacaoController
  }) =>
  async ({ id }: { id: [['id', number]] }) => {
    const dataFabricacaoUseCase = dataFabricacao({
      ordemProducaoOperacaoController,
    })
    const fabricacao = await dataFabricacaoUseCase({ id })
    if (fabricacao === '') {
      throw new Error('Ordem de produção não possui 3059, 3060, 4020 ou 3160')
    }
    const validade = flow([
      ($) => addYears($, 5),
      ($) => format($, 'yyyy-MM-dd'),
    ])(new UTCDateMini(fabricacao))
    return validade
  }
