import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadastroCapsulas extends ModelBase {
  static tableName = "CadastroCapsulas";
  static idColumn = ["CdCapsula"];

  CdCapsula!: number;
  NmCapsula!: string;
  CdCorCapsula!: number;
  Capacidade!: number;
  UnidadeMedida!: string;
  CdProdutoAssociado!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdCapsula",
      "NmCapsula",
      "CdCorCapsula",
      "Capacidade",
      "UnidadeMedida",
      "CdProdutoAssociado",
      "DtUltAlteracao",
      ];
  }
}

CadastroCapsulas.knex(connections.plano);

export type TCadastroCapsulas = ModelObject<CadastroCapsulas>;
