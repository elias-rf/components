import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadProFoto extends ModelBase {
  static tableName = "CadProFoto";
  static idColumn = ["CdProduto"];

  CdProduto!: string;
  Foto!: any;


  static getFields() {
    return [
      "CdProduto",
      "Foto",
      ];
  }
}

CadProFoto.knex(connections.plano);

export type TCadProFoto = ModelObject<CadProFoto>;
