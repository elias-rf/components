import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TEsterilizacaoExternaOld extends ModelBase {
  static tableName = "tEsterilizacaoExternaOld";
  static idColumn = ["kLoteEstExt"];

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

TEsterilizacaoExternaOld.knex(connections.oftalmo);

export type TTEsterilizacaoExternaOld = ModelObject<TEsterilizacaoExternaOld>;
