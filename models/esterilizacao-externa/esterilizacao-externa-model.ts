import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { day } from "@/utils/date/day";
import { zsr } from "@/utils/zod/z-refine";
import { zd, zod } from "@/utils/zod/zod";
import { Knex } from "knex";
import { esterilizacao_externa } from "./esterilizacao-externa.table";

export class EsterilizacaoExternaModel extends CrudModel {
  connection: Knex;
  models: TModels;

  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[esterilizacao_externa.database], esterilizacao_externa);
    this.connection = connections[esterilizacao_externa.database];
    this.models = models;
    models.esterilizacaoExterna = this;
  }

  async diario({
    inicio,
    fim,
  }: {
    inicio: string;
    fim: string;
  }): Promise<{ dia: string; dia_semana: string; quantidade: number }[]> {
    zod(inicio, zd.string().superRefine(zsr.date));
    zod(fim, zd.string().superRefine(zsr.date));

    const qry = await this.connection(
      this.connection.raw(
        "tEsterilizacaoExterna LEFT JOIN (SELECT tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
      )
    )
      .select(
        this.connection.raw(
          "tEsterilizacaoExterna.Data AS dia, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderBy("tEsterilizacaoExterna.Data", "desc")
      .groupBy("tEsterilizacaoExterna.Data")
      .where(
        this.connection.raw("tEsterilizacaoExterna.Data between ? and ?", [
          inicio,
          fim,
        ])
      );

    console.log(`🚀 ~ file:  ~ returnqry.map ~ rec:`, qry);
    return qry.map((rec: any) => {
      rec.dia_semana = day(rec.dia).format("ddd");
      return rec;
    });
  }

  async mensal({ mes }: { mes: string }) {
    zod(mes, zd.string().superRefine(zsr.month));
    const qry = await this.connection(
      this.connection.raw(
        "tEsterilizacaoExterna LEFT JOIN (SELECT tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
      )
    )
      .select(
        this.connection.raw(
          "CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120) AS mes, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderByRaw("CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120) desc")
      .groupBy(
        this.connection.raw("CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120)")
      )
      .where(
        this.connection.raw(
          "CONVERT(CHAR(7),tEsterilizacaoExterna.Data,120)>=?",
          [mes]
        )
      );
    return qry;
  }

  async modelo({ data, produto }: { data: string; produto: string }) {
    zod(data, zd.string().superRefine(zsr.date));
    zod(produto, zd.string());

    const qry = this.connection(
      this.connection.raw(
        "tEsterilizacaoExterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
      )
    )
      .select(
        this.connection.raw(
          "isnull (NomeProdutoItem,'Metil') AS modelo, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderBy("NomeProdutoItem", "desc")
      .groupBy("NomeProdutoItem")
      .where("tEsterilizacaoExterna.Data", data)
      .where(this.connection.raw("IsNull([fkCategoria],'Metil')=?", produto));

    const response = await qry;
    return response;
  }

  async produto({
    data,
  }: {
    data: string;
  }): Promise<{ produto: string; quantidade: number }[]> {
    zod(data, zd.string().superRefine(zsr.date));

    const qry = this.connection(
      this.connection.raw(
        "tEsterilizacaoExterna LEFT JOIN (SELECT tbl_Produto.fkCategoria, tOrdemProducao.fkLoteEstExt, tbl_Produto_Item.NomeProdutoItem, tOrdemProducao.QtdEstExt_tmp FROM (tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem WHERE (((tOrdemProducao.fkLoteEstExt) Is Not Null))) as Produto_EstExt ON tEsterilizacaoExterna.kLoteEstExt = Produto_EstExt.fkLoteEstExt"
      )
    )
      .select(
        this.connection.raw(
          "IsNull([fkCategoria],'Metil') AS produto, SUM(case when [NomeProdutoItem] is null then [tEsterilizacaoExterna].[quantidade] else [Produto_EstExt].[QtdEstExt_tmp] end) AS quantidade"
        )
      )
      .orderBy("fkCategoria", "desc")
      .groupBy("fkCategoria")
      .where(this.connection.raw("tEsterilizacaoExterna.Data=?", [data]));

    const response = await qry;
    return response;
  }
}
