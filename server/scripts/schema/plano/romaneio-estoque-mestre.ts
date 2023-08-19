import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class RomaneioEstoqueMestre extends ModelBase {
  static tableName = "RomaneioEstoqueMestre";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumRomaneio!: number;
  TipoMovimentacao!: string;
  CdLocalEstoque!: number;
  FgStatus!: string;
  DtEmissao!: Date;
  UsuarioEmissao!: string;
  DtRetorno!: Date;
  UsuarioRetorno!: string;
  DtConferencia!: Date;
  UsuarioConferencia!: string;
  DtMovimento!: Date;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumRomaneio",
      "TipoMovimentacao",
      "CdLocalEstoque",
      "FgStatus",
      "DtEmissao",
      "UsuarioEmissao",
      "DtRetorno",
      "UsuarioRetorno",
      "DtConferencia",
      "UsuarioConferencia",
      "DtMovimento",
      ];
  }
}

RomaneioEstoqueMestre.knex(connections.plano);

export type TRomaneioEstoqueMestre = ModelObject<RomaneioEstoqueMestre>;
