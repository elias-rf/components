import { Knex } from "knex";
import { z } from "zod";
import { zod } from "../../../utils/zod/z";
import { zsr } from "../../../utils/zod/z-refine";
import { TOrdemProducaoOperacaoMensal } from "../ordem-producao-operacao.type";

export function mensal(connection: Knex): TOrdemProducaoOperacaoMensal {
  return async ({ operacao, mes }: { operacao: string; mes: string }) => {
    zod(operacao, z.string());
    zod(mes, z.string().superRefine(zsr.month));

    const qry = await connection("tOperacaoOrdemProducao")
      .select(
        connection.raw(
          "CONVERT(CHAR(7),[DataInicio],120) AS mes, Sum(tOperacaoOrdemProducao.QtdConforme) AS quantidade"
        )
      )
      .orderByRaw("CONVERT(CHAR(7),[DataInicio],120) desc")
      .groupBy(connection.raw("CONVERT(CHAR(7),[DataInicio],120)"))
      .having(connection.raw("CONVERT(CHAR(7),[DataInicio],120)>=?", [mes]))
      .where({ fkOperacao: operacao });
    return qry;
  };
}
