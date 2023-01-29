import type { TUsuarioRpc } from "../../types/usuario.type";
import { rpcFactory } from "../lib/http/rpc.factory";

const SERVICE = "usuario";

export const usuarioService: TUsuarioRpc = rpcFactory<TUsuarioRpc>(SERVICE);
