import { Knex } from "knex";
import { z, zod } from "../../../utils/zod/z";
import { zsr } from "../../../utils/zod/z-refine";

export function mensal(connection: Knex) {
  return async ({ mes }: { mes: string }) => {
    zod(mes, z.string().superRefine(zsr.month));

    const qry = connection("tOperacaoOrdemProducao")
      .select(
        connection.raw(
          "CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
        )
      )
      .orderByRaw("CONVERT(CHAR(7),[DataInicio],120) desc")
      .groupBy(connection.raw("CONVERT(CHAR(7),[DataInicio],120)"))
      .where(connection.raw("CONVERT(CHAR(7),[DataInicio],120)>=?", [mes]))
      .where(connection.raw("fkOperacao in (3058, 3158)"));

    return qry;
  };
}
