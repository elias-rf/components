import { dbOftalmo } from '@/controllers/db/db-oftalmo.db'
import { etiquetaExternaController } from '@/controllers/etiqueta-externa_controller'
import { ordemProducaoOperacaoController } from '@/controllers/ordem-producao-operacao_controller'
import {
  TProdutoItemFields,
  produtoItemController,
} from '@/controllers/produto-item_controller'
import { TProdutoPlanoFields } from '@/controllers/produto-plano_controller'
import { OrmDatabase, ormTable } from '@/orm'
import type { TSchema } from '@/schemas/schema.type'
import { day } from '@/utils/date/day'
import { isEmpty } from '@/utils/identify/is-empty'
import { isUndefined } from '@/utils/identify/is-undefined'
import { module10 } from '@/utils/string/module10'

export const tOrdemProducao: TSchema = {
  table: 'tOrdemProducao',
  primary: ['kOp'] as const,
  relations: {
    operacoes: {
      method: () =>
        import('./ordem-producao-operacao_controller').then(
          (m) => m.ordemProducaoOperacaoController.list
        ),
      where: [['fkOp', 'kOp']],
    },
    produtoItem: {
      method: () =>
        import('./produto-item_controller').then(
          (m) => m.produtoItemController.read
        ),

      where: [['kProdutoItem', 'fkProdutoItem']],
    },
  },
  fields: [
    'kOp',
    'ChaveAntiga',
    'fkTipoOP',
    'DataEmissao',
    'DataFechamento',
    'Travado',
    'fkOpPai',
    'LoteFabricante',
    'NomeUsuario',
    'fkOPBotao',
    'fkOPBotaoAntiga',
    'ViaAntiga',
    'fkOPLoop',
    'fkOPLoopAntiga',
    'fkProdutoItem',
    'Quantidade',
    'QtdEmProcesso',
    'Broca',
    'fkLoteEstExt',
    'fkLoteEstInt',
    'EspessuraBotao',
    'DiametroBotao',
    'LoteBotaoTerceiro',
    'QtdFilamentosLoop',
    'EspessuraLoop',
    'ModeloLoop',
    'TamanhoLoop',
    'Partida',
    'ClasseOP',
    'fkPrimeiraOperacao',
    'CalcularEmProcesso',
    'Selecao',
    'QtdEstExt_tmp',
    'Obs',
    'Expiracao',
    'OPVerificada',
    'CriticaLancamento',
    'fkOPMestre',
    'DataUltimoLancamento',
    'IndiceRefracao',
    'IndiceRefracao2',
    'EtiqInternaImpressa',
    'ExportadoSANKHYA',
    'deleted',
    'ts',
    'versao',
    'emProcesso',
    'fkOperacaoEmProcesso',
    'loteTamboreamento',
    'raio',
  ] as const,
}

export type TOrdemProducaoFields = (typeof tOrdemProducao.fields)[number]
export type TOrdemProducaoKeys = (typeof tOrdemProducao.primary)[number]

function ordemProducaoControllerFactory(db: OrmDatabase, schema: TSchema) {
  const orm = ormTable<TOrdemProducaoFields, TOrdemProducaoKeys>(db, schema)

  /**
   * Async function that controls something.
   *
   * @param {Object} args - An object with an id and a serie
   * @param {TId} args.id - An id
   * @param {string} args.serie - A serie
   * @return {Promise<string>} A string containing a serial concatenated with a dv
   */
  const controle = async ({
    id,
    serie,
  }: {
    id: [['kOp', number]]
    serie: string
  }) => {
    orm.util.validId(id)
    const [[_, value]] = id
    const serial = '000000'
      .concat((value / 100).toString())
      .slice(-6)
      .concat('00000'.concat(serie).slice(-5))
    const dv = module10(serial)
    return serial.concat(dv)
  }
  controle.rpc = true

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
  async function dataFabricacao({ id }: { id: [['kOp', number]] }) {
    const [[_, value]] = id
    let response = await ordemProducaoOperacaoController.list({
      where: [
        ['fkOperacao', 3059],
        ['fkOp', value],
      ],
      orderBy: [['DataHoraInicio', 'desc']],
      select: ['DataHoraInicio'],
    })

    if (response.length === 0 || isEmpty(response[0].DataHoraInicio)) {
      response = await ordemProducaoOperacaoController.list({
        where: [
          ['fkOperacao', 3060],
          ['fkOp', value],
        ],
        orderBy: [['DataHoraInicio', 'desc']],
        select: ['DataHoraInicio'],
      })
    }
    if (response.length === 0 || isEmpty(response[0].DataHoraInicio)) {
      response = await ordemProducaoOperacaoController.list({
        where: [
          ['fkOperacao', 4020],
          ['fkOp', value],
        ],
        orderBy: [['DataHoraInicio', 'desc']],
        select: ['DataHoraInicio'],
      })
    }
    if (response.length === 0 || isEmpty(response[0].DataHoraInicio)) {
      response = await ordemProducaoOperacaoController.list({
        where: [
          ['fkOperacao', 3160],
          ['fkOp', value],
        ],
        orderBy: [['DataHoraInicio', 'desc']],
        select: ['DataHoraInicio'],
      })
    }
    if (response.length === 0 || isEmpty(response[0].DataHoraInicio)) {
      throw new Error('Ordem de produção não possui 3059, 3060, 4020 ou 3160')
    }

    if (Array.isArray(response) && response.length > 0) {
      return day(response[0].DataHoraInicio).format('YYYY-MM-DD')
    }
    return ''
  }
  dataFabricacao.rpc = true

  /**
   * Validates if the given id is valid and retrieves the data fabricacao for it.
   *
   * @param {Object} args - An object containing the id of the data to validate.
   * @param {TId} args.id - The id of the data to validate.
   * @throws {Error} When the data fabricacao is blank for the given id.
   * @return {string} The validade date in the format 'YYYY-MM-DD'.
   */
  const dataValidade = async ({ id }: { id: [['kOp', number]] }) => {
    const fabricacao = await dataFabricacao({ id })
    if (fabricacao === '') {
      throw new Error('Ordem de produção não possui 3059, 3060, 4020 ou 3160')
    }
    const validade = day(fabricacao).add(5, 'y').format('YYYY-MM-DD')
    return validade
  }
  dataValidade.rpc = true

  /**
   * Checks whether the provided control string is valid.
   *
   * @param {string} controle - the control string to be verified
   * @return {Promise<boolean>} a promise that resolves to true if the provided
   * control string is valid, otherwise false
   */
  const ehControleValido = async ({ controle }: { controle: string }) => {
    if (!controle) return false

    if (controle.length === 12) {
      const serial = controle.substring(0, 11)
      const dv = controle.substring(11)
      if (module10(serial) === dv) {
        return true
      }
    }
    return false
  }
  ehControleValido.rpc = true

  /**
   * Asynchronously retrieves a list of external labels given an id.
   *
   * @param {Object} args - An object with an id property.
   * @param {TId} args.id - The id of the external label.
   * @return {Promise<Array>} A promise that resolves to an array of external labels.
   */
  const etiquetaExterna = async ({ id }: { id: [['kOp', number]] }) => {
    const [[_, value]] = id
    if (isUndefined(value)) return []
    return etiquetaExternaController.list({
      where: [
        ['controle', 'like', ('000000' + value.toString()).slice(-8, -2) + '%'],
      ],
      orderBy: [['controle', 'asc']],
      limit: 1000,
    })
  }
  etiquetaExterna.rpc = true

  /**
   * Asynchronously generates a new string by slicing the first 6 characters of the input
   * string `controle`, and concatenating them with the string "00".
   *
   * @param {Object} args - An object containing the following parameter:
   *      @param {string} args.controle - The input string to be sliced.
   * @return {Promise<string>} - A promise that resolves to a string representing the
   *      modified input string.
   */
  const fromControle = async ({ controle }: { controle: string }) => {
    return parseInt(controle.slice(0, 6) + '00')
  }
  fromControle.rpc = true

  /**
   * Retrieves a specific product item based on its ID.
   *
   * @param {Object} args - An object containing the ID of the product item to retrieve and an optional array of fields to select.
   * @param {TId} args.id - The ID of the product item to retrieve.
   * @param {TSelect} [args.select] - An optional array of fields to select.
   * @return {Promise<Object>} - A promise that resolves to the product item object with the specified ID and selected fields (if provided).
   */
  const produtoItem = async ({
    id,
    select,
  }: {
    id: [['kOp', number]]
    select?: Array<TProdutoItemFields>
  }): Promise<Record<TProdutoItemFields, any> | object> => {
    const ordemProducao = await orm.rpc.read({
      where: [['kOp', id[0][1]]],
      select: ['fkProdutoItem'],
    })

    if (ordemProducao.fkProdutoItem === undefined) {
      return {}
    }
    return produtoItemController.read({
      where: [['kProdutoItem', ordemProducao.fkProdutoItem]],
      select,
    })
  }
  produtoItem.rpc = true
  /**
   * Retrieves a product plan by its ID from the database.
   *
   * @async
   * @param {object} args - The arguments object.
   * @param {TId} args.id - The ID of the product plan.
   * @param {TSelect} [args.select] - The fields to select.
   * @return {Promise<unknown>} The product plan.
   */
  const produtoPlano = async ({
    id,
    select,
  }: {
    id: [['kOp', number]]
    select?: Array<TProdutoPlanoFields>
  }): Promise<Record<TProdutoPlanoFields, any> | object> => {
    const { kProdutoItem } = (await produtoItem({
      id: [['kOp', id[0][1]]],
      select: ['kProdutoItem'],
    })) as Record<TProdutoItemFields, any>

    if (kProdutoItem === undefined) {
      return {}
    }
    return await produtoItemController.produtoPlano({
      id: [['kProdutoItem', kProdutoItem]],
      select,
    })
  }
  produtoPlano.rpc = true

  return {
    ...orm.rpc,
    controle,
    dataFabricacao,
    dataValidade,
    ehControleValido,
    etiquetaExterna,
    produtoItem,
    produtoPlano,
    fromControle,
  }
}

export const ordemProducaoController = ordemProducaoControllerFactory(
  dbOftalmo,
  tOrdemProducao
)