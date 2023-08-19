import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EcfIdentificacaoPafecf extends ModelBase {
  static tableName = "ECFIdentificacaoPAFECF";
  static idColumn = ["NumSerie"];

  NumSerie!: string;
  MFAdicional!: string;
  TipoECF!: string;
  MarcaECF!: string;
  ModeloECF!: string;
  VersaoSB!: string;
  DtInstalacaoSB!: Date;
  HrInstalacaoSB!: Date;
  NumSequencialECF!: number;
  CNPJUsuario!: number;
  IEUsuario!: string;
  DtUltAlteracao!: Date;
  DtUltAlteracaoEstoque!: Date;
  ControleSerie!: string;
  

  static getFields() {
    return [
      "NumSerie",
      "MFAdicional",
      "TipoECF",
      "MarcaECF",
      "ModeloECF",
      "VersaoSB",
      "DtInstalacaoSB",
      "HrInstalacaoSB",
      "NumSequencialECF",
      "CNPJUsuario",
      "IEUsuario",
      "DtUltAlteracao",
      "DtUltAlteracaoEstoque",
      "ControleSerie",
      ];
  }
}

EcfIdentificacaoPafecf.knex(connections.plano);

export type TEcfIdentificacaoPafecf = ModelObject<EcfIdentificacaoPafecf>;
