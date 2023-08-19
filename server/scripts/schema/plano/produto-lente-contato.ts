import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutoLenteContato extends ModelBase {
  static tableName = "ProdutoLenteContato";
  static idColumn = ["CdProduto"];

  CdProduto!: string;
  Dioptria!: number;
  Raio1!: number;
  Raio2!: number;
  Espessura!: number;
  EspessuraMinima!: number;
  EspessuraMaxima!: number;
  BLFNominal!: number;
  BLFMinimo!: number;
  BLFMaximo!: number;
  

  static getFields() {
    return [
      "CdProduto",
      "Dioptria",
      "Raio1",
      "Raio2",
      "Espessura",
      "EspessuraMinima",
      "EspessuraMaxima",
      "BLFNominal",
      "BLFMinimo",
      "BLFMaximo",
      ];
  }
}

ProdutoLenteContato.knex(connections.plano);

export type TProdutoLenteContato = ModelObject<ProdutoLenteContato>;
