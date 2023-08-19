import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadEmp extends ModelBase {
  static tableName = "CadEmp";
  static idColumn = [];

  CdEmpresa!: number;
  IdConversao!: number;
  Taxa14!: number;
  Taxa21!: number;
  Taxa28!: number;
  Taxa7!: number;
  RzSocial!: string;
  Endereco!: string;
  Bairro!: string;
  Cidade!: string;
  Uf!: string;
  Cep!: number;
  CGC!: number;
  InscEst!: string;
  Telefone!: string;
  Publicidade!: number;
  Despesas!: number;
  CustoFinanceiro!: number;
  Comissao!: number;
  Diversos!: number;
  RamoAtividade!: string;
  PercImpostosIndiretos!: number;
  EGMAAE!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "IdConversao",
      "Taxa14",
      "Taxa21",
      "Taxa28",
      "Taxa7",
      "RzSocial",
      "Endereco",
      "Bairro",
      "Cidade",
      "Uf",
      "Cep",
      "CGC",
      "InscEst",
      "Telefone",
      "Publicidade",
      "Despesas",
      "CustoFinanceiro",
      "Comissao",
      "Diversos",
      "RamoAtividade",
      "PercImpostosIndiretos",
      "EGMAAE",
      ];
  }
}

CadEmp.knex(connections.plano);

export type TCadEmp = ModelObject<CadEmp>;
