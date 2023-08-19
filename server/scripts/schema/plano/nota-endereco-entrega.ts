import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaEnderecoEntrega extends ModelBase {
  static tableName = "NotaEnderecoEntrega";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  Endereco!: string;
  Bairro!: string;
  Cidade!: string;
  UF!: string;
  CEP!: number;
  Proximidades!: string;
  Contato!: string;
  NumEndereco!: number;
  CompEndereco!: string;
  FgTipoEndereco!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "Endereco",
      "Bairro",
      "Cidade",
      "UF",
      "CEP",
      "Proximidades",
      "Contato",
      "NumEndereco",
      "CompEndereco",
      "FgTipoEndereco",
      ];
  }
}

NotaEnderecoEntrega.knex(connections.plano);

export type TNotaEnderecoEntrega = ModelObject<NotaEnderecoEntrega>;
