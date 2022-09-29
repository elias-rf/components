import { Ids, Select } from "@er/types";
import { day } from "@er/utils/src/day";
import { isEmpty } from "@er/utils/src/is-empty";
import { module10 } from "@er/utils/src/module10";
import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { CrudModel } from "../crud/crud.model";
import { ProdutoItemModel } from "../produto-item/produto-item.model";
import { TOrdemProducao } from "./ordem-producao.type";

export class OrdemProducaoModel extends Entity<TOrdemProducao> {
  produtoItemModel: ProdutoItemModel;
  crud: CrudModel;

  constructor(connections: TConnections) {
    super(connections, "ordem_producao");
    this.produtoItemModel = new ProdutoItemModel(connections);
    this.crud = new CrudModel(connections);
  }

  // Retorna Produto item
  async produtoItem({ id, select }: { id: Ids; select?: Select }) {
    const ordemProducao = await this.read({
      id,
      select: ["produto_item_id"],
    });
    return this.produtoItemModel.read({
      id: { produto_item_id: ordemProducao.produto_item_id },
      select,
    });
  }

  async produto({ id, select }: { id: Ids; select?: Select }) {
    const produto = await this.produtoItem({
      id,
      select: ["produto_id"],
    });
    return this.crud.read({
      table: "produto",
      id: { produto_id: produto.produto_id || "" },
      select,
    });
  }

  async produtoPlano({ id, select }: { id: Ids; select?: Select }) {
    const { produto_item_id } = await this.read({
      id,
      select: ["produto_item_id"],
    });

    return await this.produtoItemModel.produtoPlano({
      id: {
        produto_item_id,
      },
      select,
    });
  }

  // Retorna data de fabricacao
  async dataFabricacao({ id }: { id: Ids }) {
    let response = await this.crud.list({
      table: "ordem_producao_operacao",
      where: [
        ["operacao_id", "=", "3059"],
        ["ordem_producao_id", "=", id.ordem_producao_id],
      ],
      order: [["data_hora_inicio", "desc"]],
      select: ["data_hora_inicio"],
    });

    if (isEmpty(response[0].data_hora_inicio)) {
      response = await this.crud.list({
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
      response = await this.crud.list({
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
      response = await this.crud.list({
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
      throw new Error("Ordem de produção não possui 3059, 3060, 4020 ou 3160");
    }

    if (Array.isArray(response) && response.length > 0) {
      return day(response[0].data_hora_inicio).format("YYYY-MM-DD");
    }
    return "";
  }

  // Retorna data de validade
  async dataValidade({ id }: { id: Ids }) {
    const fabricacao = await this.dataFabricacao({ id });
    if (fabricacao === "") {
      throw new Error("Ordem de produção não possui 3059, 3060, 4020 ou 3160");
    }
    const validade = day(fabricacao).add(5, "y").format("YYYY-MM-DD");
    return validade;
  }

  // Retorna data de validade
  async versao({ id }: { id: Ids }) {
    const rec = await this.read({
      id,
      select: ["versao"],
    });
    return rec.versao || -1;
  }

  // Retorna numero de controle a partir da ordem de producao e numero de serie
  async controle({ id, serie }: { id: Ids; serie: string | number }) {
    const serial = "000000"
      .concat((parseInt(id.ordem_producao_id) / 100).toString())
      .slice(-6)
      .concat("00000".concat(serie.toString()).slice(-5));
    const dv = module10(serial);
    return serial.concat(dv);
  }

  // Retorna ordem de producao a partir de um controle
  fromControle({ controle }: { controle: string }) {
    return controle.slice(0, 6) + "00";
  }

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
  }
}
