import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadProFarmacia extends ModelBase {
  static tableName = "CadProFarmacia";
  static idColumn = ["CdProduto"];

  CdProduto!: string;
  FgUsoContinuo!: string;
  PosologiaDia!: number;
  QtdeDoses!: number;
  NumRegistroProduto!: string;
  FgEnvioCaneta!: string;
  NumDosesDia!: number;
  MedidaDoses!: string;
  FgSNGPC!: string;
  FgVendaAtiva!: string;
  FgTermoLabel!: string;
  ObsTermoLabel!: string;
  NmMedicamento!: string;
  Apresentacao!: string;
  FgMedicamento!: string;
  FgTipoMedicamento!: number;
  MotivoIsencao!: string;
  

  static getFields() {
    return [
      "CdProduto",
      "FgUsoContinuo",
      "PosologiaDia",
      "QtdeDoses",
      "NumRegistroProduto",
      "FgEnvioCaneta",
      "NumDosesDia",
      "MedidaDoses",
      "FgSNGPC",
      "FgVendaAtiva",
      "FgTermoLabel",
      "ObsTermoLabel",
      "NmMedicamento",
      "Apresentacao",
      "FgMedicamento",
      "FgTipoMedicamento",
      "MotivoIsencao",
      ];
  }
}

CadProFarmacia.knex(connections.plano);

export type TCadProFarmacia = ModelObject<CadProFarmacia>;
