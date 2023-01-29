import { TConnections } from "../../../types";
import { TEtiquetaExterna } from "../../../types/etiqueta-externa.type";
import {
  TOrdemProducaoIds,
  TOrdemProducaoRpc,
} from "../../../types/ordem-producao.type";
import { day } from "../../../utils/date/day";
import { isUndefined } from "../../../utils/identify/is-undefined";
import { isEmpty } from "../../../utils/identify/is_empty";
import { module10 } from "../../../utils/string/module10";
import { crudModel } from "../crud/crud.model";
import { produtoItemModel } from "../produto-item/produto-item.model";

const table = "ordem_producao";

export function ordemProducaoModel(
  connections: TConnections
): TOrdemProducaoRpc {
  const produtoItem = produtoItemModel(connections);
  const crud = crudModel(connections);

  const rsp: TOrdemProducaoRpc = {
    query: {
      async schema() {
        return crud.schema({ table });
      },
      async clear() {
        return crud.clear({ table });
      },
      async list({ where, order, select, limit }) {
        return crud.list({ table, where, order, select, limit });
      },
      async read({ id, select }) {
        return crud.read({ table, id, select });
      },
      // Retorna Produto item
      async produtoItem({ id, select }): Promise<any> {
        const ordemProducao = await rsp.query.read({
          id,
          select: ["produto_item_id"],
        });

        if (ordemProducao.produto_item_id === undefined) {
          return {};
        }
        return produtoItem.query.read({
          id: { produto_item_id: ordemProducao.produto_item_id },
          select,
        });
      },

      async produtoPlano({ id, select }) {
        const { produto_item_id } = await rsp.query.read({
          id,
          select: ["produto_item_id"],
        });

        return await produtoItem.query.plano({
          id: {
            produto_item_id,
          },
          select,
        });
      },

      // Retorna data de fabricacao
      async dataFabricacao({ id }: { id: TOrdemProducaoIds }) {
        let response = await crud.list({
          table: "ordem_producao_operacao",
          where: [
            ["operacao_id", "=", "3059"],
            ["ordem_producao_id", "=", id.ordem_producao_id],
          ],
          order: [["data_hora_inicio", "desc"]],
          select: ["data_hora_inicio"],
        });

        if (response.length === 0 || isEmpty(response[0].data_hora_inicio)) {
          response = await crud.list({
            table: "ordem_producao_operacao",
            where: [
              ["operacao_id", "=", "3060"],
              ["ordem_producao_id", "=", id.ordem_producao_id],
            ],
            order: [["data_hora_inicio", "desc"]],
            select: ["data_hora_inicio"],
          });
        }
        if (response.length === 0 || isEmpty(response[0].data_hora_inicio)) {
          response = await crud.list({
            table: "ordem_producao_operacao",
            where: [
              ["operacao_id", "=", "4020"],
              ["ordem_producao_id", "=", id.ordem_producao_id],
            ],
            order: [["data_hora_inicio", "desc"]],
            select: ["data_hora_inicio"],
          });
        }
        if (response.length === 0 || isEmpty(response[0].data_hora_inicio)) {
          response = await crud.list({
            table: "ordem_producao_operacao",
            where: [
              ["operacao_id", "=", "3160"],
              ["ordem_producao_id", "=", id.ordem_producao_id],
            ],
            order: [["data_hora_inicio", "desc"]],
            select: ["data_hora_inicio"],
          });
        }
        if (response.length === 0 || isEmpty(response[0].data_hora_inicio)) {
          throw new Error(
            "Ordem de produção não possui 3059, 3060, 4020 ou 3160"
          );
        }

        if (Array.isArray(response) && response.length > 0) {
          return day(response[0].data_hora_inicio).format("YYYY-MM-DD");
        }
        return "";
      },

      // Retorna data de validade
      async dataValidade({ id }) {
        const fabricacao = await rsp.query.dataFabricacao({ id });
        if (fabricacao === "") {
          throw new Error(
            "Ordem de produção não possui 3059, 3060, 4020 ou 3160"
          );
        }
        const validade = day(fabricacao).add(5, "y").format("YYYY-MM-DD");
        return validade;
      },

      // Retorna numero de controle a partir da ordem de producao e numero de serie
      async controle({ id, serie }) {
        const serial = "000000"
          .concat((parseInt(id.ordem_producao_id) / 100).toString())
          .slice(-6)
          .concat("00000".concat(serie.toString()).slice(-5));
        const dv = module10(serial);
        return serial.concat(dv);
      },

      // Retorna ordem de producao a partir de um controle
      async fromControle({ controle }) {
        return controle.slice(0, 6) + "00";
      },

      // Valida se número de série é válido
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
      },
      async etiquetaExterna({ id: { ordem_producao_id } }) {
        let response: TEtiquetaExterna[];
        if (isUndefined(ordem_producao_id)) response = [];
        response = (await crud.list({
          table: "etiqueta_externa",
          where: [
            [
              "etiqueta_externa_id",
              "like",
              ordem_producao_id.substring(0, 6) + "%",
            ],
          ],
          order: [["etiqueta_externa_id", "asc"]],
          limit: 200,
        })) as TEtiquetaExterna[];
        return response;
      },
    },
    mutation: {
      async del({ id }) {
        return crud.del({ table, id });
      },
      async create({ data }) {
        return crud.create({ table, data });
      },
      async update({ id, data }) {
        return crud.update({ table, id, data });
      },
    },
  };
  return rsp;
}
