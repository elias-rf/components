import { Ids, Select } from "@er/types";
import { day } from "@er/utils/src/day";
import { isEmpty } from "@er/utils/src/is-empty";
import { module10 } from "@er/utils/src/module10";
import { TConnections } from "../dal/connections";
import { TOrdemProducao } from "../type/ordem-producao.type";
import { TProdutoItem } from "../type/produto-item.type";
import { TProdutoPlano } from "../type/produto-plano.type";
import { Entity } from "./entity";
import { OrdemProducaoOperacaoModel } from "./ordem-producao-operacao.model";
import { ProdutoItemModel } from "./produto-item.model";
import { ProdutoPlanoModel } from "./produto-plano.model";
import { ProdutoModel } from "./produto.model";

export class OrdemProducaoModel extends Entity<TOrdemProducao> {
  produtoItemModel: ProdutoItemModel;
  produtoModel: ProdutoModel;
  produtoPlanoModel: ProdutoPlanoModel;
  ordemProducaoOperacaoModel: OrdemProducaoOperacaoModel;

  constructor(connections: TConnections) {
    super(connections, "cliente");
    this.produtoItemModel = new ProdutoItemModel(connections);
    this.produtoModel = new ProdutoModel(connections);
    this.produtoPlanoModel = new ProdutoPlanoModel(connections);
    this.ordemProducaoOperacaoModel = new OrdemProducaoOperacaoModel(
      connections
    );
  }

  // Retorna Produto item
  async produtoItem({id, select}:{id: Ids<TOrdemProducao>, select?:Select<TProdutoItem>}) {
    const { fkProdutoItem } = await this.read({
      id,
      select: ["fkProdutoItem"],
    });
    return this.produtoItemModel.read({ id: {fkProdutoItem || ""}, select });
  }

  async produto({
    id,
    select,
  }: {
    id: Ids<TOrdemProducao>;
    select?: Select<TProdutoPlano>;
  }) {
    const { fkProdutoItem } = await this.read({
      id,
      select: ["fkProdutoItem"],
    });
    const { fkProduto } = await this.produtoItemModel.read({
      id: { produto_item_id: fkProdutoItem || "" },
    });
    return this.produtoModel.read({
      id: { produto_id: fkProduto || "" },
      select,
    });
  }
  async produtoPlano(id: Ids<TOrdemProducao>, select?: string[]) {
    const { fkProdutoItem } = await this.read(id, ["fkProdutoItem"]);
    let { idVisiontech } = await this.produtoItemModel.read([
      fkProdutoItem || "",
    ]);
    if (!idVisiontech === undefined) {
      idVisiontech = idVisiontech?.trim();
    }
    return this.produtoPlanoModel.read([idVisiontech || ""]);
  }

  // Retorna data de fabricacao
  async dataFabricacao(id: Ids<TOrdemProducao>) {
    let response = await this.ordemProducaoOperacaoModel.list(
      [
        ["fkOperacao", "=", "3059"],
        ["fkOp", "=", id[0]],
      ],
      [["DataHoraInicio", "desc"]]
    );

    if (isEmpty(response[0].DataInicio)) {
      let response = await this.ordemProducaoOperacaoModel.list(
        [
          ["fkOperacao", "=", "3060"],
          ["fkOp", "=", id[0]],
        ],
        [["DataHoraInicio", "desc"]]
      );
      if (isEmpty(response[0].DataInicio)) {
        let response = await this.ordemProducaoOperacaoModel.list(
          [
            ["fkOperacao", "=", "4020"],
            ["fkOp", "=", id[0]],
          ],
          [["DataHoraInicio", "desc"]]
        );
      }
      if (isEmpty(response[0].DataInicio)) {
        let response = await this.ordemProducaoOperacaoModel.list(
          [
            ["fkOperacao", "=", "3160"],
            ["fkOp", "=", id[0]],
          ],
          [["DataHoraInicio", "desc"]]
        );
      }
      if (isEmpty(response[0].DataInicio)) {
        throw new Error(
          "Ordem de produção não possui 3059, 3060, 4020 ou 3160"
        );
      }
    }
    if (Array.isArray(response) && response.length > 0) {
      return day(response[0].DataInicio).toISOString();
    }
    return "";
  }

  // Retorna data de validade
  async dataValidade(id: Ids<TOrdemProducao>) {
    const fabricacao = await this.dataFabricacao(id);
    if (fabricacao === "") {
      throw new Error("Ordem de produção não possui 3059, 3060, 4020 ou 3160");
    }
    const validade = day(fabricacao).add(5, "y").toISOString();
    return validade;
  }

  // Retorna data de validade
  async versao(id: Ids<TOrdemProducao>) {
    const rec = (await this.read(id)) as TOrdemProducao;
    return rec.versao || "";
  }

  // Retorna numero de controle a partir da ordem de producao e numero de serie
  async controle(id: Ids<TOrdemProducao>, serie: string) {
    const serial = "000000"
      .concat((parseInt(id[0]) / 100).toString())
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
