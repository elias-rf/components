import { zsr } from "@mono/utils/zod/z-refine";
import { zd, zod } from "@mono/utils/zod/zod";
import { Knex } from "knex";

export function diario(connection: Knex) {
  return async ({
    inicio,
    fim,
  }: {
    inicio: string;
    fim: string;
  }): Promise<{ dia: string; dia_semana: string; quantidade: number }[]> => {
    zod(inicio, zd.string().superRefine(zsr.date));
    zod(fim, zd.string().superRefine(zsr.date));
    const qry = connection("tOperacaoOrdemProducao")
      .select(
        connection.raw("DataInicio as dia, Sum(QtdConforme) AS quantidade")
      )
      .orderBy("DataInicio", "desc")
      .groupBy("DataInicio")
      .whereBetween("DataInicio", [inicio, fim])
      .where(connection.raw("fkOperacao in (3058, 3158)"));
    return qry;
  };
}
