import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CePs extends ModelBase {
  static tableName = "CEPs";
  static idColumn = [];

  CEP!: string;
  CdCidade!: number;
  NmLogradouroInteiro!: string;
  NmLogradouro!: string;
  TipoLogradouro!: string;
  Bairro!: string;
  

  static getFields() {
    return [
      "CEP",
      "CdCidade",
      "NmLogradouroInteiro",
      "NmLogradouro",
      "TipoLogradouro",
      "Bairro",
      ];
  }
}

CePs.knex(connections.plano);

export type TCePs = ModelObject<CePs>;
