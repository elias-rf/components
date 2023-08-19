import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EstoqueDistribuicao extends ModelBase {
  static tableName = "EstoqueDistribuicao";
  static idColumn = [];

  CdEmpresa!: number;
  CdProduto!: string;
  CdLocalEstoque!: number;
  EstAtual!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdProduto",
      "CdLocalEstoque",
      "EstAtual",
      ];
  }
}

EstoqueDistribuicao.knex(connections.plano);

export type TEstoqueDistribuicao = ModelObject<EstoqueDistribuicao>;
