import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TEsterilizacaoInternaOld extends ModelBase {
  static tableName = "tEsterilizacaoInternaOld";
  static idColumn = ["kLoteEstInt"];

  kLoteEstInt!: number;
  Data!: Date;
  Resultado!: string;
  UsuarioResultado!: string;
  Obs!: string;
  Fechado!: number;
  UsuarioFechamento!: string;
  DataFechamento!: Date;
  DataHoraAutoclave!: Date;
  

  static getFields() {
    return [
      "kLoteEstInt",
      "Data",
      "Resultado",
      "UsuarioResultado",
      "Obs",
      "Fechado",
      "UsuarioFechamento",
      "DataFechamento",
      "DataHoraAutoclave",
      ];
  }
}

TEsterilizacaoInternaOld.knex(connections.oftalmo);

export type TTEsterilizacaoInternaOld = ModelObject<TEsterilizacaoInternaOld>;
