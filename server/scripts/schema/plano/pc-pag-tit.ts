import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PcPagTit extends ModelBase {
  static tableName = "PcPagTit";
  static idColumn = [];

  CdAgencia!: number;
  CdBanco!: number;
  CdCliente!: number;
  CdFilial!: number;
  DaPagto!: Date;
  DtUltAlteracao!: Date;
  ItemDoc!: number;
  NossoNumero!: number;
  NrDoc!: number;
  NumConta!: string;
  NumLcto!: number;
  Serie!: string;
  SiglaDoc!: string;
  VlAmortizado!: number;
  VlDesconto!: number;
  VlJuros!: number;
  VlPagto!: number;
  VlTarifa!: number;
  Modelo!: string;
  DtCompensacao!: Date;
  

  static getFields() {
    return [
      "CdAgencia",
      "CdBanco",
      "CdCliente",
      "CdFilial",
      "DaPagto",
      "DtUltAlteracao",
      "ItemDoc",
      "NossoNumero",
      "NrDoc",
      "NumConta",
      "NumLcto",
      "Serie",
      "SiglaDoc",
      "VlAmortizado",
      "VlDesconto",
      "VlJuros",
      "VlPagto",
      "VlTarifa",
      "Modelo",
      "DtCompensacao",
      ];
  }
}

PcPagTit.knex(connections.plano);

export type TPcPagTit = ModelObject<PcPagTit>;
