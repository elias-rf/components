import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestreMapaEntrega extends ModelBase {
  static tableName = "MestreMapaEntrega";
  static idColumn = [];

  CdFilial!: number;
  NumMapa!: number;
  DtEmissao!: Date;
  Horario!: Date;
  CdTransportador!: number;
  Observacoes!: string;
  FgSituacao!: string;
  DtAcerto!: Date;
  CdUsuarioInc!: string;
  CdUsuarioAce!: string;
  CdPostoAtendimento!: number;
  FgConferencia!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumMapa",
      "DtEmissao",
      "Horario",
      "CdTransportador",
      "Observacoes",
      "FgSituacao",
      "DtAcerto",
      "CdUsuarioInc",
      "CdUsuarioAce",
      "CdPostoAtendimento",
      "FgConferencia",
      ];
  }
}

MestreMapaEntrega.knex(connections.plano);

export type TMestreMapaEntrega = ModelObject<MestreMapaEntrega>;
