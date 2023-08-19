import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestreFormula extends ModelBase {
  static tableName = "MestreFormula";
  static idColumn = [];

  CdFilial!: number;
  NumFormula!: number;
  DtEmissao!: Date;
  HrEmissao!: Date;
  CdTipoFormula!: string;
  NumPedido!: number;
  CdCliente!: number;
  CdVendedor!: number;
  CRM!: string;
  DtEntregaPrevista!: Date;
  HrEntregaPrevista!: Date;
  cdFase!: number;
  Quantidade!: number;
  Valor!: number;
  DtFabricacao!: Date;
  DtValidade!: Date;
  Posologia!: string;
  DtConfirmacao!: Date;
  FgSemiAcabado!: string;
  TipoPedido!: string;
  FgFormulaRepetida!: string;
  HrEntregaIni!: Date;
  HrEntregaFim!: Date;
  CdFuncionario!: number;
  NumLote!: string;
  QuantidadePrevista!: number;
  Largura!: string;
  Espessura!: string;
  TipoCaixa!: string;
  PecasCaixa!: string;
  CdProdutoGrelha!: string;
  CdLoteGrelha!: string;
  QtdeLoteGrelha!: number;
  Maquina!: string;
  Operador!: string;
  CdLoteEmbalagem!: string;
  DtProducao!: Date;
  Tipo!: string;
  FgSituacao!: string;
  DtUltAlteracao!: Date;
  FgCancelado!: string;
  Obs!: string;
  QtdePerda!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "NumFormula",
      "DtEmissao",
      "HrEmissao",
      "CdTipoFormula",
      "NumPedido",
      "CdCliente",
      "CdVendedor",
      "CRM",
      "DtEntregaPrevista",
      "HrEntregaPrevista",
      "cdFase",
      "Quantidade",
      "Valor",
      "DtFabricacao",
      "DtValidade",
      "Posologia",
      "DtConfirmacao",
      "FgSemiAcabado",
      "TipoPedido",
      "FgFormulaRepetida",
      "HrEntregaIni",
      "HrEntregaFim",
      "CdFuncionario",
      "NumLote",
      "QuantidadePrevista",
      "Largura",
      "Espessura",
      "TipoCaixa",
      "PecasCaixa",
      "CdProdutoGrelha",
      "CdLoteGrelha",
      "QtdeLoteGrelha",
      "Maquina",
      "Operador",
      "CdLoteEmbalagem",
      "DtProducao",
      "Tipo",
      "FgSituacao",
      "DtUltAlteracao",
      "FgCancelado",
      "Obs",
      "QtdePerda",
      ];
  }
}

MestreFormula.knex(connections.plano);

export type TMestreFormula = ModelObject<MestreFormula>;
