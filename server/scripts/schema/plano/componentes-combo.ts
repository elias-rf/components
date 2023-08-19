import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ComponentesCombo extends ModelBase {
  static tableName = "ComponentesCombo";
  static idColumn = ["CdKit"];

  CdKit!: string;
  QtdeMinimaCombo!: number;
  QtdeMaximaCombo!: number;
  VlUnitarioCombo!: number;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdKit",
      "QtdeMinimaCombo",
      "QtdeMaximaCombo",
      "VlUnitarioCombo",
      "DtUltAlteracao",
      ];
  }
}

ComponentesCombo.knex(connections.plano);

export type TComponentesCombo = ModelObject<ComponentesCombo>;
