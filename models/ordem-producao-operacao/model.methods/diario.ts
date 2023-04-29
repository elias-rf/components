import { day } from "@mono/utils/date/day";
import { zDate } from "@mono/utils/zod/z-date";
import { zod } from "@mono/utils/zod/zod";
import { Knex } from "knex";
import { z } from "zod";
import { TOrdemProducaoOperacaoDiario } from "../ordem-producao-operacao.type";

export function diario(connection: Knex): TOrdemProducaoOperacaoDiario {
  return async ({
    operacao,
    inicio,
    fim,
  }: {
    operacao: string;
    inicio: string;
    fim: string;
  }) => {
    zod(operacao, z.string().length(4));
    zDate(inicio);
    zDate(fim);

    const qry = connection("tOperacaoOrdemProducao")
      .select("DataInicio as dia")
      .sum({ quantidade: "QtdConforme" })
      .orderBy("DataInicio", "desc")
      .groupBy("DataInicio")
      .where({ fkOperacao: operacao })
      .whereBetween("DataInicio", [inicio, fim]);

    const data = await qry;
    return data.map((item: any) => {
      item.diaSemana = day.utc(item.dia).format("ddd");
      item.dia = day.utc(item.dia).format("YYYY-MM-DD");
      return item;
    });
  };
}
