import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type TPagar = {
  CdEmpresa?: string;
  CodFor?: string;
  NumDoc?: string;
  SeqDoc?: string;
  Serie?: string;
  DatEmi?: string;
  DatVen?: string;
  DatPag?: string;
  FgSituacao?: string;
  VlAmortizado?: number;
  VlDocumento?: number;
  VlDeducao?: number;
  VlAcrescimo?: number;
  VlJuroPago?: number;
  ObsDocumento?: string;
};

export class PagarModel extends EntityModel<TPagar> {
  constructor(connections: TConnections) {
    super(connections, "pagar");
  }
}
