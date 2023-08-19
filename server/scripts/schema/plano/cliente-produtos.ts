import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ClienteProdutos extends ModelBase {
  static tableName = "ClienteProdutos";
  static idColumn = [];

  CdCliente!: number;
  CdProduto!: string;
  VlVenda!: number;
  VlAtacado!: number;
  

  static getFields() {
    return [
      "CdCliente",
      "CdProduto",
      "VlVenda",
      "VlAtacado",
      ];
  }
}

ClienteProdutos.knex(connections.plano);

export type TClienteProdutos = ModelObject<ClienteProdutos>;
