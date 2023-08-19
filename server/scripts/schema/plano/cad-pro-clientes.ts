import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadProClientes extends ModelBase {
  static tableName = "CadProClientes";
  static idColumn = [];

  CdCliente!: number;
  CdProduto!: string;
  CdReferenciaCliente!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdCliente",
      "CdProduto",
      "CdReferenciaCliente",
      "DtUltAlteracao",
      ];
  }
}

CadProClientes.knex(connections.plano);

export type TCadProClientes = ModelObject<CadProClientes>;
