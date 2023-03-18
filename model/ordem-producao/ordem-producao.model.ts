import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { ordem_producao } from "./ordem-producao.table";
import type { TOrdemProducaoModel } from "./ordem-producao.type";
//#region import
import { day } from "../../utils/date/day";
import { isEmpty } from "../../utils/identify/is_empty";
import { module10 } from "../../utils/string/module10";
import { isSelect } from "../../utils/validate/is-select";
import { z, zod } from "../../utils/zod/z";
import { zIdClient } from "../../utils/zod/z-id-client";
import { TEtiquetaExternaRpc } from "../etiqueta-externa/etiqueta-externa.type";
import { TOrdemProducaoOperacaoRpc } from "../ordem-producao-operacao/ordem-producao-operacao.type";
import { produto_item } from "../produto-item/produto-item.table";
import { TProdutoItemRpc } from "../produto-item/produto-item.type";
import { produto_plano } from "../produto-plano/produto-plano.table";
import { ordemProducaoMethods } from "./model.methods";
import { TOrdemProducaoIds } from "./ordem-producao.type";
//#endregion

export function ordemProducaoModelFactory(
  //#region inject
  {
    connections,
    ordemProducaoOperacaoModel,
    produtoItemModel,
    etiquetaExternaModel,
  }: {
    connections: TConnections;
    ordemProducaoOperacaoModel: TOrdemProducaoOperacaoRpc;
    produtoItemModel: TProdutoItemRpc;
    etiquetaExternaModel: TEtiquetaExternaRpc;
  }
): //#endregion
TOrdemProducaoModel {
  const connection = connections[ordem_producao.database];
  const crud = crudFactory(connection, ordem_producao);

  //#region def

  //#endregion

  const model = {
    query: {
      ...crud.query,
      //#region query
      ...ordemProducaoMethods({ ordem_producao, etiquetaExternaModel }).query,
      // Retorna Produto item
      async produtoItem({ id, select }): Promise<any> {
        zIdClient(id, ordem_producao.fields);
        isSelect(select || [], produto_item.fields);
        const ordemProducao = await model.query.read({
          id,
          select: ["produto_item_id"],
        });

        if (ordemProducao.produto_item_id === undefined) {
          return {};
        }
        return produtoItemModel.query.read({
          id: { produto_item_id: ordemProducao.produto_item_id },
          select,
        });
      },

      async produtoPlano({ id, select }) {
        zIdClient(id, ordem_producao.fields);
        isSelect(select || [], produto_plano.fields);

        const { produto_item_id } = await model.query.read({
          id,
          select: ["produto_item_id"],
        });

        return await produtoItemModel.query.produtoPlano({
          id: {
            produto_item_id,
          },
          select,
        });
      },

      // Retorna data de fabricacao
      async dataFabricacao({ id }: { id: TOrdemProducaoIds }) {
        zIdClient(id, ordem_producao.fields);

        let response = await ordemProducaoOperacaoModel.query.list({
          where: [
            ["operacao_id", "=", "3059"],
            ["ordem_producao_id", "=", id.ordem_producao_id],
          ],
          order: [["data_hora_inicio", "desc"]],
          select: ["data_hora_inicio"],
        });

        if (response.length === 0 || isEmpty(response[0].data_hora_inicio)) {
          response = await ordemProducaoOperacaoModel.query.list({
            where: [
              ["operacao_id", "=", "3060"],
              ["ordem_producao_id", "=", id.ordem_producao_id],
            ],
            order: [["data_hora_inicio", "desc"]],
            select: ["data_hora_inicio"],
          });
        }
        if (response.length === 0 || isEmpty(response[0].data_hora_inicio)) {
          response = await ordemProducaoOperacaoModel.query.list({
            where: [
              ["operacao_id", "=", "4020"],
              ["ordem_producao_id", "=", id.ordem_producao_id],
            ],
            order: [["data_hora_inicio", "desc"]],
            select: ["data_hora_inicio"],
          });
        }
        if (response.length === 0 || isEmpty(response[0].data_hora_inicio)) {
          response = await ordemProducaoOperacaoModel.query.list({
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
        zIdClient(id, ordem_producao.fields);

        const fabricacao = await model.query.dataFabricacao({ id });
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
        zIdClient(id, ordem_producao.fields);
        zod(serie, z.string());

        const serial = "000000"
          .concat((parseInt(id.ordem_producao_id) / 100).toString())
          .slice(-6)
          .concat("00000".concat(serie.toString()).slice(-5));
        const dv = module10(serial);
        return serial.concat(dv);
      },

      // Retorna ordem de producao a partir de um controle
      async fromControle({ controle }) {
        zod(controle, z.string());

        return controle.slice(0, 6) + "00";
      },

      // Valida se número de série é válido
      async ehControleValido({ controle }: { controle: string }) {
        zod(controle, z.string());

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

      //#endregion
    },
    mutation: {
      ...crud.mutation,
      //#region mutation
      //#endregion
    },
    connection,
    ordem_producao,
  } as TOrdemProducaoModel;

  return model;
}

//#region other
//#endregion
