export const nfSaidaQuery = [
  {
    method: ["select"],
    sql: "select CONVERT(CHAR(10),[MestreNota].[DtEmissao],120) AS dia",
    response: [{ dia: "2020-01-01", NmCategoria: "categoria", quantidade: 10 }],
  },
  {
    method: ["select"],
    sql: "select CONVERT(CHAR(7),[MestreNota].[DtEmissao],120) AS mes",
    response: [{ mes: "2020-01", NmCategoria: "categoria", quantidade: 10 }],
  },
  {
    method: ["select"],
    sql: "select CadPro.Descricao as modelo",
    response: [{ modelo: "modelo", quantidade: 10 }],
  },
  {
    method: ["select"],
    sql: 'select "NmCategoria", "MestreNota"."DtEmissao"',
    response: [{ categoria: "categoria", DtEmissao: "2020-01-01" }],
  },
  {
    method: ["select"],
    sql: 'select "CategPro"."NmCategoria", "MestreNota"."CdCliente"',
    response: [
      {
        NmCategoria: "categoria",
        CdCliente: 123,
        anoMes: "2020-01",
        quantidade: 10,
        valor: 100,
      },
    ],
  },
  {
    method: ["select"],
    sql: `select 'FV' as origem, "CategPro"."NmCategoria"`,
    response: [
      {
        origem: "FV",
        NmCategoria: "categoria",
        DtEmissao: "2020-01-01",
      },
    ],
  },
  {
    method: ["select"],
    sql: `select 'VT' as origem, "CategPro"."NmCategoria"`,
    response: [
      {
        origem: "VT",
        NmCategoria: "categoria",
        DtEmissao: "2020-01-01",
      },
    ],
  },
];
