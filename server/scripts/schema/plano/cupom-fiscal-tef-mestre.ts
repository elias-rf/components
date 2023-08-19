import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CupomFiscalTefMestre extends ModelBase {
  static tableName = "CupomFiscalTEFMestre";
  static idColumn = [];

  CdFilial!: number;
  NumECF!: number;
  NumCupom!: number;
  Sequencia!: number;
  DtEmissao!: Date;
  HrEmissao!: Date;
  TipoCartao!: string;
  CdAdminitradora!: string;
  VlRecebimento!: number;
  QtdeParcelas!: number;
  Fase!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumECF",
      "NumCupom",
      "Sequencia",
      "DtEmissao",
      "HrEmissao",
      "TipoCartao",
      "CdAdminitradora",
      "VlRecebimento",
      "QtdeParcelas",
      "Fase",
      ];
  }
}

CupomFiscalTefMestre.knex(connections.plano);

export type TCupomFiscalTefMestre = ModelObject<CupomFiscalTefMestre>;
