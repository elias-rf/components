import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Componentes extends ModelBase {
  static tableName = "Componentes";
  static idColumn = [];

  CdKit!: string;
  CdProdutoAssociado!: string;
  Quantidade!: number;
  UnidadeMedida!: string;
  FgQsp!: string;
  DtUltAlteracao!: Date;
  FgTermo!: string;
  FgExtrusao!: string;
  CaminhoModeloImp!: string;
  

  static getFields() {
    return [
      "CdKit",
      "CdProdutoAssociado",
      "Quantidade",
      "UnidadeMedida",
      "FgQsp",
      "DtUltAlteracao",
      "FgTermo",
      "FgExtrusao",
      "CaminhoModeloImp",
      ];
  }
}

Componentes.knex(connections.plano);

export type TComponentes = ModelObject<Componentes>;
