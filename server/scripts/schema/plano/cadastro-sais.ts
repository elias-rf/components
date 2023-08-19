import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadastroSais extends ModelBase {
  static tableName = "CadastroSais";
  static idColumn = ["CdSal"];

  CdSal!: number;
  NmSal!: string;
  AbreviaturaSal!: string;
  DoseMinima!: number;
  DoseMaxima!: number;
  Volume!: number;
  FgControlado!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdSal",
      "NmSal",
      "AbreviaturaSal",
      "DoseMinima",
      "DoseMaxima",
      "Volume",
      "FgControlado",
      "DtUltAlteracao",
      ];
  }
}

CadastroSais.knex(connections.plano);

export type TCadastroSais = ModelObject<CadastroSais>;
