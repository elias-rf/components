import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOpLiopuDioptria extends ModelBase {
  static tableName = "tbl_OP_LIOPU_Dioptria";
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

TblOpLiopuDioptria.knex(connections.oftalmo);

export type TTblOpLiopuDioptria = ModelObject<TblOpLiopuDioptria>;
