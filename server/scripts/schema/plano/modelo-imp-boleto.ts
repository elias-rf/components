import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ModeloImpBoleto extends ModelBase {
  static tableName = "ModeloImpBoleto";
  static idColumn = ["IdModelo"];

  IdModelo!: string;
  TamFormulario!: number;
  Densidade!: number;
  NumLinhaNumDoc!: number;
  EspacoEspecie!: number;
  NumLinhaValDoc!: number;
  NumLinhaCliente!: number;
  NumLinhaDataVenc!: number;
  NumLinhaInstrucao!: number;
  TamLocal!: number;
  TamDataDoc!: number;
  TamBanco!: number;
  FgImpCdCliente!: string;
  FgImpInscEst!: string;
  FgImpMoraDiaria!: string;
  EspecieDoc!: string;
  LocalCobranca!: string;
  InstCobranca1!: string;
  InstCobranca2!: string;
  InstCobranca3!: string;
  InstCobranca4!: string;
  InstCobranca5!: string;
  

  static getFields() {
    return [
      "IdModelo",
      "TamFormulario",
      "Densidade",
      "NumLinhaNumDoc",
      "EspacoEspecie",
      "NumLinhaValDoc",
      "NumLinhaCliente",
      "NumLinhaDataVenc",
      "NumLinhaInstrucao",
      "TamLocal",
      "TamDataDoc",
      "TamBanco",
      "FgImpCdCliente",
      "FgImpInscEst",
      "FgImpMoraDiaria",
      "EspecieDoc",
      "LocalCobranca",
      "InstCobranca1",
      "InstCobranca2",
      "InstCobranca3",
      "InstCobranca4",
      "InstCobranca5",
      ];
  }
}

ModeloImpBoleto.knex(connections.plano);

export type TModeloImpBoleto = ModelObject<ModeloImpBoleto>;
