import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblProdutoRaio extends ModelBase {
  static tableName = "tbl_Produto_Raio";
  static idColumn = [];

  fkproduto!: number;
  fkprodutoitem!: number;
  Dioptria!: number;
  Raio1!: number;
  Raio2!: number;
  Espessura!: number;
  BFLMin!: number;
  BFL!: number;
  BFLMax!: number;
  EspessuraMin!: number;
  EspessuraMax!: number;
  

  static getFields() {
    return [
      "fkproduto",
      "fkprodutoitem",
      "Dioptria",
      "Raio1",
      "Raio2",
      "Espessura",
      "BFLMin",
      "BFL",
      "BFLMax",
      "EspessuraMin",
      "EspessuraMax",
      ];
  }
}

TblProdutoRaio.knex(connections.oftalmo);

export type TTblProdutoRaio = ModelObject<TblProdutoRaio>;
