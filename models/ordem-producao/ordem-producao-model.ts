import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { TId, TSelect } from "@/types";
import { assertId } from "@/utils/asserts/assert-id";
import { CrudModel } from "@/utils/crud/crud-model";
import { day } from "@/utils/date/day";
import { isEmpty } from "@/utils/identify/is-empty";
import { isUndefined } from "@/utils/identify/is-undefined";
import { module10 } from "@/utils/string/module10";
import { ordem_producao } from "./ordem-producao.table";

export class OrdemProducaoModel extends CrudModel {
  models: TModels;

  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[ordem_producao.database], ordem_producao);
    this.models = models;
    models.ordemProducao = this;
  }

  /**
   * Async function that controls something.
   *
   * @param {Object} args - An object with an id and a serie
   * @param {TId} args.id - An id
   * @param {string} args.serie - A serie
   * @return {Promise<string>} A string containing a serial concatenated with a dv
   */
  async controle(args: { id: TId; serie: string }) {
    const { id, serie } = args;
    assertId(id, ordem_producao.fields);
    const fieldId = Object.keys(id)[0];
    const valueId = id[fieldId];
    const serial = "000000"
      .concat((parseInt(valueId) / 100).toString())
      .slice(-6)
      .concat("00000".concat(serie).slice(-5));
    const dv = module10(serial);
    return serial.concat(dv);
  }

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
  async dataFabricacao(args: { id: TId }) {
    const { id } = args;
    assertId(id, ordem_producao.fields);
    const fieldId = Object.keys(id)[0];
    const valueId = id[fieldId].toString();

    let response = await this.models.ordemProducaoOperacao.list({
      filter: { operacao_id: "3059", ordem_producao_id: valueId },
      sort: { data_hora_inicio: "desc" },
      select: ["data_hora_inicio"],
    });

    if (response.length === 0 || isEmpty(response[0].data_hora_inicio)) {
      response = await this.models.ordemProducaoOperacao.list({
        filter: {
          operacao_id: "3060",
          ordem_producao_id: id.ordem_producao_id,
        },
        sort: { data_hora_inicio: "desc" },
        select: ["data_hora_inicio"],
      });
    }
    if (response.length === 0 || isEmpty(response[0].data_hora_inicio)) {
      response = await this.models.ordemProducaoOperacao.list({
        filter: {
          operacao_id: "4020",
          ordem_producao_id: id.ordem_producao_id,
        },

        sort: { data_hora_inicio: "desc" },
        select: ["data_hora_inicio"],
      });
    }
    if (response.length === 0 || isEmpty(response[0].data_hora_inicio)) {
      response = await this.models.ordemProducaoOperacao.list({
        filter: {
          operacao_id: "3160",
          ordem_producao_id: id.ordem_producao_id,
        },

        sort: { data_hora_inicio: "desc" },
        select: ["data_hora_inicio"],
      });
    }
    if (response.length === 0 || isEmpty(response[0].data_hora_inicio)) {
      throw new Error("Ordem de produção não possui 3059, 3060, 4020 ou 3160");
    }

    if (Array.isArray(response) && response.length > 0) {
      return day(response[0].data_hora_inicio).format("YYYY-MM-DD");
    }
    return "";
  }

  /**
   * Validates if the given id is valid and retrieves the data fabricacao for it.
   *
   * @param {Object} args - An object containing the id of the data to validate.
   * @param {TId} args.id - The id of the data to validate.
   * @throws {Error} When the data fabricacao is blank for the given id.
   * @return {string} The validade date in the format 'YYYY-MM-DD'.
   */
  async dataValidade(args: { id: TId }) {
    const { id } = args;
    assertId(id, ordem_producao.fields);
    // const id = ids[0].value;
    const fabricacao = await this.models.ordemProducao.dataFabricacao({
      id,
    });
    if (fabricacao === "") {
      throw new Error("Ordem de produção não possui 3059, 3060, 4020 ou 3160");
    }
    const validade = day(fabricacao).add(5, "y").format("YYYY-MM-DD");
    return validade;
  }

  /**
   * Checks whether the provided control string is valid.
   *
   * @param {string} controle - the control string to be verified
   * @return {Promise<boolean>} a promise that resolves to true if the provided
   * control string is valid, otherwise false
   */
  async ehControleValido({ controle }: { controle: string }) {
    if (!controle) return false;

    if (controle.length === 12) {
      const serial = controle.substring(0, 11);
      const dv = controle.substring(11);
      if (module10(serial) === dv) {
        return true;
      }
    }
    return false;
  }

  /**
   * Asynchronously retrieves a list of external labels given an id.
   *
   * @param {Object} args - An object with an id property.
   * @param {TId} args.id - The id of the external label.
   * @return {Promise<Array>} A promise that resolves to an array of external labels.
   */
  async etiquetaExterna(args: { id: TId }) {
    const { id } = args;
    assertId(id, ordem_producao.fields);

    const fieldId = Object.keys(id)[0];
    const valueId = id[fieldId];

    if (isUndefined(valueId)) return [];
    return this.models.etiquetaExterna.list({
      filter: {
        etiqueta_externa_id: valueId.substring(0, 6) + "?",
      },
      sort: { etiqueta_externa_id: "asc" },
      limit: 1000,
    });
  }

  /**
   * Asynchronously generates a new string by slicing the first 6 characters of the input
   * string `controle`, and concatenating them with the string "00".
   *
   * @param {Object} args - An object containing the following parameter:
   *      @param {string} args.controle - The input string to be sliced.
   * @return {Promise<string>} - A promise that resolves to a string representing the
   *      modified input string.
   */
  async fromControle(args: { controle: string }) {
    const controle = args.controle;
    return controle.slice(0, 6) + "00";
  }

  /**
   * Retrieves a specific product item based on its ID.
   *
   * @param {Object} args - An object containing the ID of the product item to retrieve and an optional array of fields to select.
   * @param {TId} args.id - The ID of the product item to retrieve.
   * @param {TSelect} [args.select] - An optional array of fields to select.
   * @return {Promise<Object>} - A promise that resolves to the product item object with the specified ID and selected fields (if provided).
   */
  async produtoItem(args: { id: TId; select?: TSelect }) {
    const { id, select } = args;
    const ordemProducao = await this.models.ordemProducao.read({
      id,
      select: ["produto_item_id"],
    });

    if (ordemProducao.produto_item_id === undefined) {
      return {};
    }
    return this.models.produtoItem.read({
      id: { produto_item_id: ordemProducao.produto_item_id },
      select,
    });
  }

  /**
   * Retrieves a product plan by its ID from the database.
   *
   * @async
   * @param {object} args - The arguments object.
   * @param {TId} args.id - The ID of the product plan.
   * @param {TSelect} [args.select] - The fields to select.
   * @return {Promise<unknown>} The product plan.
   */
  async produtoPlano(args: { id: TId; select?: TSelect }) {
    const { id, select } = args;
    const { produto_item_id } = await this.models.ordemProducao.produtoItem({
      id,
      select: ["produto_item_id"],
    });

    return await this.models.produtoItem.produtoPlano({
      id: {
        produto_item_id: produto_item_id,
      },
      select,
    });
  }
}
