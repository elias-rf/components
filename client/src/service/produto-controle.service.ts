import { rpcFactory } from "../lib/http/rpc.factory";

const produtoControleService = {
  ...rpcFactory("produtoControle"),
};

export default produtoControleService;
