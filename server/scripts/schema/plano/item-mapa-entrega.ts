import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ItemMapaEntrega extends ModelBase {
  static tableName = "ItemMapaEntrega";
  static idColumn = [];

  CdFilial!: number;
  NumMapa!: number;
  NumDoc!: number;
  Serie!: string;
  Tipo!: string;
  FgSituacao!: string;
  FgSomenteEntrega!: string;
  VlTroco!: number;
  NumPedido!: number;
  FgDocumentoPa!: string;
  NumPDV!: number;
  DtEmissaoDoc!: Date;
  CdFuncionario!: number;
  CdCliente!: number;
  VlDocumento!: number;
  CdTipoVenda!: number;
  Sequencia!: number;
  VlTaxas!: number;
  SiglaDoc!: string;
  ItemDoc!: number;
  DtAcerto!: Date;
  CdUsuarioAce!: string;
  FgBuscaReceita!: string;
  FgDocumentoPago!: string;
  FgDocumentoRemunerado!: string;
  Modelo!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumMapa",
      "NumDoc",
      "Serie",
      "Tipo",
      "FgSituacao",
      "FgSomenteEntrega",
      "VlTroco",
      "NumPedido",
      "FgDocumentoPa",
      "NumPDV",
      "DtEmissaoDoc",
      "CdFuncionario",
      "CdCliente",
      "VlDocumento",
      "CdTipoVenda",
      "Sequencia",
      "VlTaxas",
      "SiglaDoc",
      "ItemDoc",
      "DtAcerto",
      "CdUsuarioAce",
      "FgBuscaReceita",
      "FgDocumentoPago",
      "FgDocumentoRemunerado",
      "Modelo",
      ];
  }
}

ItemMapaEntrega.knex(connections.plano);

export type TItemMapaEntrega = ModelObject<ItemMapaEntrega>;
