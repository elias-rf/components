import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EstoqueEscriturado extends ModelBase {
  static tableName = "EstoqueEscriturado";
  static idColumn = [];

  MesBase!: number;
  AnoBase!: number;
  CdProduto!: string;
  CdIndEstoque!: number;
  TipoParticipante!: string;
  CdParticipante!: number;
  Qtde!: number;
  CdFilial!: number;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "MesBase",
      "AnoBase",
      "CdProduto",
      "CdIndEstoque",
      "TipoParticipante",
      "CdParticipante",
      "Qtde",
      "CdFilial",
      "DtUltAlteracao",
      ];
  }
}

EstoqueEscriturado.knex(connections.plano);

export type TEstoqueEscriturado = ModelObject<EstoqueEscriturado>;
