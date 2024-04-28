import { sysDb } from "./sys.db.mjs";
import { usuarioDataSource } from "./usuario/usuario.data-source.mjs";

export const sysDataSource = {
  ds: sysDb,
  usuario: { ...usuarioDataSource(sysDb) },
};
