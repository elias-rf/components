import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadCliAmiVida extends ModelBase {
  static tableName = "CadCliAMIVida";
  static idColumn = ["CdCliente"];

  CdCliente!: number;
  FgEnvioMaterial!: string;
  FgEnvioBrindes!: string;
  FgTeleAtivo!: string;
  DtUltContato!: Date;
  Observacao!: string;
  

  static getFields() {
    return [
      "CdCliente",
      "FgEnvioMaterial",
      "FgEnvioBrindes",
      "FgTeleAtivo",
      "DtUltContato",
      "Observacao",
      ];
  }
}

CadCliAmiVida.knex(connections.plano);

export type TCadCliAmiVida = ModelObject<CadCliAmiVida>;
