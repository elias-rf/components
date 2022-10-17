export const connections = {
  oftalmo: {
    origem: {
      client: "mssql",
      connection: {
        host: "192.168.192.10",
        user: "sa",
        password: "#$3pol3-3",
        database: "OftalmoXPProducao",
        options: {
          enableArithAbort: true,
          trustServerCertificate: true,
        },
      },
      debug: false,
      useNullAsDefault: true,
    },
    destino: {
      client: "mssql",
      connection: {
        host: "localhost",
        user: "sa",
        password: "1qaz@WSX",
        database: "OftalmoXPProducao",
        options: {
          enableArithAbort: true,
          trustServerCertificate: true,
        },
      },
      debug: false,
      useNullAsDefault: true,
    },
  },
  plano: {
    origem: {
      client: "mssql",
      connection: {
        host: "192.168.192.10",
        user: "sa",
        password: "#$3pol3-3",
        database: "Visiontech",
        options: {
          enableArithAbort: true,
          trustServerCertificate: true,
        },
      },
      debug: false,
      useNullAsDefault: true,
    },
    destino: {
      client: "mssql",
      connection: {
        host: "localhost",
        user: "sa",
        password: "1qaz@WSX",
        database: "Visiontech",
        options: {
          enableArithAbort: true,
          trustServerCertificate: true,
        },
      },
      debug: false,
      useNullAsDefault: true,
    },
  },
  fullvision: { origem: {}, destino: {} },
};
