import { TNfEntradaLogRpc } from "../../types/nf-entrada-log.type";
import { rpcFactory } from "../lib/http/rpc.factory";

const SERVICE = "nf_entrada_log";

export const nfEntradaLogService = rpcFactory<TNfEntradaLogRpc>(SERVICE);
