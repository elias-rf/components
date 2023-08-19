import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOpLioConformidade extends ModelBase {
  static tableName = "tbl_OP_LIO_Conformidade";
  static idColumn = ["kOpLIOConformidade"];

  kOpLIOConformidade!: number;
  fkOpLIO!: number;
  Quantidade!: number;
  Conformidade!: string;
  Analise!: string;
  fkOperacao!: number;
  Disposicao!: string;
  ConformidadeAntigo!: string;
  DisposicaoAntigo!: string;
  

  static getFields() {
    return [
      "kOpLIOConformidade",
      "fkOpLIO",
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

TblOpLioConformidade.knex(connections.oftalmo);

export type TTblOpLioConformidade = ModelObject<TblOpLioConformidade>;
