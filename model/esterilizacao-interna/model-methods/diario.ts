import { Knex } from "knex";
import { z, zod } from "../../../utils/zod/z";
import { zsr } from "../../../utils/zod/z-refine";

export function diario(connection: Knex) {
  return async ({
    inicio,
    fim,
  }: {
    inicio: string;
    fim: string;
  }): Promise<{ dia: string; dia_semana: string; quantidade: number }[]> => {
    zod(inicio, z.string().superRefine(zsr.date));
    zod(fim, z.string().superRefine(zsr.date));
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
