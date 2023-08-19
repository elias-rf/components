import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOpLoopConformidade extends ModelBase {
  static tableName = "tbl_Op_Loop_Conformidade";
  static idColumn = ["kOpLoopConformidade"];

  kOpLoopConformidade!: number;
  fkOpLoop!: string;
  Quantidade!: number;
  Conformidade!: string;
  Analise!: string;
  fkOperacao!: number;
  Disposicao!: string;
  ConformidadeAntigo!: string;
  DisposicaoAntigo!: string;
  

  static getFields() {
    return [
      "kOpLoopConformidade",
      "fkOpLoop",
      "Quantidade",
      "Conformidade",
      "Analise",
      "fkOperacao",
      "Disposicao",
      "ConformidadeAntigo",
      "DisposicaoAntigo",
      ];
  }
}

TblOpLoopConformidade.knex(connections.oftalmo);

export type TTblOpLoopConformidade = ModelObject<TblOpLoopConformidade>;
