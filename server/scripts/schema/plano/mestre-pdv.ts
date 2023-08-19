import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestrePdv extends ModelBase {
  static tableName = "MestrePDV";
  static idColumn = [];

  CdFilial!: number;
  NroPDV!: number;
  NumCupom!: number;
  Serie!: string;
  CdTipoVenda!: number;
  DtEmissao!: Date;
  DtReal!: Date;
  Horario!: Date;
  CdVendedor!: number;
  CdCaixa!: string;
  CdCliente!: number;
  CdFuncionario!: number;
  VlTotal!: number;
  VlDesconto!: number;
  VlDescGer!: number;
  CupomRef!: number;
  NumCRM!: number;
  Atualizacao!: string;
  TipoConvenio!: number;
  NumPedido!: number;
  VlTroco!: number;
  PercParticipPrazo!: number;
  PercParticipVista!: number;
  RedutorComissao!: number;
  VlCreditoVMS!: number;
  CdUsuario!: string;
  CdSetor!: number;
  CdLocalEstoque!: number;
  NumCOO!: number;
  CdVendedorExtra!: number;
  NumCCF!: number;
  NumSerieECF!: string;
  MfAdicional!: string;
  ModeloECF!: string;
  NumUsuario!: number;
  VlBaseCalculoICMS!: number;
  VLISS!: number;
  FgTipoCancelamento!: string;
  VlICMS!: number;
  VlBaseCalculoISS!: number;
  DtUltAlteracao!: Date;
  VlAproximadoImpostoCupom!: number;
  ControleFilial!: number;
  ControleECF!: number;
  ControleCupom!: number;
  FgSituacaoGerencial!: string;
  FgSituacaoFiscal!: string;
  VlAproximadoImpostoFederal!: number;
  VlAproximadoImpostoEstadual!: number;
  VlAproximadoImpostoMunicipal!: number;
  CPFCNPJ!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NroPDV",
      "NumCupom",
      "Serie",
      "CdTipoVenda",
      "DtEmissao",
      "DtReal",
      "Horario",
      "CdVendedor",
      "CdCaixa",
      "CdCliente",
      "CdFuncionario",
      "VlTotal",
      "VlDesconto",
      "VlDescGer",
      "CupomRef",
      "NumCRM",
      "Atualizacao",
      "TipoConvenio",
      "NumPedido",
      "VlTroco",
      "PercParticipPrazo",
      "PercParticipVista",
      "RedutorComissao",
      "VlCreditoVMS",
      "CdUsuario",
      "CdSetor",
      "CdLocalEstoque",
      "NumCOO",
      "CdVendedorExtra",
      "NumCCF",
      "NumSerieECF",
      "MfAdicional",
      "ModeloECF",
      "NumUsuario",
      "VlBaseCalculoICMS",
      "VLISS",
      "FgTipoCancelamento",
      "VlICMS",
      "VlBaseCalculoISS",
      "DtUltAlteracao",
      "VlAproximadoImpostoCupom",
      "ControleFilial",
      "ControleECF",
      "ControleCupom",
      "FgSituacaoGerencial",
      "FgSituacaoFiscal",
      "VlAproximadoImpostoFederal",
      "VlAproximadoImpostoEstadual",
      "VlAproximadoImpostoMunicipal",
      "CPFCNPJ",
      ];
  }
}

MestrePdv.knex(connections.plano);

export type TMestrePdv = ModelObject<MestrePdv>;
