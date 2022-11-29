import { TConnections, TGenericObject, TIds, TSelect } from "../../../types";
import { TProdutoPlano } from "../../../types/produto_plano.type";
import { day } from "../../../utils/date/day";
import { isEmpty } from "../../../utils/identify/is_empty";
import { module10 } from "../../../utils/string/module10";
import { crudModel } from "../crud/crud.model";
import { produtoItemModel } from "../produto_item/produto_item.model";

export function ordemProducaoModel(connections: TConnections) {
  const produtoItemMdl = produtoItemModel(connections);
  const crud = crudModel(connections);

  return {
    // Retorna Produto item
    async produtoItem({
      id,
      select,
    }: {
      id: TIds;
      select?: TSelect;
    }): Promise<any> {
      const ordemProducao = await crud.read({
        table: "ordem_producao",
        id,
        select: ["produto_item_id"],
      });
      return crud.read({
        table: "produto_item",
        id: { produto_item_id: ordemProducao.produto_item_id },
        select,
      });
    },

    async produto({
      id,
      select,
    }: {
      id: TIds;
      select?: TSelect;
    }): Promise<TGenericObject> {
      const produto: any = await this.produtoItem({
        id,
        select: ["produto_id"],
      });
      return crud.read({
        table: "produto",
        id: { produto_id: produto.produto_id || "" },
        select,
      });
    },

    async produtoPlano({
      id,
      select,
    }: {
      id: TIds;
      select?: TSelect;
    }): Promise<TProdutoPlano> {
      const { produto_item_id } = await crud.read({
        table: "ordem_producao",
        id,
        select: ["produto_item_id"],
      });

      return await produtoItemMdl.produtoPlano({
        id: {
          produto_item_id,
        },
        select,
      });
    },

    // Retorna data de fabricacao
    async dataFabricacao({ id }: { id: TIds }) {
      let response = await crud.list({
        table: "ordem_producao_operacao",
        where: [
          ["operacao_id", "=", "3059"],
          ["ordem_producao_id", "=", id.ordem_producao_id],
        ],
        order: [["data_hora_inicio", "desc"]],
        select: ["data_hora_inicio"],
      });

      if (isEmpty(response[0].data_hora_inicio)) {
        response = await crud.list({
          table: "ordem_producao_operacao",
          where: [
            ["operacao_id", "=", "3060"],
            ["ordem_producao_id", "=", id.ordem_producao_id],
          ],
          order: [["DataHoraInicio", "desc"]],
          select: ["data_hora_inicio"],
        });
      }
      if (isEmpty(response[0].data_hora_inicio)) {
        response = await crud.list({
          table: "ordem_producao_operacao",
          where: [
            ["operacao_id", "=", "4020"],
            ["ordem_producao_id", "=", id.ordem_producao_id],
          ],
          order: [["DataHoraInicio", "desc"]],
          select: ["data_hora_inicio"],
        });
      }
      if (isEmpty(response[0].data_hora_inicio)) {
        response = await crud.list({
          table: "ordem_producao_operacao",
          where: [
            ["operacao_id", "=", "3160"],
            ["ordem_producao_id", "=", id.ordem_producao_id],
          ],
          order: [["DataHoraInicio", "desc"]],
          select: ["data_hora_inicio"],
        });
      }
      if (isEmpty(response[0].data_hora_inicio)) {
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
    async dataValidade({ id }: { id: TIds }) {
      const fabricacao = await this.dataFabricacao({ id });
      if (fabricacao === "") {
        throw new Error(
          "Ordem de produção não possui 3059, 3060, 4020 ou 3160"
        );
      }
      const validade = day(fabricacao).add(5, "y").format("YYYY-MM-DD");
      return validade;
    },

    // Retorna data de validade
    async versao({ id }: { id: TIds }) {
      const rec = await crud.read({
        table: "ordem_producao",
        id,
        select: ["versao"],
      });
      return rec.versao || -1;
    },

    // Retorna numero de controle a partir da ordem de producao e numero de serie
    async controle({ id, serie }: { id: TIds; serie: string | number }) {
      const serial = "000000"
        .concat((parseInt(id.ordem_producao_id) / 100).toString())
        .slice(-6)
        .concat("00000".concat(serie.toString()).slice(-5));
      const dv = module10(serial);
      return serial.concat(dv);
    },

    // Retorna ordem de producao a partir de um controle
    fromControle({ controle }: { controle: string }) {
      return controle.slice(0, 6) + "00";
    },

    // Valida se número de série é válido
    isControleValid({ controle }: { controle: string }) {
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
  };
}
