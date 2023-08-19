import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NfeSe extends ModelBase {
  static tableName = "NfeSe";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  SituacaoNfe!: string;
  NumChave!: string;
  CodigoNF!: string;
  DigitoNF!: string;
  NumRecibo!: string;
  NumProtocolo!: string;
  DtProtocolo!: Date;
  DtGeracao!: Date;
  UsuarioGeracao!: string;
  LocalGeracao!: string;
  DtAssinatura!: Date;
  UsuarioAssinatura!: string;
  DtEnvio!: Date;
  UsuarioEnvio!: string;
  TempoMedio!: number;
  DtConfirmacao!: Date;
  UsuarioConfirmacao!: string;
  DtProcNfe!: Date;
  UsuarioProcNfe!: string;
  DtEmissaoDanfe!: Date;
  UsuarioEmissaoDanfe!: string;
  FgReemissaoDanfe!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "SituacaoNfe",
      "NumChave",
      "CodigoNF",
      "DigitoNF",
      "NumRecibo",
      "NumProtocolo",
      "DtProtocolo",
      "DtGeracao",
      "UsuarioGeracao",
      "LocalGeracao",
      "DtAssinatura",
      "UsuarioAssinatura",
      "DtEnvio",
      "UsuarioEnvio",
      "TempoMedio",
      "DtConfirmacao",
      "UsuarioConfirmacao",
      "DtProcNfe",
      "UsuarioProcNfe",
      "DtEmissaoDanfe",
      "UsuarioEmissaoDanfe",
      "FgReemissaoDanfe",
      ];
  }
}

NfeSe.knex(connections.plano);

export type TNfeSe = ModelObject<NfeSe>;
