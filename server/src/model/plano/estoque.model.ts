import { Id } from "@er/types";
import { idSchema, idToWhere, validator, z } from "../../../../utils/src";
import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type EstoqueRecord = {
  CdEmpresa?: string;
  CdProduto?: string;
  EstAtual?: string;
};

export class EstoqueModel extends Model<EstoqueRecord> {
  constructor(connections: Connections) {
    super(
      connections.plano,
      "estoque",
      "Estoque",
      ["CdEmpresa", "CdProduto"],
      ["CdCliente", "RzSocial", "Cidade", "Uf", "CGC", "CdVendedor", "FgAtivo"]
    );
  }

  increment(id: Id, quantidade: number) {
    validator(id, "id", idSchema);
    validator(quantidade, "quantidade", z.number());

    return super
      ._knex(super.table)
      .increment("EstAtual", quantidade)
      .where(idToWhere(super.pk, id))
      .returning(["EstAtual"]);
  }
}
