import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NfCeTempItem extends ModelBase {
  static tableName = "NFCeTempItem";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  Estacao!: string;
  DtOperacao!: Date;
  IdOperacao!: number;
  Sequencia!: number;
  CdProduto!: string;
  CdRefEstoque!: string;
  CdProdutoAssociado!: string;
  CdReferencia!: string;
  FgImprimeComponentes!: string;
  Unidade!: string;
  Quantidade!: number;
  VlUnitario!: number;
  PercDesconto!: number;
  VlDesconto!: number;
  VlLiquido!: number;
  PercDescMaxVendedor!: number;
  PercDescMaxGerente!: number;
  FgEstoque!: string;
  CRM!: string;
  FgVMSCard!: string;
  FgServico!: string;
  FgPsico!: string;
  FgTipoReceita!: string;
  FgLoteControlado!: string;
  TipoTributacaoICMS!: string;
  AliquotaICMS!: number;
  TipoTributacaoPIS!: string;
  AliquotaPIS!: number;
  TipoTributacaoCOFINS!: string;
  AliquotaCOFINS!: number;
  PercComisVista!: number;
  PercComisVistaExtra!: number;
  PercComisPrazo!: number;
  PercComisPrazoExtra!: number;
  FgSituacao!: string;
  CdBeneficioFiscal!: string;
  AliquotaDesoneracao!: number;
  VlDesoneracao!: number;
  CdMotivoDesoneracao!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "Estacao",
      "DtOperacao",
      "IdOperacao",
      "Sequencia",
      "CdProduto",
      "CdRefEstoque",
      "CdProdutoAssociado",
      "CdReferencia",
      "FgImprimeComponentes",
      "Unidade",
      "Quantidade",
      "VlUnitario",
      "PercDesconto",
      "VlDesconto",
      "VlLiquido",
      "PercDescMaxVendedor",
      "PercDescMaxGerente",
      "FgEstoque",
      "CRM",
      "FgVMSCard",
      "FgServico",
      "FgPsico",
      "FgTipoReceita",
      "FgLoteControlado",
      "TipoTributacaoICMS",
      "AliquotaICMS",
      "TipoTributacaoPIS",
      "AliquotaPIS",
      "TipoTributacaoCOFINS",
      "AliquotaCOFINS",
      "PercComisVista",
      "PercComisVistaExtra",
      "PercComisPrazo",
      "PercComisPrazoExtra",
      "FgSituacao",
      "CdBeneficioFiscal",
      "AliquotaDesoneracao",
      "VlDesoneracao",
      "CdMotivoDesoneracao",
      ];
  }
}

NfCeTempItem.knex(connections.plano);

export type TNfCeTempItem = ModelObject<NfCeTempItem>;
