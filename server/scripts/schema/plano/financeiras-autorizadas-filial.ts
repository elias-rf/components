import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class FinanceirasAutorizadasFilial extends ModelBase {
  static tableName = "FinanceirasAutorizadasFilial";
  static idColumn = [];

  CdFinanceira!: number;
  CdFilial!: number;
  CdClienteAssociado!: number;
  PrazoRecebimento!: number;
  TipoRecebimento!: string;
  FgDiaUtilRecebimento!: string;
  TaxaAdministracao!: number;
  NumParcelas!: number;
  CoeficienteCalculoParcela!: number;
  FgAtivo!: string;
  DtUltAtualizacao!: Date;
  

  static getFields() {
    return [
      "CdFinanceira",
      "CdFilial",
      "CdClienteAssociado",
      "PrazoRecebimento",
      "TipoRecebimento",
      "FgDiaUtilRecebimento",
      "TaxaAdministracao",
      "NumParcelas",
      "CoeficienteCalculoParcela",
      "FgAtivo",
      "DtUltAtualizacao",
      ];
  }
}

FinanceirasAutorizadasFilial.knex(connections.plano);

export type TFinanceirasAutorizadasFilial = ModelObject<FinanceirasAutorizadasFilial>;
