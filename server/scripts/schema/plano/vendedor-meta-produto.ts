import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class VendedorMetaProduto extends ModelBase {
  static tableName = "VendedorMetaProduto";
  static idColumn = [];

  CdVendedor!: number;
  CdProduto!: string;
  Quantidade!: number;
  

  static getFields() {
    return [
      "CdVendedor",
      "CdProduto",
      "Quantidade",
      ];
  }
}

VendedorMetaProduto.knex(connections.plano);

export type TVendedorMetaProduto = ModelObject<VendedorMetaProduto>;
