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

  async controle({ id, serie }: { id: TId; serie: string }) {
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

  async dataFabricacao({ id }: { id: TId }) {
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

  async dataValidade({ id }: { id: TId }) {
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

  async etiquetaExterna(id: TId) {
    assertId(id, ordem_producao.fields);

    const fieldId = Object.keys(id)[0];
    const valueId = id[fieldId];

    if (isUndefined(valueId)) return [];
    return this.models.etiquetaExterna.list({
      filter: {
        etiqueta_externa_id: valueId.substring(0, 6) + "?",
      },
      sort: { etiqueta_externa_id: "asc" },
    });
  }

  async fromControle({ controle }: { controle: string }) {
    return controle.slice(0, 6) + "00";
  }

  async produtoItem({ id, select }: { id: TId; select?: TSelect }) {
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

  async produtoPlano({ id, select }: { id: TId; select?: TSelect }) {
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
