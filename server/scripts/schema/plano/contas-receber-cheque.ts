import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ContasReceberCheque extends ModelBase {
  static tableName = "ContasReceberCheque";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumDocumento!: number;
  Serie!: string;
  Modelo!: string;
  SiglaDocumento!: string;
  ItemDocumento!: number;
  CdBancoCheque!: number;
  CdAgenciaCheque!: number;
  NumContaCheque!: string;
  NumCheque!: number;
  NmEmitenteCheque!: string;
  TarjaCheque!: string;
  FgStatusCheque!: string;
  DtInclusao!: Date;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumDocumento",
      "Serie",
      "Modelo",
      "SiglaDocumento",
      "ItemDocumento",
      "CdBancoCheque",
      "CdAgenciaCheque",
      "NumContaCheque",
      "NumCheque",
      "NmEmitenteCheque",
      "TarjaCheque",
      "FgStatusCheque",
      "DtInclusao",
      "DtUltAlteracao",
      ];
  }
}

ContasReceberCheque.knex(connections.plano);

export type TContasReceberCheque = ModelObject<ContasReceberCheque>;
