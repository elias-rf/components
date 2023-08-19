import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ContratoAluguelItem extends ModelBase {
  static tableName = "ContratoAluguelItem";
  static idColumn = [];

  CdCliente!: number;
  DiaContr!: number;
  CdProduto!: string;
  NumSerie!: string;
  Localizacao!: string;
  NmContato!: string;
  Telefone!: string;
  

  static getFields() {
    return [
      "CdCliente",
      "DiaContr",
      "CdProduto",
      "NumSerie",
      "Localizacao",
      "NmContato",
      "Telefone",
      ];
  }
}

ContratoAluguelItem.knex(connections.plano);

export type TContratoAluguelItem = ModelObject<ContratoAluguelItem>;
