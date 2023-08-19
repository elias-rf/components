import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MedicoEnderecos extends ModelBase {
  static tableName = "MedicoEnderecos";
  static idColumn = [];

  Crm!: string;
  Sequencia!: number;
  NmClinica!: string;
  Endereco!: string;
  NumEndereco!: number;
  CompEndereco!: string;
  Bairro!: string;
  Cidade!: string;
  Uf!: string;
  Cep!: number;
  Telefone!: string;
  Email!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "Crm",
      "Sequencia",
      "NmClinica",
      "Endereco",
      "NumEndereco",
      "CompEndereco",
      "Bairro",
      "Cidade",
      "Uf",
      "Cep",
      "Telefone",
      "Email",
      "DtUltAlteracao",
      ];
  }
}

MedicoEnderecos.knex(connections.plano);

export type TMedicoEnderecos = ModelObject<MedicoEnderecos>;
