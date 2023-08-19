import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NfCeTempMestre extends ModelBase {
  static tableName = "NFCeTempMestre";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  Estacao!: string;
  DtOperacao!: Date;
  IdOperacao!: number;
  CdCliente!: number;
  CPFCNPJCliente!: number;
  EmailCliente!: string;
  CdVendedor!: number;
  CdVendedorExtra!: number;
  CdFuncionario!: number;
  CdTipoVenda!: number;
  VlTotal!: number;
  VlDesconto!: number;
  VlDescGer!: number;
  NumPedido!: number;
  CdSetor!: number;
  Localizacao!: number;
  FgVendaExterna!: string;
  Fase!: string;
  FgAbatimento!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "Estacao",
      "DtOperacao",
      "IdOperacao",
      "CdCliente",
      "CPFCNPJCliente",
      "EmailCliente",
      "CdVendedor",
      "CdVendedorExtra",
      "CdFuncionario",
      "CdTipoVenda",
      "VlTotal",
      "VlDesconto",
      "VlDescGer",
      "NumPedido",
      "CdSetor",
      "Localizacao",
      "FgVendaExterna",
      "Fase",
      "FgAbatimento",
      ];
  }
}

NfCeTempMestre.knex(connections.plano);

export type TNfCeTempMestre = ModelObject<NfCeTempMestre>;
