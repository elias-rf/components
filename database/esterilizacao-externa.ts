import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class EsterilizacaoExterna extends ModelBase {
  static tableName = "tEsterilizacaoExterna";
  static idColumn = "kLoteEstExt";

  kLoteEstExt!: number;
  Data!: Date;
  DataRetorno!: Date;
  Quantidade!: number;
  QtdCaixa!: number;
  Fechado!: number;
  Resultado!: string;
  UsuarioResultado!: string;
  Obs!: string;
  LoteEto!: string;

  static getFields() {
    return [
      "kLoteEstExt",
      "Data",
      "DataRetorno",
      "Quantidade",
      "QtdCaixa",
      "Fechado",
      "Resultado",
      "UsuarioResultado",
      "Obs",
      "LoteEto",
    ];
  }
}

EsterilizacaoExterna.knex(connections.oftalmo);

export type TEsterilizacaoExterna = ModelObject<EsterilizacaoExterna>;
