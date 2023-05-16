import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { TIds, TSelect } from "@/types";
import { assertIds } from "@/utils/asserts/assert-ids";
import { CrudModel } from "@/utils/crud/crud-model";
import { day } from "@/utils/date/day";
import { isEmpty } from "@/utils/identify/is-empty";
import { isUndefined } from "@/utils/identify/is-undefined";
import { module10 } from "@/utils/string/module10";
import autoBind from "auto-bind";
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
    autoBind(this);
  }

  async controle({ ids, serie }: { ids: TIds; serie: string }) {
    assertIds(ids, ordem_producao.fields);
    const id = ids[0].value;
    const serial = "000000"
      .concat((parseInt(id) / 100).toString())
      .slice(-6)
      .concat("00000".concat(serie).slice(-5));
    const dv = module10(serial);
    return serial.concat(dv);
  }

  async dataFabricacao({ ids }: { ids: TIds }) {
    assertIds(ids, ordem_producao.fields);
    const id = ids[0].value.toString();

    let response = await this.models.ordemProducaoOperacao.list({
      filters: [
        { id: "operacao_id", value: "3059" },
        { id: "ordem_producao_id", value: id },
      ],
      sorts: [{ id: "data_hora_inicio", desc: true }],
      select: ["data_hora_inicio"],
    });

    if (response.length === 0 || isEmpty(response[0].data_hora_inicio)) {
      response = await this.models.ordemProducaoOperacao.list({
        filters: [
          { id: "operacao_id", value: "3060" },
          { id: "ordem_producao_id", value: id.ordem_producao_id },
        ],
        sorts: [{ id: "data_hora_inicio", desc: true }],
        select: ["data_hora_inicio"],
      });
    }
    if (response.length === 0 || isEmpty(response[0].data_hora_inicio)) {
      response = await this.models.ordemProducaoOperacao.list({
        filters: [
          { id: "operacao_id", value: "4020" },
          { id: "ordem_producao_id", value: id.ordem_producao_id },
        ],
        sorts: [{ id: "data_hora_inicio", desc: true }],
        select: ["data_hora_inicio"],
      });
    }
    if (response.length === 0 || isEmpty(response[0].data_hora_inicio)) {
      response = await this.models.ordemProducaoOperacao.list({
        filters: [
          { id: "operacao_id", value: "3160" },
          { id: "ordem_producao_id", value: id.ordem_producao_id },
        ],
        sorts: [{ id: "data_hora_inicio", desc: true }],
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

  async dataValidade({ ids }: { ids: TIds }) {
    assertIds(ids, ordem_producao.fields);
    // const id = ids[0].value;
    const fabricacao = await this.models.ordemProducao.dataFabricacao({
      ids,
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

  async etiquetaExterna(ids: TIds) {
    assertIds(ids, ordem_producao.fields);
    let response;
    if (isUndefined(ids[0].value)) response = [];
    response = await this.models.etiquetaExterna.list({
      filters: [
        {
          id: "etiqueta_externa_id",
          value: ids[0].value.substring(0, 6) + "?",
        },
      ],
      sorts: [{ id: "etiqueta_externa_id", desc: false }],
    });
    return response;
  }

  async fromControle({ controle }: { controle: string }) {
    return controle.slice(0, 6) + "00";
  }

  async produtoItem({ ids, select }: { ids: TIds; select?: TSelect }) {
    const ordemProducao = await this.models.ordemProducao.read({
      ids,
      select: ["produto_item_id"],
    });

    if (ordemProducao.produto_item_id === undefined) {
      return {};
    }
    return this.models.produtoItem.read({
      ids: [{ id: "produto_item_id", value: ordemProducao.produto_item_id }],
      select,
    });
  }

  async produtoPlano({ ids, select }: { ids: TIds; select?: TSelect }) {
    const { produto_item_id } = await this.models.ordemProducao.produtoItem({
      ids,
    });

    return await this.models.produtoItem.produtoPlano({
      ids: [
        {
          id: "produto_item_id",
          value: produto_item_id,
        },
      ],
      select,
    });
  }
}
