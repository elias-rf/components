import { TCliente } from "../../types/cliente.type";
import { crudFactory } from "../lib/http/crud.factory";

export type { TCliente };

export const clienteService = {
  ...crudFactory<TCliente>("cliente"),
};
