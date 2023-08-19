import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ContratoItem extends ModelBase {
  static tableName = "ContratoItem";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  CdCliente!: number;
  DiaContrato!: number;
  Sequencia!: number;
  CdClienteInstalacao!: number;
  CdProduto!: string;
  Quantidade!: number;
  VlUnitario!: number;
  DtInclusao!: Date;
  DtUltReajuste!: Date;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "CdCliente",
      "DiaContrato",
      "Sequencia",
      "CdClienteInstalacao",
      "CdProduto",
      "Quantidade",
      "VlUnitario",
      "DtInclusao",
      "DtUltReajuste",
      ];
  }
}

ContratoItem.knex(connections.plano);

export type TContratoItem = ModelObject<ContratoItem>;
