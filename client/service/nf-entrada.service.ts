import { TNfEntradaRpc } from "../../types/nf-entrada.type";
import { rpcFactory } from "../lib/http/rpc.factory";

const SERVICE = "nf_entrada";

export const nfEntradaService = rpcFactory<TNfEntradaRpc>(SERVICE);
