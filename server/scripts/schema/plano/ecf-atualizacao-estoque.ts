import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EcfAtualizacaoEstoque extends ModelBase {
  static tableName = "ECFAtualizacaoEstoque";
  static idColumn = [];

  NumSerie!: string;
  MFAdicional!: string;
  TipoECF!: string;
  MarcaECF!: string;
  ModeloECF!: string;
  DtEstoque!: Date;
  HrEstoque!: Date;
  

  static getFields() {
    return [
      "NumSerie",
      "MFAdicional",
      "TipoECF",
      "MarcaECF",
      "ModeloECF",
      "DtEstoque",
      "HrEstoque",
      ];
  }
}

EcfAtualizacaoEstoque.knex(connections.plano);

export type TEcfAtualizacaoEstoque = ModelObject<EcfAtualizacaoEstoque>;
