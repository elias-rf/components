import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ContratoComposicao extends ModelBase {
  static tableName = "ContratoComposicao";
  static idColumn = [];

  CdFilial!: number;
  CdCliente!: number;
  DiaContrato!: number;
  CdClienteInstalacao!: number;
  DtInstalacao!: Date;
  CdProduto!: string;
  VlUnitario!: number;
  DtUltReajuste!: Date;
  VlAnterior!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "CdCliente",
      "DiaContrato",
      "CdClienteInstalacao",
      "DtInstalacao",
      "CdProduto",
      "VlUnitario",
      "DtUltReajuste",
      "VlAnterior",
      ];
  }
}

ContratoComposicao.knex(connections.plano);

export type TContratoComposicao = ModelObject<ContratoComposicao>;
