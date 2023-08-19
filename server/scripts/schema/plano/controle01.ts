import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Controle01 extends ModelBase {
  static tableName = "Controle01";
  static idColumn = [];

  CNPJEmitente!: number;
  NumeroDav!: number;
  NumSerieECF!: string;
  MFAdicional!: string;
  TipoECF!: string;
  MarcaECF!: string;
  ModeloECF!: string;
  NumCOODAV!: number;
  DtEmissao!: Date;
  TituloDAV!: string;
  VlTotal!: number;
  FgPreVenda!: string;
  NumECFCupomVinculado!: number;
  NumCOOCupomVinculado!: number;
  NmAdquirente!: string;
  CNPJCPFAdquirente!: number;
  CdFilial!: number;
  

  static getFields() {
    return [
      "CNPJEmitente",
      "NumeroDav",
      "NumSerieECF",
      "MFAdicional",
      "TipoECF",
      "MarcaECF",
      "ModeloECF",
      "NumCOODAV",
      "DtEmissao",
      "TituloDAV",
      "VlTotal",
      "FgPreVenda",
      "NumECFCupomVinculado",
      "NumCOOCupomVinculado",
      "NmAdquirente",
      "CNPJCPFAdquirente",
      "CdFilial",
      ];
  }
}

Controle01.knex(connections.plano);

export type TControle01 = ModelObject<Controle01>;
