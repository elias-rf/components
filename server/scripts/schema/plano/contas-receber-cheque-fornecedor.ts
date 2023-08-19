import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ContasReceberChequeFornecedor extends ModelBase {
  static tableName = "ContasReceberChequeFornecedor";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumDocumento!: number;
  Serie!: string;
  Modelo!: string;
  SiglaDocumento!: string;
  ItemDocumento!: number;
  CdEmpresaContasPagar!: number;
  CdFilialContasPagar!: number;
  CdFornecedorContasPagar!: number;
  NumDocumentoContasPagar!: number;
  SerieContasPagar!: string;
  ModeloContasPagar!: string;
  ItemDocumentoContasPagar!: number;
  DtInclusao!: Date;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumDocumento",
      "Serie",
      "Modelo",
      "SiglaDocumento",
      "ItemDocumento",
      "CdEmpresaContasPagar",
      "CdFilialContasPagar",
      "CdFornecedorContasPagar",
      "NumDocumentoContasPagar",
      "SerieContasPagar",
      "ModeloContasPagar",
      "ItemDocumentoContasPagar",
      "DtInclusao",
      "DtUltAlteracao",
      ];
  }
}

ContasReceberChequeFornecedor.knex(connections.plano);

export type TContasReceberChequeFornecedor = ModelObject<ContasReceberChequeFornecedor>;
