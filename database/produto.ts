import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "./utils/model-base";

export class Produto extends ModelBase {
  static tableName = "tbl_Produto";
  static idColumn = "kProduto";

  kProduto!: number;
  fkCategoria!: string;
  NomeComercial!: string;
  Fabricante!: string;
  OBS!: string;
  DescricaoTecnica!: string;
  DescricaoGenerica!: string;
  GrupoCredito!: string;
  fkSubCategoria!: number;

  static getFields() {
    return [
      "kProduto",
      "fkCategoria",
      "NomeComercial",
      "Fabricante",
      "OBS",
      "DescricaoTecnica",
      "DescricaoGenerica",
      "GrupoCredito",
      "fkSubCategoria",
    ];
  }
}

Produto.knex(connections.oftalmo);

export type TProduto = ModelObject<Produto>;
