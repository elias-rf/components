import { usuarioMapFields } from "./usuario.map-fields.mjs";
import { usuarioSchema } from "./usuario.schema.mjs";
import { usuarioToDto } from "./usuario.to-dto.mjs";

import { ormTableDataSource } from "../../../utils/orm/orm-data-source/index.mjs";
import { argsFromDto } from "../../../utils/orm/utils/args-from-dto.mjs";

export function usuarioDataSource(ds) {
  const orm = ormTableDataSource(ds, usuarioSchema);

  const list = async (args) => {
    const response = await orm.rpc.list(argsFromDto(args, usuarioMapFields));
    if (!response) return [];
    return response.map((record) => usuarioToDto(record));
  };

  const read = async (args) => {
    const response = await orm.rpc.read(argsFromDto(args, usuarioMapFields));
    return usuarioToDto(response);
  };

  const count = (args) => {
    return orm.rpc.count(argsFromDto(args, usuarioMapFields));
  };

  const update = async (args) => {
    const response = await orm.rpc.update(argsFromDto(args, usuarioMapFields));

    if (typeof response === "number") {
      return response;
    }
    return response.map((record) => usuarioToDto(record));
  };

  const del = (args) => {
    return orm.rpc.del(argsFromDto(args, usuarioMapFields));
  };

  const increment = (args) => {
    return orm.rpc.increment(argsFromDto(args, usuarioMapFields));
  };

  const create = async (args) => {
    const response = await orm.rpc.create(argsFromDto(args, usuarioMapFields));
    return response.map((record) => usuarioToDto(record));
  };

  return {
    orm,
    list,
    read,
    count,
    update,
    create,
    del,
    increment,
  };
}
