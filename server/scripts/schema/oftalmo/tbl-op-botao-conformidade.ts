import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOpBotaoConformidade extends ModelBase {
  static tableName = "tbl_Op_Botao_Conformidade";
  static idColumn = ["kOpBotaoConformidade"];

  kOpBotaoConformidade!: number;
  fkOpBotao!: string;
  Quantidade!: number;
  Conformidade!: string;
  Analise!: string;
  fkOperacao!: number;
  Disposicao!: string;
  ConformidadeAntigo!: string;
  DisposicaoAntigo!: string;
  

  static getFields() {
    return [
      "kOpBotaoConformidade",
      "fkOpBotao",
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

TblOpBotaoConformidade.knex(connections.oftalmo);

export type TTblOpBotaoConformidade = ModelObject<TblOpBotaoConformidade>;
