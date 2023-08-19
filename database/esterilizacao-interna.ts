import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class EsterilizacaoInterna extends ModelBase {
  static tableName = "tEsterilizacaoInterna";
  static idColumn = "kLoteEstInt";

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

EsterilizacaoInterna.knex(connections.oftalmo);

export type TEsterilizacaoInterna = ModelObject<EsterilizacaoInterna>;
