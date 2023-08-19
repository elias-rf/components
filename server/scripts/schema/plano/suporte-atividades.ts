import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class SuporteAtividades extends ModelBase {
  static tableName = "SuporteAtividades";
  static idColumn = [];

  CdFilial!: number;
  Usuario!: string;
  CdTecnico!: number;
  DtInicio!: Date;
  DtTermino!: Date;
  CdCliente!: number;
  RzSocial!: string;
  NmContato!: string;
  NumeroRat!: number;
  Funcao!: string;
  FgAtendimentoInterno!: string;
  DescricaoAtividade!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "Usuario",
      "CdTecnico",
      "DtInicio",
      "DtTermino",
      "CdCliente",
      "RzSocial",
      "NmContato",
      "NumeroRat",
      "Funcao",
      "FgAtendimentoInterno",
      "DescricaoAtividade",
      ];
  }
}

SuporteAtividades.knex(connections.plano);

export type TSuporteAtividades = ModelObject<SuporteAtividades>;
