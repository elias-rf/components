import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOpLioDioptria extends ModelBase {
  static tableName = "tbl_OP_LIO_Dioptria";
  static idColumn = ["kOpLIODioptria"];

  kOpLIODioptria!: number;
  fkOpLIO!: number;
  Quantidade!: number;
  Dioptria!: number;
  Controle!: string;
  Esterilizacao!: string;
  fkprodutoitem!: number;
  DataFabricacao!: Date;
  Partida!: number;
  QtdProduzida!: number;
  

  static getFields() {
    return [
      "kOpLIODioptria",
      "fkOpLIO",
      "Quantidade",
      "Dioptria",
      "Controle",
      "Esterilizacao",
      "fkprodutoitem",
      "DataFabricacao",
      "Partida",
      "QtdProduzida",
      ];
  }
}

TblOpLioDioptria.knex(connections.oftalmo);

export type TTblOpLioDioptria = ModelObject<TblOpLioDioptria>;
