import { connections } from "@/config/connections";
import { ModelBase } from "@/database/utils/model-base";
import { ModelObject } from "objection";

export class ProdutoEstatistica extends ModelBase {
  static tableName = "EstatPro";
  static idColumn = ["CdEmpresa", "AnoRef", "MesRef", "CdProduto"];

  CdEmpresa!: number;
  AnoRef!: number;
  MesRef!: number;
  CdProduto!: string;
  EstInicial!: number;
  Entradas!: number;
  Saidas!: number;
  Ajustes!: number;
  QtdCompras!: number;
  QtdMedio!: number;
  QtdVendas!: number;
  VlCusto!: number;
  VlMedio!: number;
  VlVendas!: number;
  VlCustoMedio!: number;
  VlVenda!: number;
  VlAtacado!: number;
  EstInicialPsico!: number;

  static getFields() {
    return [
      "CdEmpresa",
      "AnoRef",
      "MesRef",
      "CdProduto",
      "EstInicial",
      "Entradas",
      "Saidas",
      "Ajustes",
      "QtdCompras",
      "QtdMedio",
      "QtdVendas",
      "VlCusto",
      "VlMedio",
      "VlVendas",
      "VlCustoMedio",
      "VlVenda",
      "VlAtacado",
      "EstInicialPsico",
    ];
  }
}

ProdutoEstatistica.knex(connections.plano);

export type TProdutoEstatistica = ModelObject<ProdutoEstatistica>;
