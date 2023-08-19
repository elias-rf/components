import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Usuario extends ModelBase {
  static tableName = "Usuario";
  static idColumn = ["SgUsuario"];

  SgUsuario!: string;
  NmUsuario!: string;
  Senha!: string;
  CdVendedorDefalt!: number;
  CdTecnicoAssoc!: number;
  CdOperadorAssociado!: string;
  DtAlteracao!: Date;
  Email!: string;
  FgAtivo!: string;
  

  static getFields() {
    return [
      "SgUsuario",
      "NmUsuario",
      "Senha",
      "CdVendedorDefalt",
      "CdTecnicoAssoc",
      "CdOperadorAssociado",
      "DtAlteracao",
      "Email",
      "FgAtivo",
      ];
  }
}

Usuario.knex(connections.plano);

export type TUsuario = ModelObject<Usuario>;
