import { container } from "../../model/container";
import { rpcServer } from "../../utils/rpc/rpc-server";

export const rpc = rpcServer();

export const rpcNames = Object.keys(container.registrations).filter((name) =>
  name.endsWith("Rpc")
);

function help(initiais: string) {
  return rpc.help(initiais);
}

function getName(lib: string, name: string) {
  if (lib.endsWith("Rpc")) {
    return (
      lib.substring(0, lib.length - 3) +
      name.charAt(0).toUpperCase() +
      name.slice(1)
    );
  }
  return name;
}

function register(libName: string) {
  const libRpc = container.resolve(libName);
  if (Object.hasOwn(libRpc, "mutation")) {
    Object.keys(libRpc.mutation).forEach((key: any) => {
      rpc.addMethod("mutation", getName(libName, key), libRpc.mutation[key]);
    });
  }
  if (Object.hasOwn(libRpc, "query")) {
    Object.keys(libRpc.query).forEach((key: any) => {
      rpc.addMethod("query", getName(libName, key), libRpc.query[key]);
    });
  }
}

rpc.addMethod("query", "help", help);

let lib: string;
for (lib of rpcNames) {
  register(lib);
}
