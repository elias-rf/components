import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Administradora extends ModelBase {
  static tableName = "Administradora";
  static idColumn = ["CdAdministradora"];

  CdAdministradora!: string;
  NmAdministradora!: string;
  Taxa!: number;
  Prazo!: number;
  CdClienteAssociado!: number;
  FgVista!: string;
  FgVctoDiaUtil!: string;
  FgTef!: string;
  TipoPrazoRecebimento!: string;
  FgTipoCartao!: string;
  TipoOperacao!: string;
  NumMinimoParcelas!: number;
  NumMaximoParcelas!: number;
  Bandeira!: number;
  CNPJCredenciadora!: number;
  CdCredenciadora!: number;
  

  static getFields() {
    return [
      "CdAdministradora",
      "NmAdministradora",
      "Taxa",
      "Prazo",
      "CdClienteAssociado",
      "FgVista",
      "FgVctoDiaUtil",
      "FgTef",
      "TipoPrazoRecebimento",
      "FgTipoCartao",
      "TipoOperacao",
      "NumMinimoParcelas",
      "NumMaximoParcelas",
      "Bandeira",
      "CNPJCredenciadora",
      "CdCredenciadora",
      ];
  }
}

Administradora.knex(connections.plano);

export type TAdministradora = ModelObject<Administradora>;
