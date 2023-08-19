import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadCliMetas extends ModelBase {
  static tableName = "CadCliMetas";
  static idColumn = [];

  CdCliente!: number;
  MesReferencia!: Date;
  VlMeta!: number;
  VlMetaAjustada!: number;
  QtdeMeta!: number;
  QtdeMetaAjustada!: number;
  DtUltAtualizacao!: Date;
  

  static getFields() {
    return [
      "CdCliente",
      "MesReferencia",
      "VlMeta",
      "VlMetaAjustada",
      "QtdeMeta",
      "QtdeMetaAjustada",
      "DtUltAtualizacao",
      ];
  }
}

CadCliMetas.knex(connections.plano);

export type TCadCliMetas = ModelObject<CadCliMetas>;
