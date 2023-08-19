import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ControladosSaidaCancelamento extends ModelBase {
  static tableName = "ControladosSaidaCancelamento";
  static idColumn = [];

  CdFilial!: number;
  NumPDV!: number;
  NumDocumento!: number;
  Serie!: string;
  CdProduto!: string;
  Sequencia!: number;
  DtCancelamento!: Date;
  Motivo!: string;
  NmUsuario!: string;
  Modelo!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPDV",
      "NumDocumento",
      "Serie",
      "CdProduto",
      "Sequencia",
      "DtCancelamento",
      "Motivo",
      "NmUsuario",
      "Modelo",
      ];
  }
}

ControladosSaidaCancelamento.knex(connections.plano);

export type TControladosSaidaCancelamento = ModelObject<ControladosSaidaCancelamento>;
