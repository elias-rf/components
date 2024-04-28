import { count } from "./count.mjs";
import { create } from "./create.mjs";
import { del } from "./del.mjs";
import { list } from "./list.mjs";
import { login } from "./login.mjs";
import { me } from "./me.mjs";
import { read } from "./read.mjs";
import { update } from "./update.mjs";

export const usuarioUseCases = (dataSource) => ({
  list: list(dataSource.sys.usuario),
  read: read(dataSource.sys.usuario),
  count: count(dataSource.sys.usuario),
  update: update(dataSource.sys.usuario),
  create: create(dataSource.sys.usuario),
  del: del(dataSource.sys.usuario),
  me: me(dataSource.sys.usuario),
  login: login(dataSource.sys.usuario),
});
