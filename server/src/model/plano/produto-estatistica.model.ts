import { Id } from "@er/types";
import { idToWhere } from "@er/utils/src/id-to-where";
import { idSchema, validator } from "@er/utils/src/validator";
import { z } from "@er/utils/src/zod";
import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type ProdutoEstatisticaRecord = {
  CdEmpresa?: number;
  MesRef?: string;
  AnoRef?: string;
  CdProduto?: string;
};

export class ProdutoEstatisticaModel extends Model<ProdutoEstatisticaRecord> {
  constructor(connections: Connections) {
    super(
      connections.plano,
      "produtoEstatistica",
      "Lotes",
      ["CdFilial", "CdProduto", "CdLote"],
      [
        "Aspecto",
        "CdFilial",
        "CdFornecedor",
        "CdLote",
        "CdNRA",
        "CdProduto",
        "Densidade",
        "DtAnalise",
        "DtEntrada",
        "DtFabricacao",
        "DtLimiteUso",
        "DtValidade",
        "FatorCorrecao",
        "Modelo",
        "NumNfEntrada",
        "PercentualDiluicao",
        "QtdeAdquirida",
        "SaldoPeso",
        "SerieNfEntrada",
        "SituacaoLote",
        "TipoLote",
      ]
    );
  }

  async increment(id: Id, quantidade: number): Promise<Id> {
    validator(id, "id", idSchema);
    validator(quantidade, "quantidade", z.number());
    const qry = await this._knex(this.table)
      .increment("Entradas", quantidade)
      .where(idToWhere(this.pk, id))
      .returning(["Entradas"]);
    return qry;
  }
}
