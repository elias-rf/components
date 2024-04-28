import { JSONRPCServer } from "json-rpc-2.0";
import { usuarioController } from "./usuario/usuario_controller.mjs";

function list() {
  return Object.keys(modules);
}

export const modules = {
  // UTILIDADE
  sys_list: list,

  ...usuarioController,
};

function registerController(server) {
  for (const [moduleKey, module] of Object.entries(modules)) {
    server.addMethod(moduleKey, module);
  }
}

/** @type JSONRPCServer<{req:any;res:any;user:any}> */
export const rpcServer = new JSONRPCServer();

registerController(rpcServer);
