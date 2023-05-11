import firebird from "node-firebird";

const dbOptions = {
  host: "192.168.1.80",
  port: 3050,
  database: "c:\\caixa\\dados\\banco.fdb",
  user: "sysdba",
  password: "mecmec",
  lowercase_keys: false, // set to true to lowercase keys
  role: null, // default
  pageSize: 4096, // default when creating database
};

export function openDb(options) {
  return firebird.pool(5, options);
}

export async function runQuery(poolDb, sql) {
  return new Promise((resolve, reject) => {
    poolDb.get((errPool, db) => {
      if (errPool) {
        reject(errPool);
      } else {
        db.query(ssql, (errDb, result) => {
          db.detach();
          if (errDb) {
            reject(errDb);
          } else {
            resolve(result);
          }
        });
      }
    });
  });
}

// Exemplo de uso
async function exemplo() {
  const db = openDb(dbOptions);
  const produtos = await runQuery(db, "select * from produtos");
  const clientes = await runQuery(db, "select * from clientes");
}
