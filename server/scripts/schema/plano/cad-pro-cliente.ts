import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadProCliente extends ModelBase {
  static tableName = "CadProCliente";
  static idColumn = [];

  CdCliente!: number;
  CdProduto!: string;
  CdReferenciaCliente!: string;
  DtUltAlteracao!: Date;
  NumItemPedido!: string;
  

  static getFields() {
    return [
      "CdCliente",
      "CdProduto",
      "CdReferenciaCliente",
      "DtUltAlteracao",
      "NumItemPedido",
      ];
  }
}

CadProCliente.knex(connections.plano);

export type TCadProCliente = ModelObject<CadProCliente>;
