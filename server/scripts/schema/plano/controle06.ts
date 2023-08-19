import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Controle06 extends ModelBase {
  static tableName = "Controle06";
  static idColumn = [];

  CdFilial!: number;
  NumPDV!: number;
  NumCupom!: number;
  DtEmissao!: Date;
  Horario!: Date;
  NumSerieECF!: string;
  MFAdicional!: string;
  ModeloECF!: string;
  NumUsuario!: number;
  NumCCF!: number;
  NumCOO!: number;
  NumPedido!: number;
  CdCliente!: number;
  CdFuncionario!: number;
  CdVendedor!: number;
  VlTotal!: number;
  VlDesconto!: number;
  VlDescGer!: number;
  FgSituacao!: string;
  FgTipoCancelamento!: string;
  CNPJCPFAdquirente!: number;
  NmAdquirente!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumPDV",
      "NumCupom",
      "DtEmissao",
      "Horario",
      "NumSerieECF",
      "MFAdicional",
      "ModeloECF",
      "NumUsuario",
      "NumCCF",
      "NumCOO",
      "NumPedido",
      "CdCliente",
      "CdFuncionario",
      "CdVendedor",
      "VlTotal",
      "VlDesconto",
      "VlDescGer",
      "FgSituacao",
      "FgTipoCancelamento",
      "CNPJCPFAdquirente",
      "NmAdquirente",
      ];
  }
}

Controle06.knex(connections.plano);

export type TControle06 = ModelObject<Controle06>;
