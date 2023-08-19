import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class RomaneioEstoqueItem extends ModelBase {
  static tableName = "RomaneioEstoqueItem";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumRomaneio!: number;
  Sequencia!: number;
  CdProduto!: string;
  Quantidade!: number;
  NumLote!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumRomaneio",
      "Sequencia",
      "CdProduto",
      "Quantidade",
      "NumLote",
      ];
  }
}

RomaneioEstoqueItem.knex(connections.plano);

export type TRomaneioEstoqueItem = ModelObject<RomaneioEstoqueItem>;
