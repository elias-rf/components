import { delCreateAux } from "./aux";

export async function initDb() {
  await delCreateAux("agenda_telefone", {
    del: ["*"],
    create: [{ agenda_telefone_id: 1, nome: "tel1" }],
  });

  await delCreateAux("cidade", {
    del: ["*"],
    create: [
      { cidade_id: 1, uf_id: 1, uf: "SP", uf_old: "SP", nome_cidade: "cid1" },
    ],
  });

  await delCreateAux("cliente", {
    del: ["*"],
    create: [{ cliente_id: 1, cidade: "cid1" }],
  });

  await delCreateAux("esterilizacao_externa", {
    del: ["*"],
    create: [
      {
        esterilizacao_externa_id: "1",
        data_envio: "2020-01-01",
        quantidade: 10,
      },
    ],
  });

  await delCreateAux("esterilizacao_interna", {
    del: ["*"],
    create: [{ esterilizacao_interna_id: "1" }],
  });

  await delCreateAux("estoque", {
    del: ["*"],
    create: [{ filial_id: "1", produto_plano_id: 1, estoque: 0 }],
  });

  await delCreateAux("nf_cfop", {
    del: ["*"],
    create: [{ cfop: 5151 }],
  });

  await delCreateAux("nf_saida", {
    del: ["*"],
    create: [
      {
        filial_id: 1,
        nota_id: 1,
        serie_id: 1,
        modelo_id: 1,
        data_emissao: "2020-01-01",
        tipo: "S",
        nota_complemento: "N",
        cfop: 5151,
        eh_estatistica: "S",
        cliente_id: 1,
        vendedor_id: 1,
      },
      {
        filial_id: 2,
        nota_id: 1,
        serie_id: 1,
        modelo_id: 1,
        data_emissao: "2020-01-01",
        tipo: "S",
        nota_complemento: "N",
        cfop: 5151,
        eh_estatistica: "S",
        cliente_id: 1,
        vendedor_id: 1,
      },
    ],
  });

  await delCreateAux("nf_saida_item", {
    del: ["*"],
    create: [
      {
        filial_id: 1,
        nota_id: 1,
        serie_id: 1,
        modelo_id: 1,
        produto_plano_id: 1,
        cfop: 5151,
        quantidade: 10,
        imprime_componente: "N",
        sequencia: 1,
        valor_liquido: 2,
      },
      {
        filial_id: 2,
        nota_id: 1,
        serie_id: 1,
        modelo_id: 1,
        produto_plano_id: 1,
        cfop: 5151,
        quantidade: 10,
        imprime_componente: "N",
        sequencia: 1,
        valor_liquido: 2,
      },
    ],
  });

  await delCreateAux("operacao_producao", {
    del: ["*"],
    create: [
      {
        operacao_producao_id: 3058,
        operacao: "3058",
      },
      {
        operacao_producao_id: 3059,
        operacao: "3059",
      },
    ],
  });

  await delCreateAux("ordem_producao", {
    del: ["*"],
    create: [
      {
        ordem_producao_id: 1,
        produto_item_id: 1,
        esterilizacao_externa_id: 1,
        esterilizacao_interna_id: 1,
        esterilizacao_externa_quantidade: 10,
      },
      { ordem_producao_id: "00000100", produto_item_id: 1 },
    ],
  });

  await delCreateAux("ordem_producao_operacao", {
    del: ["*"],
    create: [
      {
        ordem_producao_operacao_id: 100,
        ordem_producao_id: "00000100",
        data_hora_inicio: "2020-01-01 12:00:00",
        operacao_id: "3059",
        quantidade_conforme: 10,
      },
      {
        ordem_producao_operacao_id: 1,
        ordem_producao_id: "1",
        data_hora_inicio: "2020-01-01 12:00:00",
        operacao_id: "3058",
        quantidade_conforme: 10,
      },
      {
        ordem_producao_operacao_id: 2,
        ordem_producao_id: "1",
        data_hora_inicio: "2020-01-01 12:00:00",
        operacao_id: "3059",
        quantidade_conforme: 10,
      },
    ],
  });

  await delCreateAux("produto", {
    del: ["*"],
    create: [{ produto_id: 1, categoria_id: "cat1" }],
  });

  await delCreateAux("produto_item", {
    del: ["*"],
    create: [
      {
        produto_item_id: 1,
        nome_produto_item: "proditem1",
        produto_plano_id: 1,
        produto_id: 1,
      },
    ],
  });

  await delCreateAux("produto_categoria", {
    del: ["*"],
    create: [{ produto_categoria_id: 1, categoria: "cat1" }],
  });

  await delCreateAux("produto_estatistica", {
    del: ["*"],
    create: [
      { filial_id: 1, ano: 2023, mes: 1, produto_plano_id: 1, entrada: 0 },
      { filial_id: 1, ano: 2020, mes: 1, produto_plano_id: 1, entrada: 0 },
    ],
  });

  await delCreateAux("produto_plano", {
    del: ["*"],
    create: [
      {
        produto_plano_id: 1,
        categoria_id: 1,
        produto: "prodPlano1",
        eh_estatistica: "S",
        controle: "1",
      },
    ],
  });

  // await delCreateAux("usuario", {
  //   create: [
  //     {
  //       nome_login: "user",
  //       nome: "User",
  //       group_id: "dev",
  //       hash: "202cb962ac59075b964b07152d234b70",
  //     },
  //   ],
  // });

  await delCreateAux("vendedor", {
    del: ["*"],
    create: [{ vendedor_id: 1, vendedor: "ven1", eh_controle: "S" }],
  });

  process.exit(0);
}

initDb();
