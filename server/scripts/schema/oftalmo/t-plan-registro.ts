import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TPlanRegistro extends ModelBase {
  static tableName = "tPlanRegistro";
  static idColumn = ["kPlanRegistro"];

  kPlanRegistro!: number;
  fkPlanComponente!: number;
  DataPrevista!: Date;
  DataRealizada!: Date;
  Observacao!: string;
  Responsavel!: string;
  Fabricante!: string;
  Modelo!: string;
  NumeroSerie!: string;
  Localizacao!: string;
  FaixaUso!: string;
  Resolucao!: string;
  Exatidao!: string;
  Valor!: string;
  Tolerancia!: string;
  EmpresaResponsavel!: string;
  DataCalibracao!: Date;
  Notificado!: number;
  

  static getFields() {
    return [
      "kPlanRegistro",
      "fkPlanComponente",
      "DataPrevista",
      "DataRealizada",
      "Observacao",
      "Responsavel",
      "Fabricante",
      "Modelo",
      "NumeroSerie",
      "Localizacao",
      "FaixaUso",
      "Resolucao",
      "Exatidao",
      "Valor",
      "Tolerancia",
      "EmpresaResponsavel",
      "DataCalibracao",
      "Notificado",
      ];
  }
}

TPlanRegistro.knex(connections.oftalmo);

export type TTPlanRegistro = ModelObject<TPlanRegistro>;
