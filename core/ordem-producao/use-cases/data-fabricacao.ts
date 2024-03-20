import { TOrdemProducaoOperacaoController } from '@/core/ordem-producao-operacao/ordem-producao-operacao_controller.js'
import { isEmpty } from '@/utils/identify/is-empty.js'
import { UTCDateMini } from '@date-fns/utc'
import { format } from 'date-fns'

/**
 * Async function to fetch the manufacturing date of an order based on its id.
 *
 * @param {object} args - An object containing the id of the order to fetch.
 * @param {string} args.id - The id of the order to fetch.
 * @throws {Error} Throws an error if the order doesn't have any of the
 *   operations with ids 3059, 3060, 4020, or 3160.
 * @return {Promise<string>} The manufacturing date of the order, in the
 *   format "YYYY-MM-DD", or an empty string if it could not be found.
 */
export const dataFabricacao =
  ({
    ordemProducaoOperacaoController,
  }: {
    ordemProducaoOperacaoController: TOrdemProducaoOperacaoController
  }) =>
  async ({ id }: { id: [['id', number]] }) => {
    const [[_, value]] = id

    let response =
      await ordemProducaoOperacaoController.ordemProducaoOperacao_list({
        where: [
          ['operacaoId', 3059],
          ['ordemProducaoId', value],
        ],
        orderBy: [['inicioDataHora', 'desc']],
        select: ['inicioDataHora'],
      })
    if (response.length === 0 || isEmpty(response[0].inicioDataHora)) {
      response =
        await ordemProducaoOperacaoController.ordemProducaoOperacao_list({
          where: [
            ['operacaoId', 3060],
            ['ordemProducaoId', value],
          ],
          orderBy: [['inicioDataHora', 'desc']],
          select: ['inicioDataHora'],
        })
    }
    if (response.length === 0 || isEmpty(response[0].inicioDataHora)) {
      response =
        await ordemProducaoOperacaoController.ordemProducaoOperacao_list({
          where: [
            ['operacaoId', 4020],
            ['ordemProducaoId', value],
          ],
          orderBy: [['inicioDataHora', 'desc']],
          select: ['inicioDataHora'],
        })
    }
    if (response.length === 0 || isEmpty(response[0].inicioDataHora)) {
      response =
        await ordemProducaoOperacaoController.ordemProducaoOperacao_list({
          where: [
            ['operacaoId', 3160],
            ['ordemProducaoId', value],
          ],
          orderBy: [['inicioDataHora', 'desc']],
          select: ['inicioDataHora'],
        })
    }
    if (response.length === 0 || isEmpty(response[0].inicioDataHora)) {
      throw new Error('Ordem de produção não possui 3059, 3060, 4020 ou 3160')
    }

    if (Array.isArray(response) && response.length > 0) {
      return format(new UTCDateMini(response[0].inicioDataHora), 'yyyy-MM-dd')
    }
    return ''
  }
