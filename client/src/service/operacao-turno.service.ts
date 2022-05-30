import isEmpty from "@/utils/is/is-empty";
import { KnexRequest } from "../lib/knex/knex-request";

const OperacaoTurnoService = (client: KnexRequest): any => ({
  schema: async () => ({
    pk: ["turno"],
    fields: [
      {
        field: "turno",
        label: "Mês",
        type: "ID",
      },
      {
        field: "quantidade",
        label: "Quantidade",
        type: "Int",
      },
    ],
  }),

  list: async (operacao: string, dia: string) => {
    if (isEmpty(operacao) || isEmpty(dia)) {
      return [];
    }
    const response = await client("oftalmo", {
      from: [
        {
          raw: "((tbl_Produto INNER JOIN tbl_Produto_Item ON tbl_Produto.kProduto = tbl_Produto_Item.fkProduto) INNER JOIN tOrdemProducao ON tbl_Produto_Item.kProdutoItem = tOrdemProducao.fkProdutoItem) INNER JOIN (tOperacaoDeProducao INNER JOIN tOperacaoOrdemProducao ON tOperacaoDeProducao.kOperacao = tOperacaoOrdemProducao.fkOperacao) ON tOrdemProducao.kOp = tOperacaoOrdemProducao.fkOp",
        },
      ],
      select: [
        {
          raw: "case when tOperacaoOrdemProducao.HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao.HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao.HoraInicio <='22:30:00' then 'T2' else 'T3' end as turno",
        },
      ],
      sum: [{ quantidade: "tOperacaoOrdemProducao.QtdConforme" }],
      groupByRaw: [
        "case when tOperacaoOrdemProducao.HoraInicio <='06:00:00' then 'T3' when tOperacaoOrdemProducao.HoraInicio <='14:00:00' then 'T1' when tOperacaoOrdemProducao.HoraInicio <='22:30:00' then 'T2' else 'T3' end",
      ],
      where: [
        ["fkOperacao", operacao],
        ["DataInicio", dia],
      ],
    });
    return response;
  },
});
export default OperacaoTurnoService;
