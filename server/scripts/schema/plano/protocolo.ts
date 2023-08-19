import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Protocolo extends ModelBase {
  static tableName = "Protocolo";
  static idColumn = ["CdProtocolo"];

  CdProtocolo!: number;
  CdCliente!: number;
  NumPedidoAnt!: number;
  NumPedidoAtu!: number;
  NumMapa!: number;
  FgNaoEnviado!: string;
  FgEnviadoErrado!: string;
  FgPedidoErrado!: string;
  FgTrocaDocumento!: string;
  FgTrocaCheque!: string;
  FgCobrancaBoleto!: string;
  FgEntregaDocumento!: string;
  Futros!: string;
  DescricaoOutros!: string;
  FgMedicamentoTroca!: string;
  FgMedicamentoColeta!: string;
  FgMedicamentoEnvio!: string;
  Observacao!: string;
  VlCobrar!: number;
  SgUsuario!: string;
  DataProtocolo!: Date;
  DataAtualizacao!: Date;
  FgExclusao!: string;
  FgStatus!: string;
  Endereco!: string;
  HrExecucaoFinal!: Date;
  DataExecucao!: Date;
  

  static getFields() {
    return [
      "CdProtocolo",
      "CdCliente",
      "NumPedidoAnt",
      "NumPedidoAtu",
      "NumMapa",
      "FgNaoEnviado",
      "FgEnviadoErrado",
      "FgPedidoErrado",
      "FgTrocaDocumento",
      "FgTrocaCheque",
      "FgCobrancaBoleto",
      "FgEntregaDocumento",
      "Futros",
      "DescricaoOutros",
      "FgMedicamentoTroca",
      "FgMedicamentoColeta",
      "FgMedicamentoEnvio",
      "Observacao",
      "VlCobrar",
      "SgUsuario",
      "DataProtocolo",
      "DataAtualizacao",
      "FgExclusao",
      "FgStatus",
      "Endereco",
      "HrExecucaoFinal",
      "DataExecucao",
      ];
  }
}

Protocolo.knex(connections.plano);

export type TProtocolo = ModelObject<Protocolo>;
