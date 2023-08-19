import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PreventivaRat extends ModelBase {
  static tableName = "PreventivaRAT";
  static idColumn = [];

  CdFilial!: number;
  Item1!: string;
  Item10!: string;
  Item2!: string;
  Item3!: string;
  Item4!: string;
  Item5!: string;
  Item6!: string;
  Item7!: string;
  Item8!: string;
  Item9!: string;
  NumeroRAT!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "Item1",
      "Item10",
      "Item2",
      "Item3",
      "Item4",
      "Item5",
      "Item6",
      "Item7",
      "Item8",
      "Item9",
      "NumeroRAT",
      ];
  }
}

PreventivaRat.knex(connections.plano);

export type TPreventivaRat = ModelObject<PreventivaRat>;
