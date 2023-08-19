import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Empresa extends ModelBase {
  static tableName = "Empresa";
  static idColumn = ["CdEmpresa"];

  CdEmpresa!: number;
  RzSocial!: string;
  NmFantasia!: string;
  Endereco!: string;
  Bairro!: string;
  Cidade!: string;
  Uf!: string;
  Cep!: number;
  Cgc!: number;
  InscEst!: string;
  Telefone!: string;
  Email!: string;
  Site!: string;
  Publicidade!: number;
  Despesas!: number;
  CustoFinanceiro!: number;
  Comissao!: number;
  Diversos!: number;
  RamoAtividade!: string;
  PercImpostosIndiretos!: number;
  EGMAAE!: string;
  FgCRM!: string;
  NmEmpresa!: string;
  IdEmpresa!: number;
  Limite!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "RzSocial",
      "NmFantasia",
      "Endereco",
      "Bairro",
      "Cidade",
      "Uf",
      "Cep",
      "Cgc",
      "InscEst",
      "Telefone",
      "Email",
      "Site",
      "Publicidade",
      "Despesas",
      "CustoFinanceiro",
      "Comissao",
      "Diversos",
      "RamoAtividade",
      "PercImpostosIndiretos",
      "EGMAAE",
      "FgCRM",
      "NmEmpresa",
      "IdEmpresa",
      "Limite",
      ];
  }
}

Empresa.knex(connections.plano);

export type TEmpresa = ModelObject<Empresa>;
