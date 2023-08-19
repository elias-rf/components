import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ContratoAluguelContagemMestre extends ModelBase {
  static tableName = "ContratoAluguelContagemMestre";
  static idColumn = [];

  CdCliente!: number;
  DiaContr!: number;
  DtContagem!: Date;
  UsuarioContagem!: string;
  VlFranquia!: number;
  QtdeFranquia!: number;
  QtdeContada!: number;
  VlUnitExcedente!: number;
  NumNota!: number;
  Serie!: string;
  UsuarioNota!: string;
  Modelo!: string;
  

  static getFields() {
    return [
      "CdCliente",
      "DiaContr",
      "DtContagem",
      "UsuarioContagem",
      "VlFranquia",
      "QtdeFranquia",
      "QtdeContada",
      "VlUnitExcedente",
      "NumNota",
      "Serie",
      "UsuarioNota",
      "Modelo",
      ];
  }
}

ContratoAluguelContagemMestre.knex(connections.plano);

export type TContratoAluguelContagemMestre = ModelObject<ContratoAluguelContagemMestre>;
