import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TipoRecebimento extends ModelBase {
  static tableName = "TipoRecebimento";
  static idColumn = ["CdTipo"];

  CdTipo!: number;
  Descricao!: string;
  NumAutenticacao!: number;
  Cheque!: string;
  Dinheiro!: string;
  

  static getFields() {
    return [
      "CdTipo",
      "Descricao",
      "NumAutenticacao",
      "Cheque",
      "Dinheiro",
      ];
  }
}

TipoRecebimento.knex(connections.plano);

export type TTipoRecebimento = ModelObject<TipoRecebimento>;
