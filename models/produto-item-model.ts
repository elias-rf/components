import { ProdutoItem } from "@/database";
import { produtoPlanoModel } from "@/models/produto-plano-model";
import { TSelect } from "@/types";
import { CrudObjection } from "@/models/utils/crud-objection";

class ProdutoItemModel extends CrudObjection {
  constructor() {
    super(ProdutoItem);
  }

  produtoPlano = async ({
    id,
    select,
  }: {
    id: { kProdutoItem: string };
    select?: TSelect;
  }) => {
    let { IdVisiontech } = await this.read({
      id: { kProdutoItem: id.kProdutoItem },
      select: ["IdVisiontech"],
    });

    if (IdVisiontech) {
      IdVisiontech = IdVisiontech?.trim();
      return produtoPlanoModel.read({
        id: { CdProduto: IdVisiontech },
        select,
      });
    }
    return [];
  };
}

export const produtoItemModel = new ProdutoItemModel();
