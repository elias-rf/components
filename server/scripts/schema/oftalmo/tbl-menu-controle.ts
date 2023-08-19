import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblMenuControle extends ModelBase {
  static tableName = "tbl_Menu_controle";
  static idColumn = ["Item"];

  Item!: number;
  Pai!: number;
  Noh!: number;
  ItemText!: string;
  Command!: number;
  Argument!: string;
  IconP!: number;
  fkObjeto!: string;
  ObjetoPai!: string;
  

  static getFields() {
    return [
      "Item",
      "Pai",
      "Noh",
      "ItemText",
      "Command",
      "Argument",
      "IconP",
      "fkObjeto",
      "ObjetoPai",
      ];
  }
}

TblMenuControle.knex(connections.oftalmo);

export type TTblMenuControle = ModelObject<TblMenuControle>;
