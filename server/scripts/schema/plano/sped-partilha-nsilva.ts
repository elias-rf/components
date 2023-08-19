import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SpedPartilhaNsilva extends ModelBase {
  static tableName = "SpedPartilhaNSILVA";
  static idColumn = [];

  UF!: string;
  ORIGEM_DESTINO!: string;
  VL_SLD_CRED_ANT_DIFAL!: number;
  VL_TOT_DEBITOS_DIFAL!: number;
  VL_OUT_DEB_DIFAL!: number;
  VL_TOT_CREDITOS_DIFAL!: number;
  VL_OUT_CRED_DIFAL!: number;
  VL_SLD_DEV_ANT_DIFAL!: number;
  VL_DEDUCOES_DIFAL!: number;
  VL_RECOL_DIFAL!: number;
  VL_SLD_CRED_TRANSPORTAR_DIFAL!: number;
  DEB_ESP_DIFAL!: number;
  VL_SLD_CRED_ANT_FCP!: number;
  VL_TOT_DEB_FCP!: number;
  VL_OUT_DEB_FCP!: number;
  VL_TOT_CRED_FCP!: number;
  VL_OUT_CRED_FCP!: number;
  VL_SLD_DEV_ANT_FCP!: number;
  VL_DEDUCOES_FCP!: number;
  VL_RECOL_FCP!: number;
  VL_SLD_CRED_TRANSPORTAR_FCP!: number;
  DEB_ESP_FCP!: number;
  

  static getFields() {
    return [
      "UF",
      "ORIGEM_DESTINO",
      "VL_SLD_CRED_ANT_DIFAL",
      "VL_TOT_DEBITOS_DIFAL",
      "VL_OUT_DEB_DIFAL",
      "VL_TOT_CREDITOS_DIFAL",
      "VL_OUT_CRED_DIFAL",
      "VL_SLD_DEV_ANT_DIFAL",
      "VL_DEDUCOES_DIFAL",
      "VL_RECOL_DIFAL",
      "VL_SLD_CRED_TRANSPORTAR_DIFAL",
      "DEB_ESP_DIFAL",
      "VL_SLD_CRED_ANT_FCP",
      "VL_TOT_DEB_FCP",
      "VL_OUT_DEB_FCP",
      "VL_TOT_CRED_FCP",
      "VL_OUT_CRED_FCP",
      "VL_SLD_DEV_ANT_FCP",
      "VL_DEDUCOES_FCP",
      "VL_RECOL_FCP",
      "VL_SLD_CRED_TRANSPORTAR_FCP",
      "DEB_ESP_FCP",
      ];
  }
}

SpedPartilhaNsilva.knex(connections.plano);

export type TSpedPartilhaNsilva = ModelObject<SpedPartilhaNsilva>;
