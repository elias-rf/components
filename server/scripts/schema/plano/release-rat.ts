import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ReleaseRat extends ModelBase {
  static tableName = "ReleaseRat";
  static idColumn = ["CdReleaseRAT"];

  CdReleaseRAT!: number;
  NumeroRat!: number;
  ReleaseFuncionalidade!: string;
  ReleaseDescricao!: string;
  ReleaseObservacao!: string;
  

  static getFields() {
    return [
      "CdReleaseRAT",
      "NumeroRat",
      "ReleaseFuncionalidade",
      "ReleaseDescricao",
      "ReleaseObservacao",
      ];
  }
}

ReleaseRat.knex(connections.plano);

export type TReleaseRat = ModelObject<ReleaseRat>;
