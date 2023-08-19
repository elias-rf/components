import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CtrlLigacao extends ModelBase {
  static tableName = "CtrlLigacao";
  static idColumn = [];

  CdFilial!: number;
  Id!: number;
  CdCliente!: number;
  Data!: Date;
  Horario!: Date;
  CdAtendente!: string;
  CdDestinatario!: string;
  Telefone!: string;
  Contato!: string;
  FgTipo!: string;
  Motivo!: string;
  Encaminhamento!: string;
  FgRetorno!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "Id",
      "CdCliente",
      "Data",
      "Horario",
      "CdAtendente",
      "CdDestinatario",
      "Telefone",
      "Contato",
      "FgTipo",
      "Motivo",
      "Encaminhamento",
      "FgRetorno",
      ];
  }
}

CtrlLigacao.knex(connections.plano);

export type TCtrlLigacao = ModelObject<CtrlLigacao>;
