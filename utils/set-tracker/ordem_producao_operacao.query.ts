export const ordemProducaoOperacaoQuery: {
  method: string[];
  bindings?: any[];
  sql: string;
  response: any;
}[] = [
  // ordem-producao | tOperacaoOrdemProducao
  {
    method: ["select"],
    sql: "tOperacaoOrdemProducao",
    bindings: ["2020-01-01", "2020-01-31", "3058"],
    response: [{ quantidade: 1, dia: "2020-01-01" }],
  },
  {
    method: ["select"],
    sql: "tOperacaoOrdemProducao",
    bindings: ["2020-01-01"],
    response: [{ quantidade: 1 }],
  },
  {
    method: ["select"],
    sql: "tOperacaoOrdemProducao",
    bindings: ["2020-01"],
    response: [{ quantidade: 1 }],
  },
  {
    method: ["select"],
    sql: "tOperacaoOrdemProducao",
    bindings: ["10"],
    response: [
      {
        kOperacaoOP: 1,
        fkOp: 1,
        fkOperacao: "3060",
        DataHoraInicio: "2020-02-01",
      },
    ],
  },
  {
    method: ["select"],
    sql: "tOperacaoOrdemProducao",
    bindings: [50],
    response: [
      {
        kOperacaoOP: 1,
        fkOp: 1,
        fkOperacao: "3060",
        DataHoraInicio: "2020-02-01",
      },
    ],
  },
  {
    method: ["insert"],
    sql: "tOperacaoOrdemProducao",
    response: [{ kOperacaoOP: 1 }],
  },
  {
    method: ["delete"],
    sql: "tOperacaoOrdemProducao",
    response: 1,
  },
  {
    method: ["update"],
    sql: "tOperacaoOrdemProducao",
    response: [{ kOperacaoOP: 2 }],
  },
];
