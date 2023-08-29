export const connections = {
  oftalmo: {
    client: 'mssql',
    connection: {
      host: '192.168.192.10',
      user: 'sa',
      password: '#$3pol3-3',
      database: 'OftalmoXPProducao',
      options: {
        enableArithAbort: true,
        trustServerCertificate: true,
      },
    },
    debug: false,
    useNullAsDefault: true,
  },
  plano: {
    client: 'mssql',
    connection: {
      host: '192.168.192.10',
      user: 'sa',
      password: '#$3pol3-3',
      database: 'Visiontech',
      options: {
        enableArithAbort: true,
        trustServerCertificate: true,
      },
    },
    debug: false,
    useNullAsDefault: true,
  },
  sys: {
    client: 'sqlite3',
    debug: false,
    useNullAsDefault: true,
    connection: {
      filename: './sys.sqlite',
    },
  },
}