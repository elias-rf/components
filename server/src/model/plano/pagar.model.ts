import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type PagarRecord = {
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

export class PagarModel extends Model<PagarRecord> {
  constructor(connections: Connections) {
    super(
      connections.plano,
      "pagar",
      "ArqDup",
      ["CdEmpresa", "CodFor", "NumDoc", "SeqDoc"],
      [
        "CdEmpresa",
        "CodFor",
        "NumDoc",
        "SeqDoc",
        "Serie",
        "DatEmi",
        "DatVen",
        "DatPag",
        "FgSituacao",
        "VlAmortizado",
        "VlDocumento",
        "VlDeducao",
        "VlAcrescimo",
        "VlJuroPago",
        "ObsDocumento",
      ]
    );
  }
}
