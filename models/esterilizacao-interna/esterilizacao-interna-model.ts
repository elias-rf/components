import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { zsr } from "@/utils/zod/z-refine";
import { zd, zod } from "@/utils/zod/zod";
import { Knex } from "knex";
import { esterilizacao_interna } from "./esterilizacao-interna.table";
import { day } from "@/utils/date/day";

export class EsterilizacaoInternaModel extends CrudModel {
  connection: Knex;
  models: TModels;

  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[esterilizacao_interna.database], esterilizacao_interna);
    this.connection = connections[esterilizacao_interna.database];
    this.models = models;
    models.esterilizacaoInterna = this;
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
    const qry = await this.connection("tOperacaoOrdemProducao")
      .select(
        this.connection.raw("DataInicio as dia, Sum(QtdConforme) AS quantidade")
      )
      .orderBy("DataInicio", "desc")
      .groupBy("DataInicio")
      .whereBetween("DataInicio", [inicio, fim])
      .where(this.connection.raw("fkOperacao in (3058, 3158)"));
    return qry.map((rec: any) => {
      rec.dia_semana = day(rec.dia).format("ddd");
      rec.dia = rec.dia.toISOString().substring(0, 10);
      return rec;
    });
  }

  async mensal({ mes }: { mes: string }) {
    zod(mes, zd.string().superRefine(zsr.month));

    const qry = this.connection("tOperacaoOrdemProducao")
      .select(
        this.connection.raw(
          "CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
        )
      )
      .orderByRaw("CONVERT(CHAR(7),[DataInicio],120) desc")
      .groupBy(this.connection.raw("CONVERT(CHAR(7),[DataInicio],120)"))
      .where(this.connection.raw("CONVERT(CHAR(7),[DataInicio],120)>=?", [mes]))
      .where(this.connection.raw("fkOperacao in (3058, 3158)"));

    return qry;
  }

  async modelo({ data, produto }: { data: string; produto: string }) {
    zod(data, zd.string().superRefine(zsr.date));
    zod(produto, zd.string());
    const qry = await this.connection(
      this.connection.raw(
        "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp"
      )
    )
      .select(
        this.connection.raw(
          "tbl_Produto_Item.NomeProdutoItem as modelo, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
        )
      )
      .groupBy(
        this.connection.raw(
          "tbl_Produto_Item.NomeProdutoItem, tOperacaoOrdemProducao.DataInicio, tbl_Produto.fkCategoria"
        )
      )
      .where({
        DataInicio: data,
        fkCategoria: produto,
      })
      .where(this.connection.raw("fkOperacao in (3058, 3158)"));
    return qry;
  }

  async produto({
    data,
  }: {
    data: string;
  }): Promise<{ produto: string; quantidade: number }[]> {
    zod(data, zd.string().superRefine(zsr.date));
    const qry = await this.connection(
      this.connection.raw(
        "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp"
      )
    )
      .select(
        this.connection.raw(
          "tbl_Produto.fkCategoria as produto, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
        )
      )
      .orderBy("tbl_Produto.fkCategoria", "asc")
      .groupBy(["tbl_Produto.fkCategoria", "tOperacaoOrdemProducao.DataInicio"])
      .where({ DataInicio: data })
      .where(this.connection.raw("fkOperacao in (3058, 3158)"));
    return qry;
  }
}
