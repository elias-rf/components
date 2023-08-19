import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Kardex extends ModelBase {
  static tableName = "Kardex";
  static idColumn = [];

  CdEmitente!: number;
  CdProduto!: string;
  TipoMov!: string;
  NumDoc!: number;
  Serie!: string;
  Data!: Date;
  Quantidade!: number;
  RzSocial!: string;
  

  static getFields() {
    return [
      "CdEmitente",
      "CdProduto",
      "TipoMov",
      "NumDoc",
      "Serie",
      "Data",
      "Quantidade",
      "RzSocial",
      ];
  }
}

Kardex.knex(connections.plano);

export type TKardex = ModelObject<Kardex>;
