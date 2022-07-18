import { rpcFactory } from "../lib/http/rpc.factory";

const produtoEstatisticaService = {
  ...rpcFactory("produtoEstatistica"),
};

export default produtoEstatisticaService;
